'use client'
import { useState, useEffect } from "react"

import { NavProps } from "../../schema/types"
import NavLink from "../elements/nav-link"
import classNames from "classnames"


export const Nav = (props: NavProps) => {

  const [isSticky, setSticky] = useState(false);

  const stick = () => {
    const hero = document.querySelector('#hero') as HTMLElement;
    const navbar = document.querySelector('#navbar') as HTMLElement;
    if (window.scrollY >= hero.offsetHeight) {
      //note: subtract navbar.offsetHeight from above for alt behavior
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {window.addEventListener('scroll', stick)});

    return(
      <nav id='navbar' className={classNames(props.className,
        isSticky ? 'fixed animate-fade-in bg-dark-gray border-b border-white border-opacity-20' : 'absolute bg-none border-none')}>
        <div id='navlinks' className='px-6 flex gap-4'>
          {
            props.links.map(
              (link) => (
                <NavLink
                  key={link.text}
                  text={link.text}
                  href={link.href}/>
                )
              )
          }
        </div>
      </nav>
    )
  }
