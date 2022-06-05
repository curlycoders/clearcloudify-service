import React, { Component } from 'react'; 
import Header from '../components/header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

class casestudies extends Component { 
    render() {
     return(
        <>
        <Head>
        <title>Case Studies - Clear Cloudify</title>
        <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
        </Head> 
        <Header />
        <h1 style={{textAlign:"center"}}>Case Studies</h1>
        <div className={styles.container}> 
                <div className={styles.casecontainer}>
                        <div className={styles.casecontain}> 
                        <div className={styles.casebg}></div>
                        <div className={styles.row}> 
                        <div className={styles.col6}> 
                        <h1>Manage Your IT Security And Comply With Regulations</h1>
                        <p>Security Consultants at ClearInfosec are formally trained, having at least one of the following Security certifications:  CISSP, CISM, CISA, CEH, as well as vendor specific.
                        </p>
                        <Link href="#">Read more</Link>
                        </div>
                        <div className={styles.col6}> 
                        <Image src='/case.jpg'  width='690'
                        height='400'
                        objectFit='cover'
                        alt='Brand logo'/>
                        </div>
                        </div>
                        </div>
                        
                </div>

        </div>
        <Footer/>
        </> 
        )
    }}
export default casestudies
