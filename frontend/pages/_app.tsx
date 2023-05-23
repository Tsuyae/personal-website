import { DefaultSeo } from "next-seo"
import type { AppProps } from 'next/app'
import { Lato, Darumadrop_One } from '@next/font/google'

import '../styles/globals.css'


const lato = Lato({ 
    weight: ['100', '300', '400', '700', '900'], 
    style: ["normal"], 
    subsets: ['latin'], 
    display: 'swap'
  });


  const darumadrop_One = Darumadrop_One({ 
    weight: ['400'], 
    style: ["normal"], 
    subsets: ['latin'], 
    display: 'swap'
  }); 



export default function MyApp({ Component, pageProps } : AppProps) {
    return (
        <>
            <style jsx global>
            {
            `
            :root {
                --lato-font: ${lato.style.fontFamily};
                --darumadrop_One-font: ${darumadrop_One.style.fontFamily};
            }
            `
            }
            </style>
            <DefaultSeo 
                titleTemplate={`%s | Site Title `}
                title="Page"
                description="Description"
                additionalMetaTags={[{
                    property: "viewport",
                    content: "width=device-width, initial-scale=1"
                }]}
                openGraph={{
                    images: [
                    {
                    url: '', 
                    width: 100, 
                    height: 100, 
                    alt: '', 
                    }
                    ]
                }}
            />
            <Component {...pageProps}/>
        </>
    );
}