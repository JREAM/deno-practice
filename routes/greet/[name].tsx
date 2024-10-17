import { PageProps } from "$fresh/server.ts"

export default function GreetPage(props: PageProps) {
    const { name } = props.params

    return (
        <main>
            <h1>Greet</h1>
            <p>Hello {name}</p>
        </main>
    )
}
