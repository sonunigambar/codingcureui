import React, { useEffect, useState } from 'react'

import FindAlphaNumeric from '../logicalQuestion/FindAlphaNumeric';
import FindDuplicateCharacters from '../logicalQuestion/FindDuplicateCharacters';
import FindNumberOfCharEachWord from '../logicalQuestion/FindNumberOfCharEachWord';
import OccuranceOfEachCharacter from '../logicalQuestion/OccuranceOfEachCharacter';
import Palindrome from '../logicalQuestion/Palindrome';
import RemoveDuplicateCharacterFromString from '../logicalQuestion/RemoveDuplicateCharacterFromString';
import ReverseFullString from '../logicalQuestion/ReverseFullString';
import ReverseStringWordByWord from '../logicalQuestion/ReverseStringWordByWord';
import SortingString from '../logicalQuestion/SortingString';
import SwapTwoStringWithOutTaking3rdVariable from '../logicalQuestion/SwapTwoStringWithOutTaking3rdVariable';
import ArrayOperation from '../logicalQuestion/ArrayOperation';
import MergeTwoArray from '../logicalQuestion/MergeTwoArray';
import MergeTwoArrayInZigZag from '../logicalQuestion/MergeTwoArrayInZigZag';
import DisplayCommonElement from '../logicalQuestion/DisplayCommonElement';
import FindBiggestAndSmallest from '../logicalQuestion/FindBiggestAndSmallest';
import FindingMissingElement from '../logicalQuestion/FindingMissingElement';
import SortingStringArray from '../logicalQuestion/SortingStringArray';
import axios from 'axios';

const LogicalQuestion = () => {
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
      {searchTerm === "" && (
          <h5 id="left_nav_heading">String</h5>
        )}
          {filterLinks('Find Alpha Numeric') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'FindAlphaNumeric')}>Find Alpha Numeric</a>
            </li>
          )}
        {filterLinks('Find Duplicate Characters') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'FindDuplicateCharacters')}>Find Duplicate Characters</a>
            </li>
          )}
          {filterLinks('static method') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'NumberOfCharEachWord')}>Number of character in each wordstatic method</a>
            </li>
          )}
         
          {filterLinks('Occurance Of Each Character') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'OccuranceOfEachCharacter')}>Occurance Of Each Character</a>
            </li>
          )}
          {filterLinks('Check Palindrome') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'Palindrome')}>Check Palindrome</a>
            </li>
          )}
          {filterLinks('Remove Duplicate Characters') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'RemoveDuplicateCharacterFromString')}>Remove Duplicate Characters</a>
            </li>
          )}
          
          {filterLinks('Reverse Full String') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'ReverseFullString')}>Reverse Full String</a>
            </li>
          )}
          {filterLinks('Reverse String Word By Word') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'ReverseStringWordByWord')}>Reverse String Word By Word</a>
            </li>
          )}
          {filterLinks('Sorting String') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'SortingString')}>Sorting String</a>
            </li>
          )}
          {filterLinks('Swap two string without 3rd variable') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'SwapTwoStringWithOutTaking3rdVariable')}>Swap two string without 3rd variable</a>
            </li>
          )}
          
          {searchTerm === "" && (
          <h5 id="left_nav_heading">Array</h5>
        )}
         {filterLinks('Array Operation') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'ArrayOperation')}>Array Operation</a>
            </li>
          )}
          {filterLinks('Merge Two Array') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'MergeTwoArray')}>Merge Two Array</a>
            </li>
          )}
          {filterLinks('Merge Two Array In ZigZag') && (
            <li>
              <a href="###" onClick={(e) => showContent(e, 'MergeTwoArrayInZigZag')}>Merge Two Array In ZigZag</a>
            </li>
          )}
          {filterLinks('Display Common Element') && (
            <li>
              <a  href="###" onClick={(e) => showContent(e, 'DisplayCommonElement')}>Display Common Element</a>
            </li>
          )}
           {filterLinks('Find Biggest And Smallest') && (
            <li>
              <a  href="##" onClick={(e) => showContent(e, 'FindBiggestAndSmallest')}>Find Biggest And Smallest</a>
            </li>
          )}
            {filterLinks('Find Missing Element') && (
            <li>
              <a href="##" onClick={(e) => showContent(e, 'FindingMissingElement')}>Find Missing Element</a>
            </li>
          )}
            {filterLinks('Sorting String Array') && (
            <li>
              <a href="##" onClick={(e) => showContent(e, 'SortingStringArray')}>Sorting String Array</a>
            </li>
          )}

          {/* Additional list items... */}
        </ul>
    </nav>

    <div class="content">
        <div style={{ display: activeContent === 'FindAlphaNumeric' ? "block" : "none" }}>{<FindAlphaNumeric id='FindAlphaNumeric' contenId='FindAlphaNumeric' data={data}/>}</div>
        <div style={{ display: activeContent === 'FindDuplicateCharacters' ? "block" : "none" }}>{<FindDuplicateCharacters id='FindDuplicateCharacters' contenId='FindDuplicateCharacters' data={data}/>}</div> 
        <div style={{ display: activeContent === 'NumberOfCharEachWord' ? "block" : "none" }}>{<FindNumberOfCharEachWord id='NumberOfCharEachWord' contenId='NumberOfCharEachWord' data={data}/>}</div>
        <div style={{ display: activeContent === 'OccuranceOfEachCharacter' ? "block" : "none" }}>{<OccuranceOfEachCharacter id='OccuranceOfEachCharacter' contenId='OccuranceOfEachCharacter' data={data}/>}</div>
        <div style={{ display: activeContent === 'Palindrome' ? "block" : "none" }}>{<Palindrome id='Palindrome' contenId='Palindrome' data={data}/>}</div>
        <div style={{ display: activeContent === 'RemoveDuplicateCharacterFromString' ? "block" : "none" }}>{<RemoveDuplicateCharacterFromString id='RemoveDuplicateCharacterFromString' contenId='RemoveDuplicateCharacterFromString' data={data}/>}</div>
        <div style={{ display: activeContent === 'ReverseFullString' ? "block" : "none" }}>{<ReverseFullString id='ReverseFullString' contenId='ReverseFullString' data={data}/>}</div>
        <div style={{ display: activeContent === 'ReverseStringWordByWord' ? "block" : "none" }}>{<ReverseStringWordByWord id='ReverseStringWordByWord' contenId='ReverseStringWordByWord' data={data}/>}</div>
        <div style={{ display: activeContent === 'SortingString' ? "block" : "none" }}>{<SortingString id='SortingString' contenId='SortingString' data={data}/>}</div>
        <div style={{ display: activeContent === 'SwapTwoStringWithOutTaking3rdVariable' ? "block" : "none" }}>{<SwapTwoStringWithOutTaking3rdVariable id='SwapTwoStringWithOutTaking3rdVariable' contenId='SwapTwoStringWithOutTaking3rdVariable' data={data}/>}</div>
        <div style={{ display: activeContent === 'ArrayOperation' ? "block" : "none" }}>{<ArrayOperation id='ArrayOperation' contenId='ArrayOperation' data={data}/>}</div>
        <div style={{ display: activeContent === 'MergeTwoArray' ? "block" : "none" }}>{<MergeTwoArray id='MergeTwoArray' contenId='MergeTwoArray' data={data}/>}</div>
        <div style={{ display: activeContent === 'MergeTwoArrayInZigZag' ? "block" : "none" }}>{<MergeTwoArrayInZigZag id='MergeTwoArrayInZigZag' contenId='MergeTwoArrayInZigZag' data={data}/>}</div>
        <div style={{ display: activeContent === 'DisplayCommonElement' ? "block" : "none" }}>{<DisplayCommonElement id='DisplayCommonElement' contenId='DisplayCommonElement' data={data}/>}</div>
        <div style={{ display: activeContent === 'FindBiggestAndSmallest' ? "block" : "none" }}>{<FindBiggestAndSmallest id='FindBiggestAndSmallest' contenId='FindBiggestAndSmallest' data={data}/>}</div>
        <div style={{ display: activeContent === 'FindingMissingElement' ? "block" : "none" }}>{<FindingMissingElement id='FindingMissingElement' contenId='FindingMissingElement' data={data}/>}</div>
        <div style={{ display: activeContent === 'SortingStringArray' ? "block" : "none" }}>{<SortingStringArray id='SortingStringArray' contenId='SortingStringArray' data={data}/>}</div>
    </div>
  </div>
  )
}

export default LogicalQuestion
