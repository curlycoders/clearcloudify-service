import Header from '../components/header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

function contact() { 
  return (
    <>
     <Head>
            <title>Contact - Clear Cloudify</title>
            <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
            </Head> 
    <Header/>
    <h1 style={{textAlign:"center"}}>Get in Touch with Us</h1>
    <div className={styles.container}> 
        <div className={styles.row}> 
           <div className={styles.formgroup}>
             <label>Name</label>
             <input type="text" className={styles.formcontrol}/>
           </div>
           <div className={styles.formgroup}>
             <label>Email</label>
             <input type="email" className={styles.formcontrol}/>
           </div>
           <div className={styles.formgroup}>
             <label>Phone Number</label>
             <input type="phone" className={styles.formcontrol}/>
           </div>
           <div className={styles.formgroup}>
             <label>Message</label>
             <textarea className={styles.formcontrol}  rows="3"></textarea>
            
           </div>
           <div className={styles.formgroup}>
           <button className={styles.btns}>Submit</button>
           </div>
          
          </div>
      </div>
    <Footer/>
    </> 
  );
}

 

export default contact;