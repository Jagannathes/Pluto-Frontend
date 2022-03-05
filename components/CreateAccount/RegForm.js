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


import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";

function RegForm({setStep, setConfirmationResult}) {

    // TO CHANGE
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCPOD6uz1WqFQBdxxNj9etwxIa_Lmrsm7o",
        authDomain: "pluto-devcraft.firebaseapp.com",
        projectId: "pluto-devcraft",
        storageBucket: "pluto-devcraft.appspot.com",
        messagingSenderId: "331101092899",
        appId: "1:331101092899:web:6347a2f3a478a0f0590596"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


    const auth = getAuth();
    const PhoneNumber = "+917034452171";
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
        console.log(PhoneNumber);
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
                Create Your Account!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                    />
                </Grid> 
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
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I agree to terms and Conditions."
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
                        Already have an account? 
                        <Link href="#" variant="body2">
                            Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>

        </>
    )
}

export default RegForm;