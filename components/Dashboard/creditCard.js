import React from 'react'
import { useState, useEffect} from 'react'
import CreditCards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'



function creditCard() {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
    const [isPreview, setIsPreview] = useState(true);




  return (
      <>
      <Paper>
            <CreditCards
               name="John Smith"
               number="5555 4444 3333 1111"
               expiry="10/20"
                cvc="737"
               
                focus={focus}
                
                issuer = {'visa'}
                preview = {isPreview}
            />
            
            </Paper>
           
      </>
  )
}

export default creditCard