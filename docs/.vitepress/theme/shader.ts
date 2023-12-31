import { createContentLoader } from 'vitepress'

export interface Shader {
  name: string
  banner: string
  tags: [ string ]
  href: string
  date: {
    time: number
    string: string
  }
}

export function createShaderPageLoader(lookFiles: string, baseUrl: string) {
  return createContentLoader(lookFiles, {
    transform(raw): Shader[] {
      return raw
      .map(({ url, frontmatter }) => ({
        name: frontmatter.name,
        banner: frontmatter.banner,
        tags: frontmatter.tags,
        href: baseUrl + url,
        date: formatDate(frontmatter.last_updated)
      })).sort((a, b) => b.date.time - a.date.time)
    }
  })
}

export function formatDate(raw: string): Shader['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
  