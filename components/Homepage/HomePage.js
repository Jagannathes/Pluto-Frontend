import Footer from './Footer'
import React from 'react'
import Faqs from './Faqs'
import MainPage from './MainPage'
import Section1 from './Section1'
import Section2 from './Section2'
import Homenav from './Homenav'

function HomePage() {
    return (
        <div>
<Homenav />
            <MainPage />
            <Section1 />
            <Section2 />
            <Faqs />
            <Footer />
        </div>
    )
}

export default HomePage