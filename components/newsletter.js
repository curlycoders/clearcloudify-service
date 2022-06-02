import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Subscribe() {
  return (
    <div className={styles.subscribectrl}>
    <div className={styles.container}>
      <div className={styles.row}>
            <div className={styles.col6}>
<h4>Stay Updated with the latest at Cloudify Subscribe Now!</h4>
            </div>

            <div className={styles.col6}>
                <input type="text"/>
                <button>Subscribe</button>

            </div>
      </div>
    </div>
    </div>
  )
}
