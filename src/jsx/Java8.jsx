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
    const [data, setData] = useState([]);

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
      axios.get("https://sweet-creator-production.up.railway.app/api/comments?commentType="+contentId)
        .then((resp) => {
          // console.log(resp.data);
          setData(resp.data); // Assuming the response data is what you want to pass to components
        })
        .catch((error) => {
          // console.log(error);
        });
  };

  // useEffect(() => {
  //   if (searchTerm === '') {
  //     // Only fetch data if searchTerm is empty (you can adjust this condition)
  //     axios.get("http://localhost:9090/api/comments?commentType="+activeContent)
  //       .then((resp) => {
  //         setData(resp.data); // Assuming the response data is what you want to pass to components
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [searchTerm, activeContent]);

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
        <div style={{ display: activeContent === 'LamdaExpression' ? "block" : "none" }}>{<Lamda id='LamdaExpression' contenId='lamdaexpression' data={data}/>}</div> 
        <div style={{ display: activeContent === 'Interface' ? "block" : "none" }}>{<Interface id='Interface' contenId='Interface' data={data}/>}</div>
        <div style={{ display: activeContent === 'StaticMethod' ? "block" : "none" }}>{<StaticMethod id='StaticMethod' contenId='StaticMethod' data={data}/>}</div>
        <div style={{ display: activeContent === 'FunctionalInterface' ? "block" : "none" }}>{<Functionalinterface id='FunctionalInterface' contenId='FunctionalInterface' data={data}/>}</div>
        <div style={{ display: activeContent === 'InvokeFunctionalInterface' ? "block" : "none" }}>{<InvokeLambda id='InvokeFunctionalInterface' contenId='InvokeFunctionalInterface' data={data}/>}</div>
        <div style={{ display: activeContent === 'VariousProgramUsingFI' ? "block" : "none" }}>{<ProgramOfFI id='VariousProgramUsingFI' contenId='VariousProgramUsingFI' data={data}/>}</div>
        <div style={{ display: activeContent === 'Predicate' ? "block" : "none" }}>{<Predicate id='Predicate' contenId='Predicate' data={data}/>}</div>
        <div style={{ display: activeContent === 'PredicateJoining' ? "block" : "none" }}>{<PredicateJoining id='PredicateJoining' contenId='PredicateJoining' data={data}/>}</div>
        <div style={{ display: activeContent === 'BiPredicate' ? "block" : "none" }}>{<BiPredicate id='BiPredicate' contenId='BiPredicate' data={data}/>}</div>
        <div style={{ display: activeContent === 'Consumer' ? "block" : "none" }}>{<Consumer id='Consumer' contenId='Consumer' data={data}/>}</div>
        <div style={{ display: activeContent === 'BiConsumer' ? "block" : "none" }}>{<BiConsumer id='BiConsumer' contenId='BiConsumer' data={data}/>}</div>
        <div style={{ display: activeContent === 'Supplier' ? "block" : "none" }}>{<Supplier id='Supplier' contenId='Supplier' data={data}/>}</div>
        
    </div>
  </div>
  )
}

export default Java8