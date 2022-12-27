import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import {sponsors, Sponsor} from "../data/sponsors";
import Link from 'next/link'



export default function Home() {
  const content = 
  <>
  <div className={styles.hero}>
    <h1>Electrium Mobility</h1>
    <h3>Lorem ipsum dolor sit amet consectetur. Tempor dis duis pulvinar.</h3>
    <button className={styles.join}><Link href="/join">Join us</Link></button>
    <button className={styles.sponsors}><Link href="/sponsors">Become a sponsor</Link></button>
  </div>
  <hr className={styles.hr}></hr>
  <div className={styles.sponsorsDisplay}>
    {sponsors.map((sponsor: Sponsor, i:number) => (
      <Link href={sponsor.link} className={styles.sponsorCard}><Image src={sponsor.image} alt={sponsor.name} fill></Image></Link>
    ))}
  </div>
  </>

  return (
    <Layout{...{content:content, name:"Home"}}/>
  )
}
