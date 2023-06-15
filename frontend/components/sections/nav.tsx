import { NavProps } from "../../schema/types"
import NavLink from "../elements/nav-link"


export const Nav = (props: NavProps) => {

    return(
      <nav id='navbar' className={props.className}>
        <div id='navlinks' className='flex gap-4'>
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
