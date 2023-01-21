import Head from "next/head"
export default function Header(data:{title: string}) {
    return (
        <Head>
            <title>Electrium Mobility | {data.title}</title>
            <meta name="description" content="EMO something something placeholder thing TODO: this" />
            <meta name="theme-color" content="#0F0"/>
            <meta property="og:image" content="/logo.png"/>

            <link rel="icon" href="/logo.png" />

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"></link>
        </Head>
    )
}