import styles from "../styles/Card.module.scss"
import Image from "next/image"

export default function Card(content:{
    picture: string,
    name: string,
    role: string,
    description: string
}) {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.imageHolder}>
                <Image src={content.picture} alt={`a picture of ${content.name}`} fill></Image>
                <p>{content.description}</p>
            </div>
            <b>{content.name}</b>
            <p>{content.role}</p>
        </div>
        </>
    )
}