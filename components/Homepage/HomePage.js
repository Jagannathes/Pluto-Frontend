import Footer from './Footer'
import React, { useContext, useEffect, useState } from "react";
import Faqs from './Faqs'
import MainPage from './MainPage'
import Section1 from './Section1'
import Section2 from './Section2'
import Homenav from './Homenav'
import UserContext from "context/user/UserContext";

function HomePage() {
    const { user, userLoading, userError, logout } = useContext(UserContext);

    useEffect(() => {
        console.log("User: ", user);
        console.log("UserLoading: ", userLoading);
    }, [user, userLoading]);
    return (
        <div>
            <Homenav loading={userLoading} user={user} logout={logout} />
            <MainPage />
            <Section1 />
            <Section2 />
            <Faqs />
            <Footer />
        </div>
    )
}

export default HomePage