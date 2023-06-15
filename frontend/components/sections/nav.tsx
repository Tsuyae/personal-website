import { NavProps } from "../../schema/types"
import NavLink from "../elements/nav-link"


export const Nav = (props: NavProps) => {

    return(
      <nav id='navbar' className={props.className}>
        <div id='navlinks' className='px-6 flex gap-4'>
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
      </nav>
    )
  }
