import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'



export default function Home() {
  const content = 
  <>
  <h1>hey i know you think evehciles are super cool and stuff please join hi</h1>
  </>

  return (
    <Layout{...{content:content, name:"Home"}}/>
  )
}
