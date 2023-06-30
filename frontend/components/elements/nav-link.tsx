import Link from "next/link"
import { NavLinkProps } from "../../schema/types"


export default function NavLink(props : NavLinkProps) {
  return (
    <Link
      className={`${props.className} text-lg transition duration-100 ease-in-out hover:opacity-60`}
      href={props.href}>
        {props.text}
    </Link>
  )
}
