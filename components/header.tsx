import Head from "next/head";
import { title, siteDescription, logo, themeColour} from "../data/config";

export default function Header(data:{title: string}) {
    return (
        <Head>
            <title>{data.title}: {title}</title>
            <meta name="description" content={siteDescription} />
            <meta name="theme-color" content={themeColour}/>
            <meta property="og:image" content={logo}/>

            <link rel="icon" href={logo} />

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"></link>
        </Head>
    )
}