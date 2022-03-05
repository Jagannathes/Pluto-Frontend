import React, { useEffect } from 'react'
import styles from './Section2.module.css'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
const data = [{
    title1: 'CARD',
    pt1: 'Get Virtual and Physical card',
    pt2: 'Zero Maintanance Fee',
    pt3: '28 Days Interest Free Period',
    img1: '/assets/card.gif',
    title2: 'SAVE',
    pt4: '7% Interest Rate',
    pt5: 'Zero Balance Account',
    pt6: 'Get Timely Remainders',
    img2: '/assets/save.gif'


}, {
    title1: 'PIGGY BANK',
    pt1: 'Intelligent Way For Saving',
    pt2: 'Deposit When You Wish',
    pt3: 'Get Timely Remainders',
    img1: '/assets/piggy.gif',

    title2: 'REWARD',
    pt4: 'Earn rewards in Real-Time',
    pt5: 'Instant rewards like nowhere else',
    pt6: 'Get 1% rewards on Debit card and UPI purchases',
    img2: '/assets/reward.gif',


}]

function Section2() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div className={styles.sec2}>
            {data.map((datas) => (
                <>
                    <div className={styles.card1}>
                        <div data-aos="fade-right" className={styles.card1__left}>
                            <img src={datas.img1} alt="" />

                        </div>
                        <div data-aos="fade-left" className={styles.card1__right}>
                            <h2>Pluto <span>{datas.title1}</span></h2>
                            <ul>
                                <li>{datas.pt1}</li>
                                <li>{datas.pt2}</li>

                                <li>{datas.pt3}</li>

                            </ul>
                            <div className={styles.btn}>
                                Try Now&nbsp; <BsArrowRightCircleFill />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card2}>
                        <div data-aos="fade-left" className={styles.card1__left}>
                            <img src={datas.img2} alt="" />
                        </div>
                        <div data-aos="fade-right" className={styles.card1__right}>
                            <h2>Pluto <span>{datas.title2}</span></h2>
                            <ul>
                                <li>{datas.pt4}</li>
                                <li>{datas.pt5}</li>

                                <li>{datas.pt6}</li>

                            </ul>
                            <div className={styles.btn}>
                                Try Now &nbsp; <BsArrowRightCircleFill />
                            </div>
                        </div>

                    </div>
                </>
            ))}

        </div>
    )
}

export default Section2