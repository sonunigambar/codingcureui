
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import Headerbar from './jsx/Headerbar';
import HorizontalNav from './jsx/HorizontalNav';
import Home from './jsx/Home';
import Spark from './jsx/Spark';
import Footer from './jsx/Footer';
import Java8 from './jsx/Java8';
import './css/HomeStyle.css'
import Hadoop from './jsx/Hadoop';
import Microservice from './jsx/Microservice';
import LogicalQuestion from './jsx/LogicalQuestion';




function App() {
  return (
    <>
      {/* <MainPage />
      <Headerbar />
      <HorizontalNav /> */}
      <BrowserRouter basename="/codingcureui">
      {/* <MainPage /> */}
      <Headerbar />
      <HorizontalNav />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/spark' element = {<Spark />}/>
        <Route path='/codingcureui/java8' element = {<Java8 />}/>
        <Route path='/hadoop' element = {<Hadoop />}/>
        <Route path='/microservice' element = {<Microservice />}/>
        <Route path='/logicalQuestion' element = {<LogicalQuestion />}/>
      </Routes>
      <Footer />
    </BrowserRouter>

    {/* <Footer /> */}
    </>
    
  );
}

export default App;
