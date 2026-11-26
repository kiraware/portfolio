import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Full Violet Evergarden Portfolio App integration', () => {
  beforeEach(() => {
    document.head.innerHTML = '<meta name="color-scheme" content="light dark">'
    window.localStorage.clear()
    window.history.replaceState(null, '', '/portfolio/')

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    })
  })

  it('renders skip-to-content and all portfolio sections without exposing personal phone number', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('link', { name: /Langsung ke konten utama/i })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(document.getElementById('projects')).toBeInTheDocument()
    expect(document.getElementById('experience')).toBeInTheDocument()
    expect(document.getElementById('opensource')).toBeInTheDocument()
    expect(document.getElementById('skills')).toBeInTheDocument()
    expect(document.getElementById('contact')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(container.textContent).not.toContain('085273510987')
  })

  it('filters experience records cleanly across All, Work & Projects, and Teaching & Community', async () => {
    const user = userEvent.setup()
    render(<App />)

    const expSection = document.getElementById('experience')!
    expect(within(expSection).getAllByTestId('experience-item')).toHaveLength(15)

    await user.click(within(expSection).getByRole('button', { name: /Asisten Dosen & Komunitas/i }))
    expect(within(expSection).getAllByTestId('experience-item')).toHaveLength(6)
    expect(within(expSection).getByText(/Asisten Dosen — Pemrograman Web/i)).toBeInTheDocument()

    await user.click(within(expSection).getByRole('button', { name: /Kerja & Proyek/i }))
    expect(within(expSection).getAllByTestId('experience-item')).toHaveLength(9)
    expect(within(expSection).getByText(/PT TASPEN \(Persero\)/i)).toBeInTheDocument()
  })

  it('renders Open Source PyPI packages, Jazzband, awesome-translation, @PraveInc, and supports copying pip commands', async () => {
    const user = userEvent.setup()
    render(<App />)

    const ossSection = document.getElementById('opensource')!
    expect(within(ossSection).getByText('pip install PyBMKG')).toBeInTheDocument()
    expect(within(ossSection).getByText('pip install paspybin')).toBeInTheDocument()
    expect(within(ossSection).getByText('pip install pycodecov')).toBeInTheDocument()
    expect(within(ossSection).getByText(/Anggota Organisasi Jazzband/i)).toBeInTheDocument()
    expect(within(ossSection).getByRole('heading', { name: /awesome-translation/i })).toBeInTheDocument()
    expect(within(ossSection).getByText('@PraveInc')).toBeInTheDocument()

    const copyButtons = within(ossSection).getAllByRole('button', { name: /Salin perintah/i })
    // WCAG 2.5.3 Label in Name: localized visible label matches start of aria-label
    expect(copyButtons[0]).toHaveTextContent('Salin')
    expect(copyButtons[0]?.getAttribute('aria-label')?.startsWith('Salin')).toBe(true)

    await user.click(copyButtons[0]!)
    expect(within(ossSection).getByRole('status')).toHaveTextContent(/Tersalin/i)
  })

  it('does not falsely claim copied when clipboard fails in OpenSourceSection and ContactSection', async () => {
    const user = userEvent.setup()
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error('Permission denied')) },
    })
    document.execCommand = vi.fn().mockReturnValue(false)

    render(<App />)

    const ossSection = document.getElementById('opensource')!
    const copyButtons = within(ossSection).getAllByRole('button', { name: /Salin perintah/i })
    await user.click(copyButtons[0]!)
    expect(within(ossSection).queryByText(/Tersalin!/i)).not.toBeInTheDocument()
    expect(within(ossSection).getByRole('status')).toHaveTextContent(/Gagal menyalin/i)

    const contactSection = document.getElementById('contact')!
    await user.click(within(contactSection).getByRole('button', { name: /Salin Alamat Email/i }))
    expect(within(contactSection).queryByText(/Email Tersalin/i)).not.toBeInTheDocument()
    expect(within(contactSection).getByRole('status')).toHaveTextContent(/Gagal menyalin/i)
  })

  it('supports copying email in Contact section and translates the entire page ID <-> EN', async () => {
    const user = userEvent.setup()
    render(<App />)

    const contactSection = document.getElementById('contact')!
    expect(
      within(contactSection).getByText('cakrawangsaprabaalkautsar7@gmail.com'),
    ).toBeInTheDocument()

    await user.click(within(contactSection).getByRole('button', { name: /Salin Alamat Email/i }))
    expect(within(contactSection).getByRole('status')).toHaveTextContent(/Email Tersalin/i)

    // Switch entire page from ID to EN
    await user.click(screen.getByRole('button', { name: /Ganti bahasa ke Inggris/i }))
    expect(screen.getByText(/Featured Projects & Live Screenshots/i)).toBeInTheDocument()
    expect(screen.getByText(/Work, Engineering & Teaching Experience/i)).toBeInTheDocument()
    expect(screen.getByText(/Open Source, PyPI & Creator Spotlight/i)).toBeInTheDocument()
    expect(screen.getByText(/Technical Skills, Education & Certifications/i)).toBeInTheDocument()
    expect(screen.getByText(/Let's Build Something Meaningful Together/i)).toBeInTheDocument()
  })
})
