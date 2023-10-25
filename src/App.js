import React from 'react';
import NavbarComp from './Components/NavbarComp';
import HeaderComp from './Components/HeaderComp';
import FirstMainComp from './Components/FirstMainComp';
import SecondMainComp from './Components/SecondMainComp';
import FormComp from './Components/FormComp';
import FooterComp from './Components/FooterComp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <NavbarComp></NavbarComp>
      <HeaderComp></HeaderComp>
      <FirstMainComp></FirstMainComp>
      <SecondMainComp></SecondMainComp>
      <FormComp></FormComp>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App;
