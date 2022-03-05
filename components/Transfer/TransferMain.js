import React, { useState } from 'react'
import styles from './TransferMain.module.css'
import { MdQrCodeScanner, MdAccountBox, MdOutlineSync } from 'react-icons/md'
import { AiOutlineBank } from 'react-icons/ai'
import { SubtitlesOutlined } from '@mui/icons-material'
import Transfertype from './Transfertype'
// import Scanner from './Scanner'

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

function TransferMain() {
    const [category, setCategory] = useState('To A/C')

    // const handleClick = ()=>{
    //     setCategory()
    // }
    return (
        <div className={styles.container}>
            <h2><span>T</span>ransfer <span>M</span>oney</h2>
            <div className={styles.cateogry}>
                {data.map((datas) => (
                    <div className={styles.category__box}
                        onClick={() => setCategory(`${datas.type}`)}
                    >
                        <span> {datas.icon}</span>
                        {datas.type}

                    </div>
                ))}

            </div>

            {category === 'Scan' ? (
                <div className={styles.category__filter}>
                   {/* <Scanner /> */}
                </div>
            ) : (
                <div className={styles.category__filter}>
                    <Transfertype data={data} category={category} />
                </div>
            )}
          

        </div>
    )
}

export default TransferMain