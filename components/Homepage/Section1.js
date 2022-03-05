import React from 'react'
import styles from './Section1.module.css'
import { BsFillPiggyBankFill, BsBank2 } from 'react-icons/bs'
import { HiCurrencyRupee } from 'react-icons/hi'


const data = [{
    icon: <BsBank2 />,
    desc: 'Open Your Neobank account in around 2 minutes'
}, {
    icon: <HiCurrencyRupee />,
    desc: 'Get a one-app view of allyour existing accounts in one place'
}, {
    icon: <BsFillPiggyBankFill />,
    desc: 'Put your savings in Pluto Piggy Bank'

}]

function Section1() {
    return (
        <div className={styles.sec1}>

            <div className={styles.sec1__box1}>
                <p>Since <span>3+ Years</span></p>
                <p><span>1 Crore+ </span>Customers</p>

            </div>
            <h2><span>Smarter</span> Banking System</h2>
            <div className={styles.sec1__body}>
                {data.map((datas) => (
                    <div className={styles.card}>
                        <span>  {datas.icon}</span>
                        <p>
                            {datas.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section1