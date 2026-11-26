import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

if (typeof globalThis.IntersectionObserver === 'undefined') {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null
    readonly rootMargin = '0px'
    readonly scrollMargin = '0px'
    readonly thresholds: ReadonlyArray<number> = [0]

    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return []
    }
  }

  globalThis.IntersectionObserver = MockIntersectionObserver
}

afterEach(() => {
  cleanup()
})
