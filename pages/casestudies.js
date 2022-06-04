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
           <div className={styles.casestudiesctrsls}> 
             <div className={styles.row}>
                <div className={styles.col4}>
                    <div className={styles.casecard}>
                    <div className={styles.casecardpgh}><Link href="/events"><Image src='/appointment.png' width="70" height="70"  alt='Logo'/></Link> </div>
                    <div className={styles.casecardpgh2}><Link href="/events">Schedule an Appointment</Link> </div> 
                    <span className={styles.vhidden}>Events page</span> 
                    </div> 
                </div>
                <div className={styles.col4}>
                    <div className={styles.casecard}>
                    <div className={styles.casecardpgh}> <Link href="#"><Image src='/webinar.png' width="70" height="70"  alt='Logo'/></Link> </div>
                    <div className={styles.casecardpgh2}><Link href="#">Upcoming  Webinar</Link> </div>
                    <span>Coming Soon!</span> 
                    </div> 
                </div> 
                <div className={styles.col4}>
                    <div className={styles.casecard}>
                    <div className={styles.casecardpgh}> <Link href="#"><Image src='/brainstorming.png' width="70" height="70"  alt='Logo'/></Link> </div>
                    <div className={styles.casecardpgh2}><Link href="#">Brainstorming Session</Link> </div>
                    <span>Coming Soon!</span>
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
