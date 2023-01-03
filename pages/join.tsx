import Button from "../components/button"
import JoinCard from "../components/join-card"
import Layout from "../components/layout"
import styles from "../styles/Join.module.scss"
import variables from "../styles/_next_access.module.scss"
import Image from "next/image"
import { faq, QA } from "../data/faq"

export default function Join() {
    const content = (
        <>
        <div className={styles.topThing}>
            <div className={styles.topTextWrapper}>
                <h1>Join our Expanding Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar.</p>
            </div>
            <Button backgroundColour={variables.buttonB} href={"mailto:electriummobility@gmail.com"} content={"Contact us"} textColour={variables.buttonA}></Button>
        </div>
        <div className={styles.whyJoin}>
            <h2>Why Join?</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <JoinCard image={"/logo.png"} title={"Impact"} description={"Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></JoinCard>
            <JoinCard image={"/logo.png"} title={"Learning"} description={"Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></JoinCard>
            <JoinCard image={"/logo.png"} title={"Networking"} description={"Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></JoinCard>
        </div>
        <div className={styles.howApply}>
            <h2>How to Apply?</h2>
            <div className={styles.block}>
                <div className={styles.greyCircle}>1</div>
                <h3>Submit your Application</h3>
                Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.block}>
                <Image src="/logo.png" alt="submit" fill></Image>
            </div>
            <div className={styles.block}>
                <Image src="/logo.png" alt="submit" fill></Image>
            </div>
            <div className={styles.block}>
                <div className={styles.greyCircle}>2</div>
                <h3>Interview with us</h3>
                Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.block}>
                <div className={styles.greyCircle}>3</div>
                <h3>Wait for decision</h3>
                Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.block}>
                <Image src="/logo.png" alt="submit" fill></Image>
            </div>
        </div>
        <div className={styles.faq}>
            <h2>FAQ</h2>
            {faq.map((qa:QA, i:number) => (
                <details className={styles.question}>
                    <summary><p className={styles.questionText}>{qa.question}</p><p className={styles.arrowDown}>&#x2228;</p></summary>
                    <p>{qa.answer}</p>
                </details>
            ))}
        </div>
        <div className={styles.interested}>
            <h2>Interested in our work?</h2>
            <Button backgroundColour={variables.buttonA} href={""} content={"Apply now"} textColour={variables.buttonB}></Button>
        </div>
        </>
    )
    return(<Layout{...{content:content, name:"Join"}}/>)
}
