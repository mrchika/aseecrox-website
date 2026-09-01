export const metadata = {
  title: 'Aseecrox',
  description: 'Aseecrox Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
