import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
})
export const metadata = {
  title: 'HNG Movie',
  description: 'Movie discovery app created with Nextjs + Tailwindcss + TMBD API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <div suppressHydrationWarning className={`${montserrat.className}`}>
      <body className={`${montserrat.className}`}>
        <Header/>
        {children}</body>
        <Footer/>
      </div>
    </html>
  )
}
