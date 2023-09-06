import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
  preflight: true,
  outdir: 'pandacss',
  jsxFramework: 'react',
  globalCss: {
    extend: {
      html: {
        scrollPaddingTop: '6rem',
        minHeight: '100%',
      },
      'html, body': {
        display: 'flex',
        flexDirection: 'column',
        height: 'unset',
      },
      pre: {
        fontFamily: 'var(--font-code)',
        overflowX: 'auto',
        fontSize: '14px !important',
        '--shiki-color-text': 'white',
        '--shiki-color-background': 'colors.grayPalette.400',
        '--shiki-token-constant': 'colors.grayPalette.400',
        '--shiki-token-string': 'colors.grayPalette.400',
        '--shiki-token-comment': 'colors.grayPalette.400',
        '--shiki-token-keyword': 'colors.grayPalette.400',
        '--shiki-token-parameter': 'colors.grayPalette.400',
        '--shiki-token-function': 'white',
        '--shiki-token-string-expression': 'colors.grayPalette.400',
        '--shiki-token-punctuation': 'colors.grayPalette.400',
        '--shiki-token-link': 'colors.grayPalette.400',
        '& code': {
          fontFamily: 'inherit',
        },
      },
    },
  },
})
