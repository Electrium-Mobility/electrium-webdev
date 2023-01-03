import Image from "next/image"
import styles from "../styles/JoinCard.module.scss"

export default function JoinCard(info:{
    image: string,
    title: string,
    description: string
}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image src={info.image} alt={info.title} fill></Image>
                </div>
                <h4>{info.title}</h4>
                <p>{info.description}</p>
            </div>

        </>
    )
}