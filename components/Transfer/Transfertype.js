import React, { useState, useEffect } from 'react'
import styles from './Transfertype.module.css'
import { MdQrCodeScanner, MdAccountBox, MdOutlineSync } from 'react-icons/md'
import { AiOutlineBank } from 'react-icons/ai'


function Transfertype({ category }) {
    const data = [{
        type: 'Scan',
        title: 'Scan QR Code',
        icon: <MdQrCodeScanner />
    },
    {
        type: 'To A/c',
        title: 'Transfer to A/C',
        con1: 'Enter A/C Number',
        con2: 'Enter Pluto ID',
        icon: <MdAccountBox />


    }, {
        type: 'UPI',
        title: 'Transfer to UPI Id',
        con1: 'Enter UPI Id',
        icon: <AiOutlineBank />



    },
    {
        type: 'Self',
        title: 'Transfer to Self Account',
        con1: 'Enter Pluto Id',
        icon: <MdOutlineSync />


    }]
    const [arr, setArr] = useState([{
        type: 'To A/c',
        title: 'Transfer to A/C',
        con1: 'Enter A/C Number',
        con2: 'Enter Pluto ID',
        icon: <MdAccountBox />
    }]);
    useEffect(() => {
        const items = data.filter(datas => datas.type === category);
        setArr(items)
    }), [{ category }], []


    return (
        <>
            <div className={styles.container}>
                <div className={styles.type}>
                    {arr.map((arrs) => (
                        <div className={styles.arrscontainer}>
                            <div className="">
                                <h3>{arrs.title}</h3>
                                {arrs.con1 && (<>
                                    <div className={styles.type__input}>
                                        <p>{arrs.con1}</p>
                                        <input type="text" name="account" id="" />
                                    </div>
                                </>)}
                                {arrs.con2 && (<>
                                    <div className={styles.type__input}>
                                        <p>{arrs.con2}</p>
                                        <input type="text" name="account" id="" />
                                    </div>
                                </>)}
                                <div className={styles.type__amount}>
                                    <p>Enter Amount</p>
                                    <input type="number" name="" id="" />
                                </div>
                                <div className={styles.type__amount}>
                                    <p>Enter Pluto PIN</p>
                                    <input type="number" name="" id="" />
                                </div>
                                <input type="button" className={styles.btn} value="Pay" />
                            </div>
                            <div className={styles.img}>
                                <img src="/assets/transfer.gif" alt="" />
                            </div>
                        </div>


                    ))}



                </div>

            </div>
        </>
    )
}


export default Transfertype