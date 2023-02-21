import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
import styles from "../styles/Layout.module.scss";
import { ReactElement } from "react";

export default function Layout(info:{content:ReactElement, name:string}) {
    return(
        <>
        <Header title={info.name}/>
        <Navbar/>
        <div id="#top"></div>
        <main className={styles.main}>{info.content}</main>
        <div className={styles.topWrapper}><a className={styles.topButton} href="#top">↑</a></div>
        <Footer/>
        </>
    )
}