import Image from 'next/image'
import { links, socials, NavLink } from "../data/links";
import styles from '../styles/Footer.module.scss'
import Link from 'next/link'
import { email } from "../data/config";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.thirtyPercentInlineBlock}>
          <div className={styles.navigation}>
            <ul>
              {links.map((link: NavLink, i:number) => (
                <li key={i}><Link href={link.path}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.thirtyPercentInlineBlock}>
          <div className={styles.socials}>
            <ul>
              <li><b>Socials</b></li>
              {socials.map((social: NavLink, i:number) => (
                <li key={i}><Link href={social.path}>{social.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.thirtyPercentInlineBlock}>
          <div className={styles.contact}>
            <ul>
              <li><b>Contact us</b></li>
              <li><Link href={"mailto:" + email }>{ email }</Link></li>
              <br></br>
              <li><b>@Electrium Mobility 2023</b></li>
            </ul>
          </div>
        </div>
      </footer>
    )
}