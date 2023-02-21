import Layout from "../components/layout"
import styles from "../styles/Sponsors.module.scss"
import Button from "../components/button"
import variables from "../styles/_next_access.module.scss"
import { Sponsor, contact, hero, sponsors } from "../data/sponsors"
import Image from "next/image"
import { email } from "../data/config";

export default function Sponsors() {
    const content = (
        <>
        <div className={styles.topSection}>
            <div className={styles.topLeftSide}>
                <h1>{hero.title}</h1>
                <p>{hero.description}</p>
            </div>
            <Button backgroundColour={variables.buttonB} href={""} content={"Become a Sponsor"} textColour={variables.buttonA}></Button>
        </div>
        <div className={styles.imagesSection}>
            {sponsors.map((sponsor: Sponsor, i: number) => (
                <div key={i} className={styles.imageContainer}>
                    <Image src={sponsor.image} alt={sponsor.name} fill></Image>
                </div>
            ))}
        </div>
        <div className={styles.bottomSection}>
            <div className={styles.textContainer}>
                <h2>{contact.title}</h2>
                <p>{contact.description}</p>
                <a href={ "mailto:" + email }>{ email }</a>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/imgs/contact_us.svg" alt="idk" fill></Image>
            </div>
        </div>
        </>
    )
    return(<Layout{...{content:content, name:"Sponsors"}}/>)
}
