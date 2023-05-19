import { DefaultSeo } from "next-seo"
import type { AppProps } from 'next/app'



export default function MyApp({ Component, pageProps } : AppProps) {
    return (
        <>
            <style jsx global>
            {''
            /* Theme Setup - Your fonts here 
            `
            :root {
                --libre-baskerville-font: ${libre_baskerville.style.fontFamily};
                --bebas-neue-font: ${bebas_neue.style.fontFamily};
            }
            `
            */}
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