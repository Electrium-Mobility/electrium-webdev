import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";
import variables from "../styles/_next_access.module.scss";

export default function Navbar() {
    return (
        <>
        <div className={styles.navbar}>
            <Link className={styles.logo} href="/">
                <Image src="" alt="Electrium Mobility" fill id="navImg"
                onLoad={() => (window != undefined && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)? 
                document.getElementById("navImg")!.setAttribute("src", "/logo_long_dark.png"): 
                document.getElementById("navImg")!.setAttribute("src", "/logo_long_light.png")}></Image>
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