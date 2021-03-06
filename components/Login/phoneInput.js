import {useEffect, useState} from 'react';

import MuiPhoneNumber from 'material-ui-phone-number';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';


import { getAuth, RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";

function PhoneInput({setStep, setConfirmationResult}) {


    


    const auth = getAuth();
    let appVerifier
    if(typeof window !== 'undefined')
    {
        window.recaptchaVerifier = new RecaptchaVerifier('nextButton', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
        }
        }, auth);

        appVerifier = window.recaptchaVerifier;
    }
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [loading, setLoading] = useState(false);
    function handlePhoneInput(value){
        setPhoneNumber(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            console.log(confirmationResult)
            setConfirmationResult(confirmationResult);
            setStep(1);
            // window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log(error)
        }).finally(()=>{
            setLoading(false);
        });
    }

    useEffect(()=>{
        console.log("Phone Number: " + phoneNumber);
    },[phoneNumber]);

    return(
        <>
        <Container component="main" maxWidth="xs" sx={{ mt: 1 }}>
            <Typography component="h1" variant="h5" align="center">
                Login!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MuiPhoneNumber 
                            required
                            defaultCountry={'in'} 
                            preferredCountries={['in','us']}
                            onChange={handlePhoneInput}
                            variant="outlined"
                            fullWidth
                            id="phoneNum"
                            label="Phone Number"
                            name="phoneNum"
                        />
                    </Grid>
                </Grid>
                <LoadingButton
                    loading={loading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    endIcon={<ArrowForwardIcon/>}
                    id="nextButton"
                >
                    Next
                </LoadingButton>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        Don't have an account?  
                        <Link href="#" variant="body2">
                            Sign up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>

        </>
    )
}

export default PhoneInput;