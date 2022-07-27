import React from 'react'
import './HomeStyle.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarCom from "../../components/navigations/Navbar";
import CarouselDark from '../../components/slider/Carousel';
import Paragraph from '../../components/text/Paragraph';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';


export const Home = () => {
  return (
    <div>
      <NavbarCom/>
      <CarouselDark/>
      <Paragraph/>
      <div className="container conCards flex-wrap">
     <Cards/>
      </div>
      <div className="end">
      <Footer/>
      </div>
    </div>
  )
}

export default Home