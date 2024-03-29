import type { Metadata } from 'next'
import { Antonio,League_Spartan } from 'next/font/google'
import './globals.scss'

 const antonio=Antonio({
  subsets: ['latin'],
  variable: "--font-antonio",

})

const spartan=League_Spartan({
  subsets: ['latin'],
  variable: "--font-spartan",

})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spartan.variable} ${antonio.variable}`}>{children}</body>
    </html>
  )
}
