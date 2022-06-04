import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Footer()  {  
    return( 
        <div className={styles.footersection}>
            <div className={styles.container}>  
                    <div className={styles.row}>
                    <div className={styles.col8}>
                        <div className={styles.footctrls}>
                         &copy; 2022 Clear Cloudify. All rights reserved. | <Link href="/privacy">Privacy</Link> | <Link href="/">Site Terms</Link> | <Link href="/">Cookie Preferences</Link>
                        </div> 
                    </div> 
                    <div className={styles.col4}>
                            <div className={styles.textright}> 
                                <Link href="https://www.linkedin.com/company/clear-cloudify" target="_blank" rel="noopener noreferrer"><Image src='/linkedin.svg' width="35" height="35"  alt='Linkedin'/></Link>
                                <Link href="https://www.youtube.com/channel/UC24fk1q4r5rk3d6u0K11dGg" target="_blank" rel="noopener noreferrer"><Image src='/youtube.svg' width="35" height="35"  alt='Linkedin'/></Link>
                                <Link href="https://github.com/clearcloudify" target="_blank" rel="noopender noreferrer"><Image src='/github.svg' width="35" height="35"  alt='Linkedin'/></Link>
                             </div> 
                    </div>
                    </div>  
            </div>  
        </div>
    );
  } 

 