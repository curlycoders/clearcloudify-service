import Header from '../components/header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function contact() { 
  return (
    <>
     <Head>
            <title>Contact - Clear Cloudify</title>
            <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
            </Head> 
    <Header/>
    <div className={styles.container}> 
      <h1>Contact</h1>
      </div>
    <Footer/>
    </> 
  );
}

 

export default contact;