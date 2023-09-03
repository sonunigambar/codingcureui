import React, { useState } from 'react'
import WhatIsHdfs from '../hadoop/WhatIsHdfs';
import HadoopComponent from '../hadoop/HadoopComponent';
import MapReduce from '../hadoop/MapReduce';
import DescribeHadoopComponent from '../hadoop/DescribeHadoopComponent';
import ProblemHadoop from '../hadoop/ProblemHadoop';

const Hadoop = () => {
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
        {
          filterLinks('What is HDFS') && (
            <li>
              <a onClick={(e) => showContent(e, 'WhatIsHDFS')}>What is HDFS</a>
            </li>
          )}
          {
          filterLinks('Low level Diagram of Hadoop Component') && (
            <li>
              <a onClick={(e) => showContent(e, 'lldhc')}>Low level Diagram of Hadoop Component</a>
            </li>
          )}
          {
          filterLinks('MapReduce') && (
            <li>
              <a onClick={(e) => showContent(e, 'mapReduce')}>MapReduce</a>
            </li>
          )}
          {
          filterLinks('Describe Hadoop Component') && (
            <li>
              <a onClick={(e) => showContent(e, 'DHC')}>Describe Hadoop Component</a>
            </li>
          )}

          {
          filterLinks('Problem in Hadoop Component(1.0)') && (
            <li>
              <a onClick={(e) => showContent(e, 'PIHC')}>Problem in Hadoop Component(1.0)</a>
            </li>
          )}


      </ul>
    </nav>

    <div class="content">
        <div style={{ display: activeContent === 'WhatIsHDFS' ? "block" : "none" }}>{<WhatIsHdfs />}</div>
         <div style={{ display: activeContent === 'lldhc' ? "block" : "none" }}>{<HadoopComponent/>}</div>
        <div style={{ display: activeContent === 'mapReduce' ? "block" : "none" }}>{<MapReduce/>}</div>
       <div style={{ display: activeContent === 'DHC' ? "block" : "none" }}>{<DescribeHadoopComponent/>}</div>
        <div style={{ display: activeContent === 'PIHC' ? "block" : "none" }}>{<ProblemHadoop/>}</div>




        
    </div>
  </div>
  )
}

export default Hadoop