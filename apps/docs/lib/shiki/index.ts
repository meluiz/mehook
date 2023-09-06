import type { Highlighter, Lang } from 'shiki'

import path from 'path'

import { getHighlighter, renderToHtml } from 'shiki'

let highlighter: Highlighter

export type HighlightOptions = {
  code: string
  lang?: Lang
}

export async function highlight(options: HighlightOptions) {
  const { code, lang } = options
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: ['tsx', 'typescript', 'zsh'],
      theme: 'css-variables',
      paths: {
        themes: path.join(process.cwd(), 'lib', 'Shiki', 'themes'),
        languages: path.join(process.cwd(), 'lib', 'Shiki', 'languages'),
      },
    })
  }

  const tokens = highlighter.codeToThemedTokens(code, lang, 'css-variables', {
    includeExplanation: false,
  })
  const html = renderToHtml(tokens, {
    bg: 'transparent',
  })

  return html
}
