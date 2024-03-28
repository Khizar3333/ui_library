import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import SearchBar from './Searchbar';
import Hero from './Hero';
const Header = () => {

 
  function handleCardClick(event) {
    event.preventDefault(); // Prevent default anchor tag behavior
  
    const cardElement = document.getElementById('card-section');
    const contactElement = document.getElementById('contact-section')
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
   
  }
  function handleCardClick2(event) {
    event.preventDefault(); // Prevent default anchor tag behavior
  
    const contactElement = document.getElementById('contact-section')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
  
    const navigate = useNavigate();
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  {/* <Navbar/> */}
  <NavLink href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl font-serif">KA Devs</span>
    </NavLink>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className="mr-5 hover:text-gray-900 active:text-blue-500">Home</NavLink>
      <NavLink to="#" className="mr-5 hover:text-gray-900 active:text-blue-500">About</NavLink>
      <NavLink to="#service-section" className="mr-5 hover:text-gray-900 active:text-blue-500" onClick={handleCardClick}>Services</NavLink>
      <NavLink to="#contact-section" className="mr-5 hover:text-gray-900 active:text-blue-500" onClick={handleCardClick2}>Contact us</NavLink>
  {/* Other links */}


    </nav>
    {/* <Button/> */}
    <SearchBar/>
  </div>
</header>
{/* <Hero/> */}
    
    </>
  )
}

export default Header