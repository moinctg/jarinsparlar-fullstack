import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testomonials';
import ProductBanner from './ProductBanner/ProductBanner';
import Portfolio from '../../Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ItemContainer from './ItemContainer/ItemContainer';
// import OurTeam from '../../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner> </Banner>
            <Services></Services>
            <ItemContainer></ItemContainer>
            <ProductBanner></ProductBanner>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            {/* <OurTeam></OurTeam> */}

            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;