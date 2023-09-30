import React, { useState } from 'react'
import Home from './Home';
import Spark from './Spark';
import Java8 from './Java8';
import Hadoop from './Hadoop';
import { Link } from 'react-router-dom';


const HorizontalNav = () => {
  // const [activeLink, setActiveLink] = useState(null);
  const [activeItem, setActiveItem] = useState("Home");


  const handleItemClick = (e, itemName) => {
    // e.preventDefault(); // Prevent default behavior (routing) on click
    setActiveItem(itemName);
  };


  return (
    <>
    <div class="horizontal-nav">
     {/* <ul>
                <li className={activeItem === 'Home' ? 'active' : ''} onClick={(e) => handleItemClick(e,'Home')}>
                    Home
                </li>
                <li className={activeItem === 'Hadoop' ? 'active' : ''} onClick={(e) => handleItemClick(e,'Hadoop')}>
                    Hadoop
                </li>
                <li className={activeItem === 'Java8' ? 'active' : ''} onClick={(e) => handleItemClick(e,'Java8')}>
                    Java8
                </li>
                <li className={activeItem === 'Spark' ? 'active' : ''} onClick={(e) => handleItemClick(e,'Spark')}>
                    Spark
                </li>
    </ul> */}
    <ul>
    <li><Link to="/">Home</Link></li>
      <li><Link to="/java8">Java8</Link></li>
      <li><Link to="/logicalQuestion" class="active">LogicalQuestion</Link></li>
      <li><Link to="/hadoop">Hadoop</Link></li>
      <li><Link to="/microservice">MicroService</Link></li>
    </ul>
   
  </div>
      {/* {
        activeItem === 'Home'? <Home />
        : activeItem === 'Java8'? <Java8/>
        : activeItem === 'Spark'? <Spark/>
        : activeItem === 'Hadoop'? <Hadoop/>
        :""
      } */}
      
  </>
  )
}

export default HorizontalNav