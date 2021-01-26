import { render } from '@testing-library/react';
import React from 'react'
import './App.css';
import NavBar from './Components/Navigation/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import ProductPage from './Components/ProductsPage/ProductPage'


class App extends React.Component {
  state = {
    homePage: true,
    productPage: false,
    contactPage: false 
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <NavBar />
        </header>

        <Footer />
      </div>
  );
}
};

export default App;
