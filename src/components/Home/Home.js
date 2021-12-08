import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Intro from '../intro/Intro';
import ProductList from '../productList/ProductList';
import Toggle from '../toggle/Toggle';

const Home = () => {
    return (
        <div>
            <Header />
            <Toggle />
            <Intro />
            <About />
            <ProductList />
            <Contact />
        </div>
    );
};

export default Home;