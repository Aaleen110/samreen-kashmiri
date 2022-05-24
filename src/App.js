import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './Screens/Home';
import Services from './Screens/Services';
import Features from './Screens/Features';

import HomeResponsive from './ResponsiveScreens/HomeResponsive';
import FeaturesResponsive from './ResponsiveScreens/FeaturesResponsive';
import Feedback from './Screens/Feedback';
import Work from './Screens/Work';
import Contact from './Screens/Contact';
import ServicesResponsive from './ResponsiveScreens/ServicesResponsive';
import FeedbackResponsive from './ResponsiveScreens/FeedbackResponsive';
import WorkResponsive from './ResponsiveScreens/WorkResponsive';
import ContactResponsive from './ResponsiveScreens/ContactResponsive';


function App() {

  const [width, setWindowWidth] = useState(0)
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () =>
      window.removeEventListener("resize", updateDimensions);
  }, [])
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    width < 1200 ?
      <>
        <HomeResponsive />
        <FeaturesResponsive />
        <ServicesResponsive />
        <FeedbackResponsive />
        <WorkResponsive />
        <ContactResponsive />
        {/* <HowItWorksResponsive />
        
        <ChoosePlanResponsive />
        <ScheduleDemoResponsive />
        <AboutUsResponsive /> */}
      </>
      :
      <>
        <Home />
        <Features />
        <Services />
        <Feedback />
        <Work />
        <Contact />
      </>
  );
}

export default App;
