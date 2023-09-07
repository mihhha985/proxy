import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/Main';
import Form from './pages/Form';
import Footer from './component/footer/footer';
import Header from './component/header/Header';
import Main from './component/main/Main';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <footer style={{position:"relative"}}>
        <Footer />
        <div className='footer__blur left'></div>
        <div className='footer__blur right'></div>
      </footer>
    </div>
    
  );
}

export default App;
