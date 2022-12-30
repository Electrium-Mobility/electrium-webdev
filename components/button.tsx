import Link from "next/link";
import styles from "../styles/Button.module.scss";

export default function Button(info:{
    backgroundColour: any, 
    href: string,
    content: string,
    textColour: string
}) {
    return (
        <>
            <button className={styles.button} style={{
                ["background-color" as any]: info.backgroundColour,
                ["color" as any]: info.textColour}}>
                    <Link href={info.href}>{info.content}</Link></button>
        </>
    )
}