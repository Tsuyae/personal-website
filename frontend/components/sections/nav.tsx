import { NavProps } from "../../schema/types"
import NavLink from "../elements/nav-link"


export const Nav = (props: NavProps) => {

    return(
      <nav id='navbar'>
        <div className='flex justify-center items-center bg-black text-2xl gap-4 py-4'>
            {
                props.links.map(
                    (link, index) => (<NavLink key={index} href={link.href} text={link.text}/>)
                    )
            }
        </div>
      </nav>
    )
  }
