export default function Home() {
  return (
    <main>
      <Hero/>
    </main>
  )
}


const Hero = () => {
  return(
    <div className="block justify-center">
      <h1 className="my-8 font-mono text-4xl md:text-6xl">
        hi
        <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform">
          {`, i'm noah.`}
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"/>
      </h1>
    </div>
  )
}
