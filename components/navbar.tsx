import styles from "../styles/Navbar.module.css";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/"><Image src="/logo.png" alt="logo" fill></Image></Link>
            <Link className={styles.item} href="/about"><p>About</p></Link>
            <Link className={styles.item} href="/team"><p>Team</p></Link>
            <Link className={styles.item} href="/sponsors"><p>Sponsors</p></Link>
        </div>
        
        </>
    )
}