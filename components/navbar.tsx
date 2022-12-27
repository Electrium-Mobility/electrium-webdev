import styles from "../styles/Navbar.module.scss";
import { links, NavLink } from "../data/links";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/"><Image src="/logo.png" alt="logo" fill></Image></Link>
            
            TODO: maybe manually code the navbar later
            {links.map((link:NavLink, i:number) => (
                <Link key={i} className={styles.item} href={link.path}><p>{link.name}</p></Link>
            ))}
        </div>
        
        </>
    )
}