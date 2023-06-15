//Data/Object Types

interface link {
    text : string
    href : string
}

//Props

export type NavProps = {
    className? : string
    links : link[]
}

export type NavLinkProps = link & {
    className? : string
}
