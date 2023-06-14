import Link from 'next/link';
import { Cabin } from 'next/font/google';

import './globals.css'
import { Nav } from '../../components/sections/nav';


const cabin = Cabin({ 
  weight: ['400', '500', '600', '700'], 
  style: ["normal"], 
  subsets: ['latin'], 
  display: 'swap'
}); 

export const metadata = {
  title: "noah's site",
  description: "hi, i'm noah",
}

const links : { text : string,  href : string}[] = [
  { text : 'About', href : 'about' },
  { text : 'Contact', href : 'contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Nav links={links}/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}


const Footer = () => {
  return(
    <footer id='footer'>
      <div className='flex justify-center items-center bg-black bottom-0'>
        <p>footer goes here.</p>
      </div>
    </footer>
  )
}