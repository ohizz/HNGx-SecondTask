import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HNG Movie',
  description: 'Movie discovery app created with Nextjs + Tailwindcss + TMBD API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-4xl mx-auto px-10`}>
        <Header/>
        {children}</body>
        <Footer/>
    </html>
  )
}
