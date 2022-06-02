import styles from '../styles/Home.module.css'
import Link from 'next/link';  
import Image from 'next/image'

export default function Services() {
  return (
    <div className={styles.servicesctrl}> 
    <div className={styles.container}>
        <h1 className={styles.textcenter}>Our Services</h1>
        <div className={styles.row}>
           <div className={styles.col4} data-aos="fade-right">
              <div className={styles.productsbox}>
              <h2>Cloud Strategy</h2>
              <p>Cloud Readiness Assessment, Cloud Architecture Audit, Cloud Roadmap and Strategy, Multi-Cloud Strategy, Cloud Feasibility Study</p>
              <Link href="/about">Read more</Link> 
              <div className={styles.cloudicons}> 
                 <Image src='/cloud-strategy.svg' width="100" height="100"  alt='Logo'/>
              </div>
              </div>
           </div>
           <div className={styles.col4} data-aos="fade-up">
            <div className={styles.productsbox}>
            <h2  className="text-white">Cloud Native</h2>
            <p className="text-white">Microservices Development, Containerization, Serverless Deployment, Micro-segmentation, and Cloud Native Replatforming.</p>
            <Link href="/about">Read more</Link> 
            <div className={styles.cloudicons}>
            <Image src='/cloud-native-dev.svg' width="100" height="100" alt="Cloud Modernization"/>
              </div>
            </div>
           </div>
           <div className={styles.col4} data-aos="fade-left">
            <div className={styles.productsbox}>
            <h2>Cloud Monitoring</h2>
            <p>Cloud-based Application Monitoring, Creating personalized parameters and checks, Setting up Personalized Alerts</p>
            <Link href="/about">Read more</Link> 
            <div className={styles.cloudicons}>
            <Image src='/cloud-monitoring.svg' width="100" height="100" alt="Cloud Disaster Recovery"/>
              </div>
            </div>
           </div>
        </div>   
        
        {/*  Second row */}
        <div className={styles.row}>
           <div className={styles.col4} data-aos="fade-right">
              <div className={styles.productsbox}>
              <h2>Cloud Migration</h2>
              <p>Readiness Assessment, Cloud-to-Cloud movement, Migration of Workloads, Validation and Performance Testing.</p>
              <Link href="/about">Read more</Link> 
              <div className={styles.cloudicons}> 
                 <Image src='/cloud-migration.svg' width="100" height="100"  alt='Logo'/>
              </div>
              </div>
           </div>
           <div className={styles.col4} data-aos="fade-up">
            <div className={styles.productsbox}>
            <h2  className="text-white">Cloud Security</h2>
            <p className="text-white">Security and Risk Assessment, Data Protection, Vulnerability Management, Continuous Monitoring, Alerting and Reporting.</p>
            <Link href="/about">Read more</Link> 
            <div className={styles.cloudicons}>
            <Image src='/cloud-modernization.svg' width="100" height="100" alt="Cloud Modernization"/>
              </div>
            </div>
           </div>
           <div className={styles.col4} data-aos="fade-left">
            <div className={styles.productsbox}>
            <h2>Cloud Infra</h2>
            <p>Cloud Data Center Design, Development and Implementation, Operation Management, Cloud Infrastructure and Application Deployment.</p>
            <Link href="/about">Read more</Link> 
            <div className={styles.cloudicons}>
            <Image src='/cloud-infra.svg' width="100" height="100" alt="Cloud Disaster Recovery"/>
              </div>
            </div>
           </div>
        </div>  
        
    </div>
    </div>
  )
}
