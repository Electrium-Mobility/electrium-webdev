import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import variables from "../styles/_next_access.module.scss";
import {sponsors, Sponsor} from "../data/sponsors";
import { missionCards, Card } from '../data/cards';
import Link from 'next/link'
import Button from '../components/button';
import Img from '../components/image';
import { title, siteDescription } from "../data/config";
import { mission, statement } from '../data/home';


export default function Home() {

  const content = 
  <>
  <div className={styles.hero}>
    <div className={styles.heroTitle}>
      <Img dark="/logo_long_dark.png" light="/logo_long_light.png" alt={title} id="heroImage"></Img>
    </div>
    <h3>{ siteDescription }</h3>
    <Button backgroundColour={variables.buttonB} href={"/join"} content={"Join us"} textColour={variables.buttonA}></Button>
    <Button backgroundColour={variables.buttonA} href={"/sponsors"} content={"Become a sponsor"} textColour={variables.buttonB}></Button>
    <hr className={styles.hr}></hr>
    <div className={styles.sponsorsDisplay}>
      {sponsors.map((sponsor: Sponsor, i:number) => (
        <Link key={i} href={sponsor.link} className={styles.sponsorCard}><Image src={sponsor.image} alt={sponsor.name} fill></Image></Link>
      ))}
    </div>
  </div>
  <div className={styles.mission}>
    <h2>{mission.title}</h2>
    <p>{ mission.description }</p>
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
  <div className={styles.about}>
    <div className={styles.thingHolder}>
      <div className={styles.textHolder}>
        <h2>{statement.first.title}</h2>
        <p>{statement.first.description}</p>
      </div>
      <div className={styles.imageHolder}>
        <Image src="/imgs/who_we_are.svg" alt="who we are" fill></Image>
      </div>
    </div>
    <br></br>
    <div className={styles.thingHolder}>
      <div className={styles.imageHolder}>
        <Image src="/imgs/what_we_do.svg" alt="what we do" fill></Image>
      </div>
      <div  className={styles.textHolder}>
        <h2>{statement.second.title}</h2>
        <p>{statement.second.description}</p>
      </div>
    </div>
  </div>
  <div  className={styles.contact}>
    <h2>Interested in our work?</h2>
    <Button backgroundColour={variables.buttonA} href={"mailto:electriummobility@gmail.com"} content={"Contact us"} textColour={variables.buttonB}></Button>
  </div>
  </>

  return (
    <Layout{...{content:content, name:"Home"}}/>
  )
}
