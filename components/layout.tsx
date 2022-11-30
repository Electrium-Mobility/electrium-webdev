import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
import { ReactElement } from "react";

export default function Layout(info:{content:ReactElement, name:string}) {
    return(
        <>
        <Header title={info.name}/>
        <Navbar/>
        <main>{info.content}</main>
        <Footer/>
        </>
    )
}