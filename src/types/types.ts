export type LayoutPageProps = {
    title:string,
    children:React.ReactNode,
}

export type Category = {
    id?: number,
    name: string,
    createdAt?: string,
    updatedAt?: string,
    user?: User
}

export type User = {
    id: number,
    name?: string,
    email: string,
    password: string,
    categories?: Category[]
}