import Link from 'next/link';
import { Tajawal } from 'next/font/google';

import './globals.css'
import { Nav } from '../../components/sections/nav';
import { FooterProps } from '../../schema/types';
import NavLink from '../../components/elements/nav-link';


const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  style: ["normal"],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: "noah's site",
  description: "hi, i'm noah",
}

const links : { text : string,  href : string}[] = [
  { text : 'About', href : '#about' },
  { text : 'Contact', href : '#contact' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={tajawal.className}>
        <Nav
          links={links}
          className='flex justify-center py-4 inset-x-0 top-0 w-full z-50'/>
          {/* the className prop can be overridden by page-specific layouts. */}
        {children}
        <Footer links={links}/>
      </body>
    </html>
  )
}


const Footer = (props : FooterProps) => {
  return(
    <footer id='footer'>
      <div className='flex justify-center items-center bottom-0 bg-dark-gray border-t border-white border-opacity-20'>
          {
            props.links.map(
              (link) => (
                <NavLink
                  className='text-lg transition duration-100 ease-in-out hover:opacity-60'
                  key={link.text}
                  text={link.text}
                  href={link.href}/>
              )
            )
          }
      </div>
    </footer>
  )
}
