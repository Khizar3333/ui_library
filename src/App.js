import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Card from './components/Card';
import Hero from './components/Hero';
import Header from "./components/Header";
import Services from './components/Services';
function App() {
  return (
   
    <div className='App'>
      <Router>
          <Header/>
        <Routes>
          {/* <Route path='/' element={<Header />} /> */}
          {/* <Route path='/' element={<Hero />} /> */}
          {/* <Route path='#card-section' element={<Services />} /> */}

          {/* <Route path='#contact-section' element={<Contact />} /> */}
        </Routes>
       

      <Hero/>
      <Services/>
      <Contact/>
      </Router>
      <Footer/>
      
     </div>
     
  );
}

export default App;
