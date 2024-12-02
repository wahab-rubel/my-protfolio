import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Slider/Slider';


const Home = () => {
 return (
  <div>
   <Header></Header>
   <Slider></Slider>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default Home;