import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'



export default function Home() {
  const content = <>Index</>

  return (
    <Layout{...{content:content, name:"Home"}}/>
  )
}
