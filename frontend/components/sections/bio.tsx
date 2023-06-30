import Link from "next/link";
import GitHubIcon from "../../public/images/logos/github-icon";
import LinkedInIcon from "../../public/images/logos/linkedin-icon";
import SocialLink from "../elements/social-link";


export default function Bio() {
  return (
    <section id='bio' className="section">
        <div className='flex gap-4 justify-evenly'>
            <div className='w-[66%] flex flex-col gap-6'>
                <h2 className="text-5xl font-bold text-white">
                I'm Noah Arevalo. I live in Virginia, where I build the future.
                </h2>
                <p className='text-white text-lg font-light text-opacity-60 leading-relaxed'>
                    I've loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.

                </p>
            </div>

            <div className="w-[33%] flex flex-col items-center gap-2">

                <SocialLink icon={LinkedInIcon} href="">Follow On LinkedIn</SocialLink>
                <SocialLink icon={GitHubIcon} href="">Follow On LinkedIn</SocialLink>

                {/* <Link href = "mailto: me@noaharevalo.com">me@noaharevalo.com</Link> */}

            </div>
        </div>
    </section>
  )
}
