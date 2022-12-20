import Head from "next/head"
export default function Header(data:{title: string}) {
    return (
        <Head>
            <title>{data.title}</title>
            <meta name="description" content="EMO something something placeholder thing TODO: this" />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#ff0" />
            <meta property="image" content="/logo.png"/>

            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}