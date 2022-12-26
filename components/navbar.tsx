import styles from "../styles/Navbar.module.scss";
import { links, NavLink } from "../data/navigation";
import Image from "next/image"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/"><Image src="/logo.png" alt="logo" fill></Image></Link>
            
            {links.map((link:NavLink, i:number) => (
                <Link key={i} className={styles.item} href={link.path}><p>{link.name}</p></Link>
            ))}
        </div>
        
        </>
    )
}