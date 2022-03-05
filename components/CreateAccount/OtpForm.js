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
import {useRouter} from "next/router";
import {useState} from "react";

function OtpForm({confirmationResult})  {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const router = useRouter();
    function handleOtpSubmit(e) {
        e.preventDefault();
        setError(false);
        setErrorText("");
        setLoading(true);
        const data = new FormData(e.currentTarget);
        const code = data.get('otp')
        console.log({
            otp: code
        });
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("Success");
            console.log(user);
            router.push('/');
            // ...
        }).catch((error) => {
              console.log("Error");
              console.log(error);
              setError(true);
              setErrorText("Invalid OTP");
            // User couldn't sign in (bad verification code?)
            // ...
        }).finally(()=>{
            setLoading(false);
        });
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 7 }}>
            <Typography component="h1" variant="h5" align="center">
                Enter OTP Recieved
            </Typography>
            <Box component="form" onSubmit={handleOtpSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name="otp"
                            required
                            fullWidth
                            id="otp"
                            label="Enter Otp"
                            error={error}
                            helperText={errorText}
                            autoFocus
                        />
                    </Grid>
                </Grid>
                <LoadingButton
                    loading={loading}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // endIcon={<ArrowForwardIcon/>}
                    id="submitButton"
                >
                    Submit
                </LoadingButton>
            </Box>
        </Container> 
    )
}

export default OtpForm;