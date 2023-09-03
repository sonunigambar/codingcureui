import React, { useEffect, useState } from 'react'
import FeaturesOfJava8 from '../java8/FeaturesOfJava8';
import Lamda from '../java8/Lambda';
import Functionalinterface from '../java8/Functionalinterface';
import Predicate from '../java8/Predicate';
import InvokeLambda from '../java8/InvokeLambda';
import ProgramOfFI from '../java8/ProgramOfFI';
import PredicateJoining from '../java8/PredicateJoining';
import BiPredicate from '../java8/BiPredicate';
import Consumer from '../java8/Consumer';
import BiConsumer from '../java8/BiConsumer';
import Supplier from '../java8/Supplier';
import Interface from '../java8/Interface';
import StaticMethod from '../java8/StaticMethod';
import axios from 'axios';

const Java8 = () => {
    const [showNav, setShowNav] = useState(true);
    const [activeContent, setActiveContent] = useState(null);
    const [activeLink, setActiveLink] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState();

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

    //call axios based on contentId
    axios.get("http://localhost:9090/api/comments?commentType="+contentId)
    // axios.get("http://localhost:9090/api/comments?commentType=java8")
    .then((resp) => {
      // console.log(resp.data);
      if (resp.status === 200 && (resp.data).length !== 0) {
        const x = resp.data[0].commentType
          localStorage.setItem(x, JSON.stringify(resp.data));
          setData(x)
      } else{
        localStorage.setItem(contentId.toLowerCase, JSON.stringify(resp.data));
        setData(resp.data)
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (searchTerm === '') {
      
    }else{
      var element = document.getElementById("left_nav_heading");
      element.classList.remove("mystyle");
    }
  }, [])

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
      {/* {filterLinks('Stream API RealTime Question') && (
            <li>
              <a onClick={(e) => showContent(e, 'FeaturesOfJava8')}>Stream API RealTime Question</a>
            </li>
          )} */}
          {filterLinks('What Is Lamda') && (
            <li>
              <a onClick={(e) => showContent(e, 'LamdaExpression')}>What Is Lamda</a>
            </li>
          )}
          {searchTerm === "" && (
          <h5 id="left_nav_heading">Interface</h5>
        )}
        {filterLinks('default method') && (
            <li>
              <a onClick={(e) => showContent(e, 'Interface')}>default method</a>
            </li>
          )}
          {filterLinks('static method') && (
            <li>
              <a onClick={(e) => showContent(e, 'StaticMethod')}>static method</a>
            </li>
          )}
          {searchTerm === "" && (
          <h5 id="left_nav_heading">Functional Interface</h5>
        )}
          {filterLinks('Functional Interface') && (
            <li>
              <a onClick={(e) => showContent(e, 'FunctionalInterface')}>About Functional Interface</a>
            </li>
          )}
          {filterLinks('Invoke Lambda Using Functional Interface') && (
            <li>
              <a onClick={(e) => showContent(e, 'InvokeFunctionalInterface')}>Invoke Lambda Using Functional Interface</a>
            </li>
          )}
          {filterLinks('Various Program Using FI') && (
            <li>
              <a onClick={(e) => showContent(e, 'VariousProgramUsingFI')}>Various Program Using FI</a>
            </li>
          )}
          {searchTerm === "" && (
          <h5 id="left_nav_heading">Predicate</h5>
        )}
          {filterLinks('Predicate') && (
            <li>
              <a onClick={(e) => showContent(e, 'Predicate')}>Predicate</a>
            </li>
          )}
          {filterLinks('Predicate Joining') && (
            <li>
              <a onClick={(e) => showContent(e, 'PredicateJoining')}>Predicate Joining</a>
            </li>
          )}
          {filterLinks('BiPredicate') && (
            <li>
              <a onClick={(e) => showContent(e, 'BiPredicate')}>BiPredicate</a>
            </li>
          )}
          {searchTerm === "" && (
          <h5 id="left_nav_heading">Consumer</h5>
        )}
          {filterLinks('Consumer') && (
            <li>
              <a onClick={(e) => showContent(e, 'Consumer')}>Consumer</a>
            </li>
          )}
          {filterLinks('BiConsumer') && (
            <li>
              <a onClick={(e) => showContent(e, 'BiConsumer')}>BiConsumer</a>
            </li>
          )}
         
          {filterLinks('Supplier') && (
            <li>
              <a onClick={(e) => showContent(e, 'Supplier')}>Supplier</a>
            </li>
          )}
         

          {/* Additional list items... */}
        </ul>
    </nav>

    <div class="content">
        <div style={{ display: activeContent === 'FeaturesOfJava8' ? "block" : "none" }}>{<FeaturesOfJava8 />}</div>
        <div style={{ display: activeContent === 'LamdaExpression' ? "block" : "none" }}>{<Lamda id='Lamda' contenId='lamdaexpression'/>}</div> 
        <div style={{ display: activeContent === 'FunctionalInterface' ? "block" : "none" }}>{<Functionalinterface />}</div>
        <div style={{ display: activeContent === 'InvokeFunctionalInterface' ? "block" : "none" }}>{<InvokeLambda />}</div>
        <div style={{ display: activeContent === 'VariousProgramUsingFI' ? "block" : "none" }}>{<ProgramOfFI />}</div>
        <div style={{ display: activeContent === 'Predicate' ? "block" : "none" }}>{<Predicate />}</div>
        <div style={{ display: activeContent === 'PredicateJoining' ? "block" : "none" }}>{<PredicateJoining />}</div>
        <div style={{ display: activeContent === 'BiPredicate' ? "block" : "none" }}>{<BiPredicate />}</div>
        <div style={{ display: activeContent === 'Consumer' ? "block" : "none" }}>{<Consumer />}</div>
        <div style={{ display: activeContent === 'BiConsumer' ? "block" : "none" }}>{<BiConsumer />}</div>
        <div style={{ display: activeContent === 'Supplier' ? "block" : "none" }}>{<Supplier />}</div>
        <div style={{ display: activeContent === 'Interface' ? "block" : "none" }}>{<Interface contenId='lamdaexpression' data={setData}/>}</div>
        <div style={{ display: activeContent === 'StaticMethod' ? "block" : "none" }}>{<StaticMethod />}</div>
        
    </div>
  </div>
  )
}

export default Java8