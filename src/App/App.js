import './App.scss';
import React from 'react';

import Header from './Header/Header'
import Rate from './Rate/Rate'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import Footer from './Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends React.Component {
  render(){
    return (
      <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Rate/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="*" element={'Страница не найдена'} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;