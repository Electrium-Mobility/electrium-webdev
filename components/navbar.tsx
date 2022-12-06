import styles from "../styles/Navbar.module.css";
import Image from "next/image"

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <a className={styles.logo} href="/"><Image src="/logo.png" alt="logo" width={72} height={72}></Image></a>
            <a className={styles.item} href="/about">About</a>
            <a className={styles.item} href="/team">Team</a>
            <a className={styles.item} href="/sponsors">Sponsors</a>
        </div>
        
        </>
    )
}