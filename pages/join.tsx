import Button from "../components/button"
import JoinCard from "../components/join-card"
import Layout from "../components/layout"
import styles from "../styles/Join.module.scss"
import variables from "../styles/_next_access.module.scss"
import Image from "next/image"
import { faq, QA } from "../data/faq"
import { apply, hero, reasons, Point } from "../data/join"

export default function Join() {
    const content = (
        <>
        <div className={styles.topThing}>
            <div className={styles.topTextWrapper}>
                <h1>{hero.title}</h1>
                <p>{hero.description}</p>
            </div>
            <Button backgroundColour={variables.buttonB} href={"mailto:electriummobility@gmail.com"} content={"Contact us"} textColour={variables.buttonA}></Button>
        </div>
        <div className={styles.whyJoin}>
            <h2>{reasons.title}</h2>
            <p>{reasons.description}</p>
            {reasons.points.map((point: Point, i:number) => (
                <JoinCard key={i} image={point.image} title={point.title} description={point.description}></JoinCard>
            ))}
        </div>
        <div className={styles.howApply}>
            <h2>{apply.title}</h2>
            <div className={styles.block}>
                <div className={styles.greyCircle}>{apply.stepOne.number}</div>
                <h3>{apply.stepOne.title}</h3>
                {apply.stepOne.description}
            </div>
            <div className={styles.block}>
                <Image src={apply.stepOne.image} alt="submit" fill></Image>
            </div>
            <div className={styles.block}>
                <Image src={apply.stepOne.image} alt="submit" fill></Image>
            </div>
            <div className={styles.block}>
                <div className={styles.greyCircle}>{apply.stepTwo.number}</div>
                <h3>{apply.stepTwo.title}</h3>
                {apply.stepTwo.description}
            </div>
            <div className={styles.block}>
                <div className={styles.greyCircle}>{apply.stepThree.number}</div>
                <h3>{apply.stepThree.title}</h3>
                {apply.stepThree.description}
            </div>
            <div className={styles.block}>
                <Image src={apply.stepThree.image} alt="submit" fill></Image>
            </div>
        </div>
        <div className={styles.faq}>
            <h2>FAQ</h2>
            {faq.map((qa:QA, i:number) => (
                <details key={i} className={styles.question}>
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
