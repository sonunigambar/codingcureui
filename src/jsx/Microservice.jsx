import React, { useState } from 'react'
import EurekaServiceRegistry from '../microservice/EurekaServiceRegistry';
import WhatIsWebService from '../microservice/WhatIsWebService';

const Microservice = () => {
    const [showNav, setShowNav] = useState(true);
    const [activeContent, setActiveContent] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const showContent = (event,contentId) => {
    setActiveContent(contentId);
    if (activeLink) {
        activeLink.classList.remove("active");
      }
    event.target.classList.add("active");
    setActiveLink(event.target);
  };

  const filterLinks = (link) =>
    link.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <div class="container">
        <button className="arrow-btn" onClick={toggleNav}>
        {showNav ? "\u2039": "\u203A"}
      </button>
    <nav style={{ display: showNav ? "block" : "none" }}>
    <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className='searchItem'
          />
          {/* <SearchIcon /> */}
        </div>
      <ul>
      {filterLinks('Service Registry (Eureka)') && (
            <li>
              <a onClick={(e) => showContent(e, 'EurekaServiceRegistry')}>Service Registry (Eureka)</a>
            </li>
          )}
         {filterLinks('What Is WebService') && (
            <li>
              <a onClick={(e) => showContent(e, 'WhatIsWebService')}>What Is WebService</a>
            </li>
          )}
           {/* {filterLinks('Functional Interface') && (
            <li>
              <a onClick={(e) => showContent(e, 'FunctionalInterface')}>Functional Interface</a>
            </li>
          )}
          {filterLinks('Predicate') && (
            <li>
              <a onClick={(e) => showContent(e, 'Predicate')}>Predicate</a>
            </li>
          )} */}
          {/* Additional list items... */}
        </ul>
    </nav>

    <div class="content">
        <div style={{ display: activeContent === 'EurekaServiceRegistry' ? "block" : "none" }}>{<EurekaServiceRegistry />}</div>
        <div style={{ display: activeContent === 'WhatIsWebService' ? "block" : "none" }}>{<WhatIsWebService />}</div> 
         {/* <div style={{ display: activeContent === 'FunctionalInterface' ? "block" : "none" }}>{<Functionalinterface />}</div>
        <div style={{ display: activeContent === 'Predicate' ? "block" : "none" }}>{<Predicate />}</div> */}
        {/* <div style={{ display: activeContent === 'FunctionalInterface' ? "block" : "none" }}>{<Functionalinterface />}</div>
        <div style={{ display: activeContent === 'FunctionalInterface' ? "block" : "none" }}>{<Functionalinterface />}</div>
        <div style={{ display: activeContent === 'FunctionalInterface' ? "block" : "none" }}>{<Functionalinterface />}</div> */}
        
    </div>
  </div>
  )
}

export default Microservice