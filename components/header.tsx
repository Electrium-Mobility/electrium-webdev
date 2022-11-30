import Head from "next/head"
export default function Header(data:{title: string}) {
    return (
        <Head>
            <title>{data.title}</title>
            <meta name="description" content="EMO" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}