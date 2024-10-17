import { Handlers, FreshContext } from '$fresh/server.ts'

export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext) {
        const res = await ctx.render()
        res.headers.set('X-Custom-Header', 'Hello')
        return res
    }
}

export default function AboutPage() {
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
    )
}
