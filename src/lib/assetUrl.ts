const EXTERNAL_URL_RE = /^(?:https?:)?\/\//i

/**
 * Resolves a static asset inside `public/` against Vite's `BASE_URL`
 * so paths remain valid on GitHub Pages subpaths like `/portfolio/`.
 */
export function resolveAssetUrl(
  relativePath: string,
  baseUrl: string = import.meta.env.BASE_URL ?? '/',
): string {
  if (!relativePath || EXTERNAL_URL_RE.test(relativePath) || relativePath.startsWith('data:')) {
    return relativePath
  }
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const normalizedPath = relativePath.replace(/^\/+/, '')
  return `${normalizedBase}${normalizedPath}`
}
