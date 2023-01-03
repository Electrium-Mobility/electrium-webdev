import Button from "../components/button"
import JoinCard from "../components/join-card"
import Layout from "../components/layout"
import styles from "../styles/Join.module.scss"
import variables from "../styles/_next_access.module.scss"

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
        </>
    )
    return(<Layout{...{content:content, name:"Join"}}/>)
}
