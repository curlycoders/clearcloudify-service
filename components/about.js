import styles from '../styles/Home.module.css'; 
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.aboutdesc}> 
      <div className={styles.container}>
        <div className={styles.row}> 
          <div className={styles.col6}>
             <div className={styles.aboutpgh}>
             <div data-aos="fade-right"> <Image src="/slidernew.svg" width={400} height={400} alt="About"/></div> 
             
             </div> 
          </div>
          <div className={styles.col6}> 
          <h1>About Clear Cloudify</h1>
          <p>
        Clear Cloudify is a Technology Advisory of Ana-Data Consulting Inc., We deliver solid and widespread advocacy to enable your Digital Modernization journey. Our team of Cloud Advocates and Engineers will provide Technology Leadership, Solutions Consulting, Best Practices, Research, Implementation, Support and Training to seamlessly move your IT workloads to Cloud infrastructure.
        </p>
        <Link href='#'>Read more</Link>
          </div>
        </div> 
      </div>
    </div>
  )
} 