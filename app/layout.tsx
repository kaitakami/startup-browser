import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
