import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import About from './components/About';
import Services from './components/Services';
import Books from './components/Books';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <About />
      <Services />
      <Books />
      <Events />
      <Testimonials />
      <Subscribe />
    </div>
  );
}

export default App;
