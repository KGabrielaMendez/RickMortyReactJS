import React  from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";
import Header from './components/common/header';
import Footer from './components/common/footer';
//import {Header,Footer} from './components/common';
 


function App () {
    
    return(
    <BrowserRouter>
    <Header/>
    <Routes/>

    <Footer/>
    </BrowserRouter >
    ) 
}

export default App;