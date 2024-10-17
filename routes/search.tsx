import { Handlers, PageProps } from '$fresh/server.ts'

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"]

interface Data {
    result: string[]
    query: string
}

export const handler: Handlers<Data> = {
    GET(req: Request, ctx: FreshContext) {
        const url = new URL(req.url)
        const query = url.searchParams.get('q') || ''
        const result = NAMES.filter(name => name.toLowerCase().includes(query.toLowerCase()))
        return ctx.render({ result, query })
    }
}

export default function Page({ data }: PageProps<Data>) {
    const { result, query } = data
    return (
        <div>
            <form>
                <input type="text" name="q" value={query} />
                <button type="submit">Search</button>
            </form>
            <ul>
                {result.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

