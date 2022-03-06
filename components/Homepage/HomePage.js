import Footer from './Footer'
import React, { useContext, useEffect, useState } from "react";
import Faqs from './Faqs'
import MainPage from './MainPage'
import Section1 from './Section1'
import Section2 from './Section2'
import Homenav from './Homenav'
import UserContext from "context/user/UserContext";
import  NavBar  from  '@components/NavBar/NavBar'
import BottomNavBar from '@components/BottomNavigation/BottomNavBar'
import Container from '@mui/material/Container'

function HomePage() {
    const { user, userLoading, userError, logout } = useContext(UserContext);

    useEffect(() => {
        console.log("User: ", user);
        console.log("UserLoading: ", userLoading);
    }, [user, userLoading]);
    return (
        <div>
        <Container min-width="lg"> 
           <NavBar />
            <MainPage />
            <Section1 />
            <Section2 />
            <Faqs />
            <Footer />
            <BottomNavBar />
         </Container>
        </div>
    )
}

export default HomePage