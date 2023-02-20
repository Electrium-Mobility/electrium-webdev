import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import Img from "./image";
import variables from "../styles/_next_access.module.scss";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/">
                <Img dark="/logo_long_dark.png" light="/logo_long_light.png" alt="Electrium Mobility" id="navImg"></Img>
            </Link>
            <div className={styles.addSpace}></div>
            <div className={styles.rightAlign}>
                <div className={styles.fakeThing}></div>
                <Link href="/" className={styles.item}>Home</Link>
                <Link href="/team" className={styles.item}>Team</Link>
                <Button backgroundColour={variables.buttonC} href={"/join"} content={"Join us"} textColour={variables.buttonA}></Button>
                <Button backgroundColour={variables.buttonA} href={"/sponsors"} content={"Become a sponsor"} textColour={variables.buttonB}></Button>
            </div>
        </div>
        
        </>
    )
}