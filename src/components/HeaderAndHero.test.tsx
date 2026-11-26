import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from '../context/LanguageContext'
import { Header } from './Header'
import { Hero } from './Hero'
import { AmbientPetals } from './AmbientPetals'

function setupMetaAndMatchMedia(prefersDark = false) {
  document.head.innerHTML = '<meta name="color-scheme" content="light dark">'
  window.localStorage.clear()
  window.history.replaceState(null, '', '/portfolio/')

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('dark') ? prefersDark : false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

function renderWithProviders() {
  return render(
    <MotionConfig reducedMotion="always">
      <LanguageProvider>
        <Header />
        <main id="main-content">
          <Hero />
        </main>
      </LanguageProvider>
    </MotionConfig>,
  )
}

describe('Header, AmbientPetals, and Hero components', () => {
  it('renders brand monogram, 5 nav links, language switcher, theme toggle, and mobile drawer trigger', () => {
    setupMetaAndMatchMedia(false)
    renderWithProviders()

    const banner = screen.getByRole('banner')
    expect(within(banner).getByText('CA')).toBeInTheDocument()
    const nav = within(banner).getByRole('navigation', { name: /navigasi utama/i })
    expect(nav.querySelectorAll('a')).toHaveLength(5)

    const menuBtn = screen.getByRole('button', { name: /buka menu navigasi/i })
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
    expect(menuBtn).toHaveAttribute('aria-controls', 'mobile-nav-drawer')
  })

  it('switches Hero and Header copy from Indonesian to English and back via the language toggle', async () => {
    setupMetaAndMatchMedia(false)
    const user = userEvent.setup()
    renderWithProviders()

    expect(screen.getByText(/Jelajahi Proyek/i)).toBeInTheDocument()

    const langBtn = screen.getByRole('button', { name: /ganti bahasa ke inggris/i })
    await user.click(langBtn)

    expect(screen.getByText(/Explore Projects/i)).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('en')

    const switchBackBtn = screen.getByRole('button', { name: /switch language to indonesian/i })
    await user.click(switchBackBtn)

    expect(screen.getByText(/Jelajahi Proyek/i)).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('id')
  })

  it('toggles theme color-scheme meta tag and updates accessible label', async () => {
    setupMetaAndMatchMedia(false)
    const user = userEvent.setup()
    renderWithProviders()

    const toDarkBtn = screen.getByRole('button', { name: /aktifkan mode gelap/i })
    await user.click(toDarkBtn)

    const meta = document.head.querySelector('meta[name="color-scheme"]')
    expect(meta?.getAttribute('content')).toBe('dark')
    expect(screen.getByRole('button', { name: /aktifkan mode terang/i })).toBeInTheDocument()
  })

  it('renders AmbientPetals with Pause/Play toggle that flips label without aria-pressed', async () => {
    setupMetaAndMatchMedia(false)
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <AmbientPetals />
      </LanguageProvider>,
    )

    const pauseBtn = screen.getByRole('button', { name: /jeda animasi kelopak/i })
    expect(pauseBtn).not.toHaveAttribute('aria-pressed')
    // WCAG 2.5.3 Label in Name: visible label matches localized Indonesian text and starts accessible name
    expect(pauseBtn).toHaveTextContent('Jeda')
    expect(pauseBtn.getAttribute('aria-label')?.startsWith('Jeda')).toBe(true)

    await user.click(pauseBtn)

    const playBtn = screen.getByRole('button', { name: /putar animasi kelopak/i })
    expect(playBtn).not.toHaveAttribute('aria-pressed')
    expect(playBtn).toHaveTextContent('Putar')
    expect(playBtn.getAttribute('aria-label')?.startsWith('Putar')).toBe(true)
  })

  it('closes MobileDrawer when clicking outside sheet on dialog backdrop without re-creating IntersectionObserver on header re-renders', async () => {
    setupMetaAndMatchMedia(false)
    const user = userEvent.setup()
    const observeSpy = vi.spyOn(IntersectionObserver.prototype, 'observe')

    HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
      this.setAttribute('open', '')
    })
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
      this.removeAttribute('open')
      this.dispatchEvent(new Event('close'))
    })

    renderWithProviders()

    const initialObserveCalls = observeSpy.mock.calls.length
    expect(initialObserveCalls).toBe(1)

    // Toggle theme in Header -> should NOT recreate MobileDrawer's IntersectionObserver
    await user.click(screen.getByRole('button', { name: /aktifkan mode gelap/i }))
    expect(observeSpy.mock.calls.length).toBe(initialObserveCalls)

    // Open mobile drawer and click directly on <dialog> outside the sheet -> closes drawer
    const menuBtn = screen.getByRole('button', { name: /buka menu navigasi/i })
    await user.click(menuBtn)
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true')

    const drawer = document.getElementById('mobile-nav-drawer') as HTMLDialogElement
    fireEvent.click(drawer)
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')

    observeSpy.mockRestore()
  })

  it('renders Cakrawangsa Praba Alkautsar, GPA 3.87/4.00, desk artwork, and verified links without raw phone number', () => {
    setupMetaAndMatchMedia(false)
    const { container } = renderWithProviders()

    expect(
      screen.getByRole('heading', { level: 1, name: /Cakrawangsa Praba Alkautsar/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('3.87/4.00')).toBeInTheDocument()

    const heroImg = screen.getByAltText(/Ilustrasi jendela klasik/i)
    expect(heroImg.getAttribute('src')).toContain('art/hero-violet-scene.jpg')

    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/kiraware',
    )
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/cakrawangsa-praba-alkautsar',
    )
    expect(container.textContent).not.toContain('085273510987')
  })
})
