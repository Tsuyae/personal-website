//Data/Object Types

interface link {
    text : string
    href : string
}



//Component Props

export type NavProps = {
    className? : string
    links : link[]
}

export type NavLinkProps = link & {
    className? : string
}

export type FooterProps = {
    links: link[]
    className? : string
}

export type GitHubIconProps = {
    color : 'white' | 'black'
    className? : string
}

export type LinkedInIconProps = {
    color : 'white' | 'black'
    className? : string
}
