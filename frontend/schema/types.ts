//Data Types

interface link {
    text : string
    href : string
}

//Props

export type NavProps = {
    links : link[]
}

export type NavLinkProps = link & {
    className? : string
}
