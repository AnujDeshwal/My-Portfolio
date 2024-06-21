import React, { useEffect } from "react";
import Header from "./components/pages/Header";
import Drawer from "./components/shared/Drawer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ExploreExperience from "./components/pages/ExploreExperience";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
const App = () => {
  console.log("heelo")
  useEffect(() => {
    // Function to handle smooth scrolling
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1); // Remove the '#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listeners to all anchor tags starting with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    // Clean up event listeners when component unmounts
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);
 
  
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <Drawer />
      <Home />
      <About />
      <ExploreExperience />
      <Projects />
      <Contact email="anujdeshwal95@gmail.com"/>
    </div>
  );
};
export default App;
