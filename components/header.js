import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';  

export default function Header() {
  return (
    <div className={styles.container}>   
  <div className={styles.headermain}>
    <div className={styles.logo}>
    <Image src='/logo.png' width="160" height="75" alt='Logo'></Image></div>
    <div className={styles.menu}>
    <ul>
		<li><Link href="#">Services</Link>
      <ul>
        <li><Link href="/cloudstrategy">Cloud Advisory</Link></li>
        <li><Link href="/cloudnative">Cloud Native Development</Link></li>
        <li><Link href="/cloudmonitoring">Cloud Monitoring</Link></li>
        <li><Link href="/cloudmigration">Cloud Migration</Link></li>		
        <li><Link href="/cloudsecurity">Cloud Security</Link></li>
        <li><Link href="/cloudinfra">Cloud Infra Management</Link></li>
      </ul>
    </li>
		<li><Link href="/blog">Blog</Link></li>
    <li><Link href="/casestudies">Case Studies</Link></li>
    <li><Link href="/events">Events</Link></li>
    <li><Link href="/partners">Partners</Link></li>
    <li><Link href="/ourteam">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
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
