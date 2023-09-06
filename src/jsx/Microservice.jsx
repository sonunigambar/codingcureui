import React, { useEffect, useState } from 'react'
import EurekaServiceRegistry from '../microservice/EurekaServiceRegistry';
import WhatIsWebService from '../microservice/WhatIsWebService';
import axios from 'axios';

const Microservice = () => {
    const [showNav, setShowNav] = useState(true);
    const [activeContent, setActiveContent] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);



    useEffect(() => {
      //parse the url to get the content parameter
        const searchParams = new URLSearchParams(window.location.search);
        const constParams = searchParams.get('content');
  
        //Determine which content section to display based on the content parameter
        if (constParams) {
          setActiveContent(constParams);
        }
      },[]);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const showContent = (event,contentId) => {

    const searchParams = new URLSearchParams();
    searchParams.set('content',contentId);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({},'',newUrl);

    
    setActiveContent(contentId);
    if (activeLink) {
        activeLink.classList.remove("active");
      }
    event.target.classList.add("active");
    setActiveLink(event.target);
      axios.get("https://sweet-creator-production.up.railway.app/api/comments?commentType="+contentId)
        .then((resp) => {
          // console.log(resp.data);
          setData(resp.data); // Assuming the response data is what you want to pass to components
        })
        .catch((error) => {
          // console.log(error);
        });
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
        <div style={{ display: activeContent === 'EurekaServiceRegistry' ? "block" : "none" }}>{<EurekaServiceRegistry id='EurekaServiceRegistry' contenId='EurekaServiceRegistry' data={data} />}</div>
        <div style={{ display: activeContent === 'WhatIsWebService' ? "block" : "none" }}>{<WhatIsWebService  id='WhatIsWebService' contenId='WhatIsWebService' data={data} />}</div> 
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