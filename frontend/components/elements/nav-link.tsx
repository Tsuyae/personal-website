import Link from "next/link"
import { NavLinkProps } from "../../schema/types"


export default function NavLink(props : NavLinkProps) {
  return (
    <Link {...props}/>
  )
}