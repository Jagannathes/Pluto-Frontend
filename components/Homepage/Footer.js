import { BsInstagram, BsTwitter, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <div className={styles['left']}>

                <span className={styles['copyright']}><span>Pluto</span> &copy; 2022 - All rights reserved</span>
            </div>
            <div className={styles['right']}>
                <div className={styles['link-group']}>
                    <h3>Site</h3>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Benefits</a>
                        </li>

                        <li>
                            <a>FAQs</a>
                        </li>
                    </ul>
                </div>

                <div className={styles['link-group']}>
                    <h3>Social</h3>
                    <ul>
                        <li>
                            <a>
                                <div className={styles['social-wrapper']}>
                                    <BsInstagram className={styles['social-icon']} />
                                    <span>Instagram</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className={styles['social-wrapper']}>
                                    <BsTwitter className={styles['social-icon']} />
                                    <span>Twitter</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className={styles['social-wrapper']}>
                                    <BsWhatsapp className={styles['social-icon']} />
                                    <span>Whatsapp</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className={styles['social-wrapper']}>
                                    <BsLinkedin className={styles['social-icon']} />
                                    <span>LinkedIn</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['link-group']}>
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
