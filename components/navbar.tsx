import styles from "../styles/Navbar.module.css";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/"><Image src="/logo.png" alt="logo" width={72} height={72}></Image></Link>
            <Link className={styles.item} href="/about">About</Link>
            <Link className={styles.item} href="/team">Team</Link>
            <Link className={styles.item} href="/sponsors">Sponsors</Link>
        </div>
        
        </>
    )
}