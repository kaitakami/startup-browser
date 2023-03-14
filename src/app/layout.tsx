import './globals.css'
import { Source_Sans_Pro } from 'next/font/google'

const adventPro = Source_Sans_Pro({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Startup Browser',
  description: 'Search your favorite startups and browse between thousands of them',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={adventPro.className}>{children}</body>
    </html>
  )
}
