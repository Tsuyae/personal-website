import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Hero/>
    </main>
  )
}


const Hero = () => {
  return(
    <section id='hero' className='relative isolate overflow-hidden py-14'>
      <Image
        src='/../public/images/photos/hero-background.jpg'
        loading="lazy"
        fill
        alt='Hero Background'
        className='absolute inset-0 -z-10 h-full w-full object-cover brightness-75'/>

        <HeroHeader/>

    </section>
  )
}


const HeroHeader = () => {
  return(
    <div id='hero-header' className='flex justify-center my-24'>
      <div className="flex flex-col justify-center items-center">
        <h1 id='type-header' className='my-4 md:my-8 font-mono text-4xl md:text-6xl'>
          hi
          <span className='inline-flex h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform'>
            {`, i'm noah.`}
          </span>
          <span className='box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform'/>
        </h1>
        <h2 className='text-lg animate-fade-in bg-dark-gray bg-opacity-30 rounded-lg border-2 border-white border-opacity-20 px-4 py-1'>Full Stack Developer</h2>
      </div>
    </div>
  )
}
