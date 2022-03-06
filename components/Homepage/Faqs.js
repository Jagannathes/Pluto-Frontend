import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import styles from './faqs.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Faqs() {
    const [faqs, setFaqs] = useState([
        {
            open: false,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing ?',
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
            open: false,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing ?',
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
            open: false,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing ?',
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
        {
            open: false,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing ?',
            answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        },
    ])

    function handleClick(index) {
        let temp = faqs.map((item, indx) => {
            if (index === indx) return { ...item, open: !item.open }
            return { ...item, open: false }
        })
        setFaqs(temp)
    }
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (

        <div id='faq' data-aos="fade-up" className={styles['faqs']}>
            <div className={styles['heading-wrapper']}>
                <h2><span>F</span>requently <span>A</span>sked <span>Q</span>uestions</h2>

            </div>
            <div className={styles['content']}>
                {faqs.map((item, index) => (
                    <Faq
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        open={item.open}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>

    )
}

const faqAnimation = {
    initial: {
        height: 0,
    },
    animate: {
        height: 'auto',
    },
    exit: {
        height: 0,
    },
}

function Faq({ question, answer, open, onClick }) {
    return (
        <div className={`${styles['faq']} ${open ? styles['open'] : ''}`}>
            <div>
                <h3 className={styles['question']}>{question}</h3>
                <AnimatePresence>
                    {open && (
                        <motion.p
                            variants={faqAnimation}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            className={styles['answer']}
                        >
                            {answer}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
            <div className={styles['arrow-wrapper']} onClick={onClick}>
                <svg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1 1.5L9 9.5L17 1.5' stroke='black' strokeWidth='2' />
                </svg>
            </div>
        </div>
    )
}
