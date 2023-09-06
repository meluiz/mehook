import React from 'react'

import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-code',
})

const Layout: App.Layout = function ({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetBrainsMono.variable} dark`}>
      <body>{children}</body>
    </html>
  )
}

export default Layout
