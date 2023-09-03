import React, { useState } from 'react'

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
        

      </ul>
    </nav>

    <div class="content">
        <div style={{ display: activeContent === 'MemoryIssue' ? "block" : "none" }}>{<MemoryIssue />}</div>
        
    </div>
  </div>
  )
}

export default Spark