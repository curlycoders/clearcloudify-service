import Header from '../components/header';
import Footer from '../components/footer';
import { InlineWidget } from "react-calendly";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Events() {
      return(
          <>
            <Head>
            <title>Schedule an Appointment - Clear Cloudify</title>
            <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
            </Head> 
              <Header />
               <h1 style={{textAlign:"center"}}>Events</h1>
               <div className={styles.casestudiesctrsls}> 
             <div className={styles.row}>
                <div className={styles.col4}>
                    <div className={styles.casecard}>
                    <div className={styles.casecardpgh}><Link href="/appointment"><Image src='/appointment.png' width="70" height="70"  alt='Logo'/></Link> </div>
                    <div className={styles.casecardpgh2}><Link href="/appointment">Schedule an Appointment</Link> </div> 
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
               <Footer/>
          </>
      )
    } 
