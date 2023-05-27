import Link from 'next/link';
import './globals.css'
import { Lato } from 'next/font/google';

const lato = Lato({ 
  weight: ['100', '300', '400', '700', '900'], 
  style: ["normal"], 
  subsets: ['latin'], 
  display: 'swap'
}); 

export const metadata = {
  title: "noah's site",
  description: "hi, i'm noah",
}

const links : { text : string,  href : string}[] = [
  { text : 'about', href : 'about' },
  { text : 'contact', href : 'contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

const Nav  = () => {
  return(
    <nav className='navbar'>
      <div className='flex justify-center items-center gap-4 text-2xl'>
        {links.map((link, index) => (<Link key={index} href={link.href}>{link.text}</Link>))}
      </div>
    </nav>
  )
}

const Footer = () => {
  return(
    <footer>
      <div className='flex justify-center items-center'>
        <p>footer goes here.</p>
      </div>
    </footer>
  )
}