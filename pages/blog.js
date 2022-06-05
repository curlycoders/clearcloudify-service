import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';
import Link from 'next/link';

export default function blog() {
  return (
      <>
       <Head>
        <title>Latest News &#38; Advisory</title>
        <meta name="description" content="Clear Cloudify Cloud Consulting Company" /> 
      </Head> 
      <Header/> 
    <div className={styles.blogsectrls}>
    <div className={styles.container}> 
        <div className={styles.row}>
          <div className={styles.col8}>
            <div className={styles.blogmainctrl}>
              <div className={styles.blogpostlist}>
              <Link href="/blog/trendscloudcomputing"><a><h1>Top 10 Trends in Cloud Computing Solutions</h1></a></Link>
                <div className={styles.postdateauthor}>Ravi Shankar  <span>June 08, 2022</span></div>
                  <div className={styles.row}>
                    <div className={styles.col4}>
                    <Image src='/migration.jpg' width="500" height="330"  alt='Logo'/>
                    </div>
                    <div className={styles.col8}> 
                    <p>Since the pandemic, Cloud Computing has taken an exponential growth rate by businesses globally for various reasons. Dynamic workplaces, travel restrictions, need to decrease contact and touch have led to businesses...</p>
                 <Link href="/blog/trendscloudcomputing">Read More</Link>
                    </div>
                  </div>
              </div> 
              <div className={styles.blogpostlist}>
                <h1>Basics of Machine Learning</h1>
                <div className={styles.postdateauthor}>Balaji Soundararajan  <span>June 07, 2022</span></div>
                  <div className={styles.row}>
                    <div className={styles.col4}>
                    <Image src='/innovate.jpg' width="500" height="330"  alt='Logo'/>
                    </div>
                    <div className={styles.col8}> 
                    <p>Machine Learning uses statistical techniques to give computer systems the ability to “learn” with data without being explicitly programmed.</p>
                 <Link href="#">Read More</Link>
                    </div>
                  </div>
              </div> 
               <div className={styles.blogpostlist}>
                <h1>Cloud Computing Benefits</h1>
                <div className={styles.postdateauthor}>Nick Krause  <span>June 06, 2022</span> </div>
                  <div className={styles.row}>
                    <div className={styles.col4}>
                    <Image src='/cloudsec.jpg' width="500" height="330"  alt='Logo'/>
                    </div>
                    <div className={styles.col8}> 
                    <p>Since the pandemic, Cloud Computing has taken an exponential growth rate by businesses globally for various reasons. Dynamic workplaces, travel restrictions, need to decrease contact and touch have led to businesses...</p>
                 <Link href="#">Read More</Link>
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
               <li><Link href="/category/technology"><a>Technology <span>4</span></a></Link></li>
                 <li><Link href="/category/cloud-devops"><a>Cloud and Devops <span>10</span></a></Link></li>
                 <li><Link href="/category/business"><a>Business <span>5</span></a></Link></li>
                 <li><Link href="/category/development"><a>Development <span>1</span></a></Link></li> 
               </ul> 
               {/* <Link href="#"><a></a></Link> */}
            </div>
            <div className={styles.blogrecentpost}>
               <h5>Recent Posts</h5>
               <ul>
                 <li><Link href="/blog/native-vshybrid"><a>Native vs. Hybrid vs. Cross-Platform Development: How to Choose the Right Approach?</a></Link> </li>
                 <li><Link href="/blog/trendscloudcomputing"><a>Top 10 Trends in Cloud Computing Solutions</a></Link></li>
                 <li><Link href="/blog/basics-machine-learning"><a>Basics of Machine Learning</a></Link></li>
                 <li><Link href="/blog/cloud-computing-benefits"><a>Cloud Computing Benefits</a></Link></li>
                 <li><Link href="/blog/benefits-recruitment-agencies"><a>Benefits of using recruitment agencies </a></Link></li>
               </ul>
            </div>
            <div className={styles.blogtags}>
            <h5>Tags</h5>
               <ul>
                 <li><Link href="/tags/cloud"><a>Cloud</a></Link></li>
                 <li><Link href="/tags/cloudcomputing"><a>Cloud computing</a></Link></li>
                 <li><Link href="/tags/devops"><a>devops</a></Link></li>
                 <li><Link href="/tags/aws"><a>aws</a></Link></li>
                 <li><Link href="/tags/technology"><a>technology</a></Link></li>
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
