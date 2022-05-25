import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.container}>   
  <div className={styles.headermain}>
    <div className={styles.logo}><img src='/logo.png' alt='Logo'/></div>
    <div className={styles.menu}>
    <ul>
		<li><a href="#">Services</a>
      <ul>
        <li><a href="#">Cloud Strategy</a></li>
        <li><a href="#">Cloud Native Development</a></li>
        <li><a href="#">Cloud Monitoring</a></li>
        <li><a href="#">Cloud Migration</a></li>		
        <li><a href="#">Cloud Security</a></li>
        <li><a href="#">Cloud Infra Management</a></li>
      </ul>
    </li>
		<li><a href="#">Blog</a></li>
    <li><a href="#">Case Studies</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Partners</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
		</ul>
    </div>
  </div> 
  <div className={styles.hamburger}>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
  </div>
</div>
 
  )
}
