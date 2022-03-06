import React from 'react'
import { useState, useEffect} from 'react'
import CreditCards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';





function creditCard() {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [isPreview, setIsPreview] = useState(true);




  return (
      <>
            <CreditCards
                cvc={cvc}
                expiry={expiry}
                focus={focus}
                name={name}
                number={number}
                issuer = {'visa'}
                preview = {isPreview}
            />
           
      </>
  )
}

export default creditCard