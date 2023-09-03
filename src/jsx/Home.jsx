import '../css/Home.css'
import '../css/swiper-bundle.min.css'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper";



import postSlide1 from '../img/post-slide-1.jpg';
// import postSlide1 from '../img/post-slide-1.jpg';
import postSlide2 from '../img/post-slide-2.jpg';
import postSlide3 from '../img/post-slide-3.jpg';
import Slider from './Slider';
// import postSlide4 from '../img/post-slide-4.jpg';

const slides = [
  { image: postSlide1, caption: 'Caption Text' },
  { image: postSlide2, caption: 'Caption Two' },
  { image: postSlide3, caption: 'Caption Three' },
];



const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // useEffect((n) => {
  //   showSlides(n);
  // }, []);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = i + 1 === slideIndex ? 'block' : 'none';
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    dots[slideIndex - 1].className += ' active';
  };

  const prevSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    // const newIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
    // showSlides(newIndex + 1);
    
  };

  const nextSlide = () => {
    // setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setActiveSlideIndex(2);
    // const newIndex = (activeSlideIndex + 1) % slides.length;
    // showSlides(newIndex + 1);
  };

  return (
    
    // <div style={{backgroundColor:'#0f264d', height:'100vh'}}>
    <div style={{backgroundColor:'#0f264d', height:'75vh'}}>
      <Slider />
      <h1 style={{color:'white'}}>Welcome to Coding Cure !</h1>

<p style={{color:'white'}}>We believe that anyone can become a proficient programmer with the right tools and guidance. Our mission is to empower individuals like you to embark on an exciting journey into the world of coding and software development.</p>
   {/* <p>Our platform is designed to fit your schedule. Learn at your own pace, and access our resources from anywhere, at any time.</p> */}
      {/* <h2>A blog on Java and Python programming languages</h2>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quae ex nesciunt, sunt neque ipsa ducimus possimus recusandae, eaque fuga molestiae doloremque. Culpa impedit iste, nam sint est sequi similique!</h2> */}
    </div>
  );
};

export default Home;
