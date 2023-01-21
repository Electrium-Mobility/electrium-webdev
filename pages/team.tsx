import Button from "../components/button"
import Layout from "../components/layout"
import styles from "../styles/Team.module.scss"
import variables from "../styles/_next_access.module.scss"
import { teamOne, teamTwo, teamThree, Member } from "../data/team"
import Card from "../components/member-card"

export default function Team() {
    const content = (
        <>
        <div className={styles.topSection}>
            <div className={styles.topTextHolder}>
                <h1>Meet the Team</h1>
                <b>Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar.</b>
            </div>
            <Button backgroundColour={variables.buttonB} href={"/join"} content={"Join us"} textColour={variables.buttonA}></Button>
        </div>
        <div className={styles.teamList}>
            <h3>{teamOne.title}</h3>
            <p>{teamOne.description}</p>
            {teamOne.teamMembers.map((member:Member, i:number) => (
                <Card key={i} picture={member.image} name={member.fullName} role={member.role} description={member.description}></Card>
            ))}
            <h3>{teamTwo.title}</h3>
            <p>{teamTwo.description}</p>
            {teamTwo.teamMembers.map((member:Member, i:number) => (
                <Card key={i} picture={member.image} name={member.fullName} role={member.role} description={member.description}></Card>
            ))}
            <h3>{teamThree.title}</h3>
            <p>{teamThree.description}</p>
            {teamThree.teamMembers.map((member:Member, i:number) => (
                <Card key={i} picture={member.image} name={member.fullName} role={member.role} description={member.description}></Card>
            ))}
        </div>
        <div className={styles.joinNow}>
            <h2>What are you waiting for?</h2>
            <Button backgroundColour={variables.buttonA} href={"/join"} content={"Join us"} textColour={variables.buttonB}></Button>
        </div>
        </>
    )
    return(<Layout{...{content:content, name:"Team"}}/>)
}
