import { describe, expect, it } from 'vitest'
import { resolveAssetUrl } from './assetUrl'

describe('resolveAssetUrl', () => {
  it('resolves relative path under /portfolio/ base', () => {
    expect(resolveAssetUrl('screenshots/rekrutmen.png', '/portfolio/')).toBe(
      '/portfolio/screenshots/rekrutmen.png',
    )
  })

  it('strips leading slash to avoid double slashes', () => {
    expect(resolveAssetUrl('/art/hero-leiden-desk.png', '/portfolio/')).toBe(
      '/portfolio/art/hero-leiden-desk.png',
    )
  })

  it('works with root base /', () => {
    expect(resolveAssetUrl('art/hero-leiden-desk.png', '/')).toBe('/art/hero-leiden-desk.png')
  })

  it('leaves external http/https URLs untouched', () => {
    expect(resolveAssetUrl('https://example.com/a.png', '/portfolio/')).toBe(
      'https://example.com/a.png',
    )
  })
})
