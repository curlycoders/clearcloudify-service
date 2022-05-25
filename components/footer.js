import styles from '../styles/Home.module.css';
import Image from 'next/image'

export default function Footer()  {  
    return( 
        <div className={styles.footersection}>
            <div className={styles.container}>  
                    <div className={styles.row}>
                    <div className={styles.col8}>
                        <div className={styles.footctrls}>
                         &copy; 2022 Clear Cloudify. All rights reserved. | <a href="/privacy">Privacy</a> | <a href="/">Site Terms</a> | <a href="/">Cookie Preferences</a>
                        </div> 
                    </div> 
                    <div className={styles.col4}>
                            <div className={styles.textright}> 
                                <a href="https://www.linkedin.com/company/clear-cloudify" target="_blank" rel="noopener noreferrer"><Image src='/linkedin.svg' width="35" height="35"  alt='Linkedin'/></a> 
                                <a href="https://www.youtube.com/channel/UC24fk1q4r5rk3d6u0K11dGg" target="_blank" rel="noopener noreferrer"><Image src='/youtube.svg' width="35" height="35"  alt='Linkedin'/></a>
                                <a href="https://github.com/clearcloudify" target="_blank" rel="noopender noreferrer"><Image src='/github.svg' width="35" height="35"  alt='Linkedin'/></a>
                             </div> 
                    </div>
                    </div>  
            </div>  
        </div>
    );
  } 

 