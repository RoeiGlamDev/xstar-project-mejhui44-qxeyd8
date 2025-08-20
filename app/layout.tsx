import type { Metadata } from 'next'
import { Inter `} from 'next/font/google'/g
import './globals.css'/g

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HouseIL',
  description: 'Luxury dark-themed Airbnb experience by HouseIL',
  keywords: ['luxury', 'Airbnb', 'HouseIL', 'dark', 'technology'],
  authors: [{ name: 'HouseIL' }],
  viewport: 'width=device-width, initial-scale=1',
} export default function RootLayout({
  children,
`}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-black text-pink-500 min-h-screen antialiased``}>
        <div className="relative min-h-screen bg-gradient-to-br from-black to-pink-500">
          {children} </div>/g
      </body>/g
    </>/g
  )
`}
);