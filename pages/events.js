import Header from '../components/header';
import Footer from '../components/Footer';
import { InlineWidget } from "react-calendly";
import Head from 'next/head';


export default function Events() {
      return(
          <>
            <Head>
            <title>Schedule an Appointment - Clear Cloudify</title>
            <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
            </Head> 
              <Header />
               <h1 style={{textAlign:"center"}}>Events</h1>
               <InlineWidget url="https://calendly.com/clearcloudify/meeting" />
               <Footer/>
          </>
      )
    } 
