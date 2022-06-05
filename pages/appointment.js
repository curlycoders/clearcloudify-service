import React, { Component } from 'react'; 
import Header from '../components/header';
import Footer from '../components/Footer';
import { InlineWidget } from "react-calendly";
import styles from '../styles/Home.module.css'; 
import Head from 'next/head';

class appointment extends Component { 
    render() {
      return(
          <>
           <Head>
            <title>Schedule an Appointment - Clear Cloudify</title>
            <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
            </Head> 
           <Header />
           <h1 style={{textAlign:"center"}}>Schedule an Appointment </h1>
           <div className={styles.container}> 
           <InlineWidget url="https://calendly.com/clearcloudify/meeting" />
          </div>
          <Footer/>
          </> 
      )
    }}
export default appointment
