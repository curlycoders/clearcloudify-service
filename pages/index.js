import Head from 'next/head'; 
import styles from '../styles/Home.module.css'; 
import Header from '../components/header';
import Footer from '../components/Footer';
import Services from '../components/services';
import About from '../components/About';  
import News from '../components/News';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/newsletter'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Technology &#38; Advisory</title>
        <meta name="description" content="Clear Cloudify Cloud Consulting Company" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head> 
      <Header />

{/*      
    <Link href="/about">
        <a>About</a>
      </Link> */}
     <div className={styles.cloudintrosec}>
     
      <video id={styles.intro}   playsInline
          loop
          muted
          disablePictureInPicture controlsList="nodownload" width="100%" height="500" autoPlay="autoplay" >
      <source src="./intro.mp4" type="video/mp4"/> 
      Your browser does not support the video tag.
      </video> 
     </div>
     <Services/>
    
     <About/>
     <Testimonials/>
     <Subscribe/>
     <News/>
     <Footer/>
      
    </div>
  )
}
