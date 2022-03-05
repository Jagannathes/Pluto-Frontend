import React, { useEffect, useRef } from 'react'
import styles from './MainPage.module.css'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import Lottie from 'lottie-web'
// import * as Bank from '../lotties/homeAnime.json'
import Bank from '../lotties/bank.json'

const dwld = [{
    icon: <FaGooglePlay />,
    store: 'Google Play'
}
    , {
    icon: <FaApple />,
    store: 'App Store'
}]

function MainPage() {
    const container = useRef(null)
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Bank,



        })
    })

    return (

        <div className={styles.Main}>

            <div className={styles.main__head}>

                <div className={styles.main__head__left}>
                    <h3>Make Banking <span>Smarter</span> ,<span>Safer</span> and <span>Simpler</span> for you</h3>
                    <h4>
                        Do More With Your Money
                    </h4>

                    <div className={styles.main__head__left__dwnld}>

                        {dwld.map((dwnlds) => (
                            <div className={styles.dwnld}>
                                {dwnlds.icon}
                                <div className={styles.dwnld2}>
                                    Get it on <br />
                                    <span>

                                        {dwnlds.store}
                                    </span>
                                </div>
                            </div>



                        ))}


                    </div>
                </div>
                <div ref={container} className={styles.main__head__right}>

                </div>

            </div>


        </div>
    )
}

export default MainPage