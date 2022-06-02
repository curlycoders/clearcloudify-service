import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/Footer';
import Head from 'next/head'

export default function Blog() {
  return (
      <>
       <Head>
        <title>Latest News &#38; Advisory</title>
        <meta name="description" content="Clear Cloudify Cloud Consulting Company" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head> 
      <Header/> 
    <div className={styles.blogsectrls}>
    <div className={styles.container}> 
        <div className={styles.row}>
          <div className={styles.col8}>
            <div className={styles.blogmainctrl}>
              <div className={styles.blogpostlist}>
                <h1>Top 10 Trends in Cloud Computing Solutions</h1>
                <div className={styles.postdateauthor}> Posted by: <a href='#'>Admin</a>  |  <span>June 08, 2022</span></div>
                  <div className={styles.row}>
                    <div className={styles.col4}>
                    <Image src='/migration.jpg' width="500" height="330"  alt='Logo'/>
                    </div>
                    <div className={styles.col8}> 
                    <p>Since the pandemic, Cloud Computing has taken an exponential growth rate by businesses globally for various reasons. Dynamic workplaces, travel restrictions, need to decrease contact and touch have led to businesses adapting to solutions...</p>
                 <a href='#'>Read More</a>
                    </div>
                  </div>
              </div> 
              <div className={styles.blogpostlist}>
                <h1>Basics of Machine Learning</h1>
                <div className={styles.postdateauthor}> Author: <a href='#'>Balaji Soundararajan</a>  |  <span>June 07, 2022</span></div>
                  <div className={styles.row}>
                    <div className={styles.col4}>
                    <Image src='/innovate.jpg' width="500" height="330"  alt='Logo'/>
                    </div>
                    <div className={styles.col8}> 
                    <p>Machine Learning uses statistical techniques to give computer systems the ability to “learn” with data without being explicitly programmed.</p>
                 <a href='#'>Read More</a>
                    </div>
                  </div>
              </div> 
               <div className={styles.blogpostlist}>
                <h1>Cloud Computing Benefits</h1>
                <div className={styles.postdateauthor}> Posted by: <a href='#'>Nick Krause</a>  | <span>June 06, 2022</span> </div>
                  <div className={styles.row}>
                    <div className={styles.col4}>
                    <Image src='/cloudsec.jpg' width="500" height="330"  alt='Logo'/>
                    </div>
                    <div className={styles.col8}> 
                    <p>Since the pandemic, Cloud Computing has taken an exponential growth rate by businesses globally for various reasons. Dynamic workplaces, travel restrictions, need to decrease contact and touch have led to businesses adapting to solutions...</p>
                 <a href='#'>Read More</a>
                    </div>
                  </div>
              </div> 
            </div>

          </div>
          <div className={styles.col4}> 
          <div className={styles.blogrightsectrls}>  
          <div className={styles.blogcategories}>
            <h5>Categories</h5>
               <ul>
               <li><a href='#'>Technology <span>4</span></a></li>
                 <li><a href='#'>Cloud and Devops <span>10</span></a></li>
                 <li><a href='#'>Business <span>5</span></a></li>
                 <li><a href='#'>Development <span>1</span></a></li> 
               </ul>
            </div>
            <div className={styles.blogrecentpost}>
               <h5>Recent Posts</h5>
               <ul>
                 <li><a href='#'>Native vs. Hybrid vs. Cross-Platform Development: How to Choose the Right Approach?</a></li>
                 <li><a href='#'>Top 10 Trends in Cloud Computing Solutions</a></li>
                 <li><a href='#'>Basics of Machine Learning</a></li>
                 <li><a href='#'>Cloud Computing Benefits</a></li>
                 <li><a href='#'>Benefits of using recruitment agencies</a></li>
               </ul>
            </div>
            <div className={styles.blogtags}>
            <h5>Tags</h5>
               <ul>
                 <li><a href='#'>Cloud</a></li>
                 <li><a href='#'>Cloud computing</a></li>
                 <li><a href='#'>devops</a></li>
                 <li><a href='#'>aws</a></li>
                 <li><a href='#'>technology</a></li>
               </ul>
            </div> 
          </div>
          </div>
        </div>
  

    </div>
    </div>
    <Footer/>
      </>
  )
}
