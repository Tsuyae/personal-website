interface link {
    text : string
    href : string
}

type Children<T> = { [text in keyof T & string as `children`]: T[text]  }

type link2 = Children<link>;

export type NavProps = {
    links : link[]
}

export type NavLinkProps = link & {
    className? : string
    
}