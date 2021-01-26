import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../../HomePage/HomePage'
import ProductPage from '../../ProductsPage/ProductPage'
import ContactPage from '../../ContactPage/ContacPage'

const NavBar = () => {

    const [hidden, setHidden] = useState(false);

    const toggleButton = () =>{
        if(!hidden){
            setHidden(true);
        } else{
            setHidden(false)
        }
    }

    return(
        <Router>
            <div>
                <nav>
                <a id="logoAnchor"><div id="pcLogo"><Link to="/"><p>PC</p></Link></div></a>
                <label className="burger" htmlFor="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" name="toggle" onClick={toggleButton} />
                    <ul className={hidden ? 'navbar' : 'links'}>
                        
                        <li className="navLink">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="navLink">
                            <Link to='/products'>Products</Link>
                        </li>
                        <li className="navLink">
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/products">
                        <ProductPage />
                    </Route>
                    <Route exact path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

export default NavBar