import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web';
import loading from '../lotties/loading.json'

function Loading() {
    const container = useRef(null);


    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: loading,



        })
    })



    return (
        <div style={{
            overflow: 'hidden',
            maxWidth: '50vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
        }} ref={container}></div>
    )
}

export default Loading