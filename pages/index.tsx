import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import variables from "../styles/_next_access.module.scss";
import {sponsors, Sponsor} from "../data/sponsors";
import { missionCards, Card } from '../data/cards';
import Link from 'next/link'
import Button from '../components/button';



export default function Home() {
  const content = 
  <>
  <div className={styles.hero}>
    <h1>Electrium Mobility</h1>
    <h3>Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar.</h3>
    <Button backgroundColour={variables.buttonB} href={"/join"} content={"Join us"} textColour={variables.buttonA}></Button>
    <Button backgroundColour={variables.buttonA} href={"/sponsors"} content={"Become a sponsor"} textColour={variables.buttonB}></Button>
  </div>
  <hr className={styles.hr}></hr>
  <div className={styles.sponsorsDisplay}>
    {sponsors.map((sponsor: Sponsor, i:number) => (
      <Link key={i} href={sponsor.link} className={styles.sponsorCard}><Image src={sponsor.image} alt={sponsor.name} fill></Image></Link>
    ))}
  </div>
  <div className={styles.mission}>
    <h2>Our Mission</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    {missionCards.map((missionCard: Card, i:number) => (
      <div key={i} className={styles.missionCard}>
        <div>
          <Image src={missionCard.image} alt={missionCard.title} fill></Image>
        </div>
        <h4>{missionCard.title}</h4>
        <p>{missionCard.description}</p>
      </div>
    ))}
  </div>
  <div></div>
  </>

  return (
    <Layout{...{content:content, name:"Home"}}/>
  )
}
