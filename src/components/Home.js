import React from 'react'


// import sub components
import HeroSection from './subComponents/HeroSection';
import AbooutSection from './subComponents/AbooutSection';
import MenuSection from './subComponents/MenuSection';
import ReviewSection from './subComponents/ReviewSection';
import BookSection from './subComponents/BookSection';
 
const Home = () => {
    return (
        <>
            {/* hero section 
            ========================*/}
            <HeroSection/>

            {/* Aboout Section
            ===================== */}
            <AbooutSection/>

            {/* Menu Section
            ======================= */}
            <MenuSection/>

            {/* Review
            ======================== */}
            <ReviewSection/>

            {/* Book
            ========================== */}
            <BookSection/>
        </>
    )
}

export default Home;
