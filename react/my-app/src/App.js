import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Theme from "./Theme";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
        {/*<Theme/>*/}
    </div>
  );
}

export default App;
