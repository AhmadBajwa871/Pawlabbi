import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Geschichte from '../../Components/Geschichte/Geschichte'
import Features from '../../Components/Features/Features'
import Product from '../../Components/Product/Product'
import Vergleich from '../../Components/Vergleich/Vergleich'
import Warum from '../../Components/Warum.jsx/Warum'
import Insta from '../../Components/Insta/Insta'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <Geschichte></Geschichte>
    <Features></Features>
    <Product></Product>
    <Vergleich></Vergleich>
    <Warum></Warum>
    <Insta></Insta>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </div>
  )
}

export default Home