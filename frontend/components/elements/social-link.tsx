import Link from 'next/link';
import React from 'react';

interface IconProps {
    color: 'black' | 'white';
    className?: string;
  }

type Icon = (props: IconProps) => JSX.Element;

export type SocialLinkProps = {
    icon : Icon
    children : string
    href : string
    // may need to add prop to open in new tab
}

export default function SocialLink(props : SocialLinkProps) {
  return (
    <div className='flex items-center gap-3 transition duration-100 ease-in-out hover:opacity-70'>
        {React.createElement(props.icon, {color: 'white', className: 'h-6 w-7 opacity-40'})}
        {/* create the icon with the fixed height appropriate for this component & pass in respective props. */}
        <Link
            className='opacity-90'
            href={props.href}
            rel="noopener noreferrer"
            target="_blank">
                {props.children}
        </Link>
    </div>
  )
}
