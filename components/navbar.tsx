import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Button from "./button";
import variables from "../styles/_next_access.module.scss";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/">Electrium Mobility</Link>
            <div className={styles.rightAlign}>
                <Link href="/about" className={styles.item}>About</Link>
                <Link href="/team" className={styles.item}>Team</Link>
                <Button backgroundColour={undefined} href={"/join"} content={"Join us"} textColour={variables.buttonA}></Button>
                <Button backgroundColour={variables.buttonA} href={"/sponsors"} content={"Become a sponsor"} textColour={variables.buttonB}></Button>
            </div>
        </div>
        
        </>
    )
}