import Button from "../components/button"
import Layout from "../components/layout"
import styles from "../styles/Team.module.scss"
import variables from "../styles/_next_access.module.scss"
import { teams, teamHeroText, Member, TeamContent } from "../data/team"
import Card from "../components/member-card"

export default function Team() {
    const content = (
        <>
        <div className={styles.topSection}>
            <div className={styles.topTextHolder}>
                <h1>{teamHeroText.bigText}</h1>
                <b>{teamHeroText.smallText}</b>
            </div>
            <Button backgroundColour={variables.buttonB} href={"/join"} content={"Join us"} textColour={variables.buttonA}></Button>
        </div>
        <div className={styles.teamList}>
            
            {teams.map((team:TeamContent, i:number) => (
                <div key={i}>
                    <h3>{team.title}</h3>
                    <p>{team.description}</p>
                    {team.teamMembers.map((member:Member, j:number) => (
                        <Card key={j} picture={member.image} name={member.fullName} role={member.role} description={member.description}></Card>
                    ))}
                </div>
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
