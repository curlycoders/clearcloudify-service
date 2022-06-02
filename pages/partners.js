import React, { Component } from 'react'; 
import Header from '../components/header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

class Partners extends Component { 
    render() {
      return(
          <> 
           <Head>
            <title>Partners - Clear Cloudify</title>
            <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
            </Head>
           <Header />
           <h1 style={{textAlign:"center"}}>Partners</h1>
           <div className={styles.container}>
           <div className={styles.min400}>
               <div className={styles.row}>
               <div className={styles.col4}>
               <Image src='/partners-microsoft.png' width="500" height="120"  alt='Logo'/>
               </div>
               <div className={styles.col4}>
               <Image src='/partners-tanium.png' width="500" height="150"  alt='Logo'/>
               </div>
               <div className={styles.col4}>
               <Image src='/partners-genpact.png' width="500" height="120"  alt='Logo'/>
               </div>
               </div> 
               </div> 
               </div> 
               <Footer/>
          </>
      )
    }}
export default Partners
