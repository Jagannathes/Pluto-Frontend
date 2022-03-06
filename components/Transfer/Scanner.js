import { width } from '@mui/system';
import React, { useEffect, useState } from 'react'

function Scanner() {


    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        setSize(window.innerWidth)
    }, [size])

    return (
        <div>

            {size > 1000 ? (
                <input type="file" accept='image/*' capture="user" name="" id="" />
            ) : (


                <input type="file" accept='image/*' capture="environment" name="" id="" />
            )}


        </div>
    )
}

export default Scanner