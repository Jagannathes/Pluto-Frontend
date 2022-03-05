import React from 'react'
import styles from './MainPage.module.css'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

const dwld = [{
    icon: <FaGooglePlay />,
    store: 'Google Play'
}
    , {
    icon: <FaApple />,
    store: 'App Store'
}]

function MainPage() {
    return (
        <div className={styles.Main}>

            <div className={styles.main__head}>

                <div className={styles.main__head__left}>
                    <h3>Make Banking <span>Smarter</span> ,<span> Safer</span> and <span>Simpler</span> for you</h3>
                    <h4>
                        Do More With Your Money
                    </h4>

                    <div className={styles.main__head__left__dwnld}>
                        <div className={styles.dwnld}>

                        </div>
                    </div>
                </div>
                <div className={styles.main__head__right}>

                </div>

            </div>


        </div>
    )
}

export default MainPage