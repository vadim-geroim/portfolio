import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Hire from "./components/Hire/Hire";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Summary/>
      <Skills/>
      <Projects/>
      <Hire/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
