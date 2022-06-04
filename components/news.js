import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <div className={styles.blogsectrls}>
    <div className={styles.container}>
      <h1>Latest News</h1>
        <div className={styles.row}>
          <div className={styles.col8}>
            <div className={styles.blogmainctrl}>
               <div className={styles.blogposthumb}>
               <Image src='/migration-2.png' width="500" height="330"  alt='Logo'/>
               </div>
               <div className={styles.blogpostwrap}>
                 <span className={styles.blogpostchip}>cloud</span>  <span className={styles.blogpostchip}>mechine learning</span>
                 <h1>5 reasons why AWS is best</h1>
                  <p>Amazon Web Services - AWS has been guarding its ground of providing a cross functional, resource...</p>
                 <Link href='#'>Read More</Link>

               </div>
            </div>

          </div>
          <div className={styles.col4}> 
            <div className={styles.blogpostsmall1}>
            <div className={styles.blogpostpos}>
            <Image src='/innovation.jpg' width="500" height="350"  alt='Logo'/>

            <h3> Data Center Migration</h3>
            </div> 
            </div> 
          </div>
          <div className={styles.col4}>
          <Image src='/migration.jpg' width="500" height="300"  alt='Logo'/>
            <div className={styles.blogpostsmall}> 
              <h3> Data Center Migration</h3>
              <p>As a WordPress developer, whenever you build a new theme, plugin or even if you are testing out new...</p>
              <Link href='#'>Read more</Link>
              </div>  
          </div>
          <div className={styles.col4}>
          <Image src='/cloudsec.jpg' width="500" height="300"  alt='Logo'/>
          <div className={styles.blogpostsmall}> 
              <h3> Data Center Migration</h3>
              <p>As a WordPress developer, whenever you build a new theme, plugin or even if you are testing out new...</p>
              <Link href='#'>Read more</Link>
              </div>   
          </div>
          <div className={styles.col4}>
          <Image src='/innovate.jpg' width="500" height="300"  alt='Logo'/>
          <div className={styles.blogpostsmall}> 
              <h3> Data Center Migration</h3>
              <p>As a WordPress developer, whenever you build a new theme, plugin or even if you are testing out new...</p>
              <Link href='#'>Read more</Link>
              </div>   
         
          </div>
          
        </div>

    </div>
    </div>
  )
}
