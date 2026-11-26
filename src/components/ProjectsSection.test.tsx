import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from '../context/LanguageContext'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection and ProjectModal', () => {
  let showModalMock: ReturnType<typeof vi.fn>
  let closeMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    window.localStorage.clear()
    window.history.replaceState(null, '', '/portfolio/')

    showModalMock = vi.fn(function (this: HTMLDialogElement) {
      this.setAttribute('open', '')
    })
    closeMock = vi.fn(function (this: HTMLDialogElement) {
      this.removeAttribute('open')
      this.dispatchEvent(new Event('close'))
    })

    HTMLDialogElement.prototype.showModal = showModalMock as unknown as () => void
    HTMLDialogElement.prototype.close = closeMock as unknown as (returnValue?: string) => void
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  function renderProjects() {
    return render(
      <MotionConfig reducedMotion="always">
        <LanguageProvider>
          <ProjectsSection />
        </LanguageProvider>
      </MotionConfig>,
    )
  }

  it('renders all 11 projects under All and filters accurately by category', async () => {
    const user = userEvent.setup()
    renderProjects()

    expect(screen.getAllByTestId('project-card')).toHaveLength(11)

    await user.click(screen.getByRole('button', { name: /Backend & API/i }))
    expect(screen.getAllByTestId('project-card')).toHaveLength(1)
    expect(screen.getByText(/Sistem E-Voting Pilkada Pringsewu 2024/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Open Source & AI/i }))
    expect(screen.getAllByTestId('project-card')).toHaveLength(2)
    expect(screen.getByText(/siakadu-bot/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Aplikasi Web/i }))
    expect(screen.getAllByTestId('project-card')).toHaveLength(8)
  })

  it('opens ProjectModal via showModal() with closedby="any" and switches multi-slide screenshots', async () => {
    const user = userEvent.setup()
    renderProjects()

    const taspenCard = screen.getByRole('button', {
      name: /Portal E-Recruitment PT TASPEN/i,
    })
    await user.click(taspenCard)

    expect(showModalMock).toHaveBeenCalledTimes(1)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('closedby', 'any')
    expect(within(dialog).getByText(/Portal E-Recruitment PT TASPEN/i)).toBeInTheDocument()

    const firstImg = within(dialog).getByRole('img')
    expect(firstImg.getAttribute('src')).toContain('screenshots/rekrutmen-home.png')

    const nextBtn = within(dialog).getByRole('button', {
      name: /Tangkapan layar berikutnya/i,
    })
    await user.click(nextBtn)

    const secondImg = within(dialog).getByRole('img')
    expect(secondImg.getAttribute('src')).toContain('screenshots/rekrutmen-vacancies.png')

    const prevBtn = within(dialog).getByRole('button', {
      name: /Tangkapan layar sebelumnya/i,
    })
    await user.click(prevBtn)
    expect(within(dialog).getByRole('img').getAttribute('src')).toContain(
      'screenshots/rekrutmen-home.png',
    )

    // Carousel dot buttons meet accessible touch target size (>= 44x44px)
    const slideDot = within(dialog).getByRole('button', { name: '1 / 2' })
    expect(slideDot.className).toContain('min-h-11')
    expect(slideDot.className).toContain('min-w-11')
  })

  it('places card trigger button inside h3 rather than wrapping heading elements inside button', () => {
    renderProjects()

    const cards = screen.getAllByTestId('project-card')
    for (const card of cards) {
      const heading = within(card).getByRole('heading', { level: 3 })
      const button = within(heading).getByRole('button')
      expect(heading.contains(button)).toBe(true)
      expect(button.querySelector('h3')).toBeNull()
    }
  })

  it('retains modal content until transitionend when closing with active exit animation', async () => {
    const user = userEvent.setup()
    renderProjects()

    await user.click(
      screen.getByRole('button', { name: /Portal E-Recruitment PT TASPEN/i }),
    )
    const dialog = screen.getByRole('dialog')
    // Simulate active CSS exit transition on <dialog>
    Object.defineProperty(dialog, 'getAnimations', {
      configurable: true,
      value: () => [{ playState: 'running' }],
    })

    await user.click(within(dialog).getByRole('button', { name: /Tutup detail proyek/i }))

    // Content stays mounted during exit transition so dialog never flashes empty
    expect(dialog.querySelector('h3')?.textContent).toMatch(/Portal E-Recruitment PT TASPEN/i)

    // After transitionend, content unmounts cleanly
    fireEvent.transitionEnd(dialog)
    expect(dialog.querySelector('h3')).toBeNull()
  })

  it('supports Safari light-dismiss fallback when closedBy is absent on HTMLDialogElement.prototype', async () => {
    const user = userEvent.setup()
    const hadClosedBy = 'closedBy' in HTMLDialogElement.prototype
    const originalDesc = hadClosedBy
      ? Object.getOwnPropertyDescriptor(HTMLDialogElement.prototype, 'closedBy')
      : undefined
    if (hadClosedBy) {
      delete (HTMLDialogElement.prototype as unknown as Record<string, unknown>).closedBy
    }

    try {
      renderProjects()

      await user.click(
        screen.getByRole('button', { name: /Helpdesk UPA TIK Universitas Lampung/i }),
      )

      const dialog = screen.getByRole('dialog')
      vi.spyOn(dialog, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 600,
        left: 200,
        right: 900,
        width: 700,
        height: 500,
        x: 200,
        y: 100,
        toJSON: () => ({}),
      })

      // Click inside bounding rect -> stays open
      fireEvent.click(dialog, { clientX: 450, clientY: 300 })
      expect(closeMock).not.toHaveBeenCalled()

      // Click outside bounding rect (backdrop) -> closes modal
      fireEvent.click(dialog, { clientX: 50, clientY: 50 })
      expect(closeMock).toHaveBeenCalledTimes(1)
    } finally {
      if (hadClosedBy && originalDesc) {
        Object.defineProperty(HTMLDialogElement.prototype, 'closedBy', originalDesc)
      }
    }
  })
})
