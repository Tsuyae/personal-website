interface link {
    text : string
    href : string
}

export type NavProps = {
    links : link[]
}

export type NavLinkProps = link & {
    className? : string
}
