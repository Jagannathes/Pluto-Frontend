import PhoneInput from "./phoneInput";
import OtpInput from "./otpInput";
import {useState} from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Container from '@mui/material/Container';

function Login () {
    const [step, setStep] = useState(0);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const steps = [
        'Enter your Phone Number',
        'Verify with OTP'
      ];
    function Switcher() {
        // return <RegForm/>


        switch(step)
        {
            case 0:
                return <PhoneInput setStep={setStep} setConfirmationResult={setConfirmationResult} />
            case 1:
                return <OtpInput confirmationResult={confirmationResult} />
            // default:
            //     return <RegForm/>
                    
        }
    }
    return(
        <Container maxWidth="sm" sx={{ mt:10 }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Switcher/>
        </Container>
    )
} 

export default Login;