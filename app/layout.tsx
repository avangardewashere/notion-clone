import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solution',
  description: 'Connected Workspace for everyone',
  icons:{
    icon:[
      {
        // media:"(prefers-color-scheme:light)",
        url:"/solution.png",
        href:"/dolution.png"
      },
      {
        media:"(prefers-color-scheme:light)",
        url:"/solution.png",
        href:"/dolution.png"
      },
      {
        media:"(prefers-color-scheme:dark)",
        url:"/dark-solution.png",
        href:"/dark-dolution.png"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
