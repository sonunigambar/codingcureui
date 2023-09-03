import React, { useState } from 'react'
import MemoryIssue from '../spark/MemoryIssue';
import ProblemInCluster from '../spark/ProblemInCluster';
import RunSparkJob from '../spark/RunSparkJob';

const Spark = () => {
    const [showNav, setShowNav] = useState(true);
    const [activeContent, setActiveContent] = useState(null);
    const [activeLink, setActiveLink] = useState(null);

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

  return (
    <div class="container">
        <button className="arrow-btn" onClick={toggleNav}>
        {showNav ? "\u2039": "\u203A"}
      </button>
    <nav style={{ display: showNav ? "block" : "none" }}>
      <ul>
        <li><a onClick={(e) => showContent(e,'MemoryIssue')}>Spark Out of Memory Issue</a></li>
        {/* <li><a onClick={(e) => showContent(e,'RunSparkJob')}>Run Spark Job</a></li>
        <li><a onClick={(e) => showContent(e,'ProblemInCluster')}>Problem in Cluster</a></li> */}
        

      </ul>
    </nav>

    <div class="content">
        <div style={{ display: activeContent === 'MemoryIssue' ? "block" : "none" }}>{<MemoryIssue />}</div>
        {/* <div style={{ display: activeContent === 'RunSparkJob' ? "block" : "none" }}>{<RunSparkJob />}</div>
        <div style={{ display: activeContent === 'ProblemInCluster' ? "block" : "none" }}>{<ProblemInCluster />}</div> */}
        
    </div>
  </div>
  )
}

export default Spark