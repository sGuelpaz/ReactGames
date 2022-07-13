import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarCom from "./components/navigations/Navbar";
import CarouselDark from './components/slider/Carousel';
import Paragraph from './components/text/Paragraph';
import CardsGames from './components/cards/CardsGames';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <NavbarCom/>
      <CarouselDark/>
      <Paragraph/>
      <div className="container conCards">
      <CardsGames/>
      <CardsGames/>
      <CardsGames/>
      </div>
      <div className="end">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
