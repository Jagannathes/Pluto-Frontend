import {useEffect, useState} from 'react';

import MuiPhoneNumber from 'material-ui-phone-number';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';

function RegForm() {
    const [phoneNumber, setPhoneNumber] = useState(null);
    function handlePhoneInput(value){
        setPhoneNumber(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(()=>{
        console.log("Phone Number: " + phoneNumber);
    },[phoneNumber]);

    return(
        <>
        <Container component="main" maxWidth="xs" sx={{ mt: 7 }}>
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    endIcon={<ArrowForwardIcon/>}
                >
                    Next
                </Button>
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