import React from 'react'
import nav_logo from './S-cart_logo.png'
import './navbar.css'
import {
  BrowserRouter,
  Switch ,
  Route,
  Link
} from "react-router-dom"

function NavBar() {
    return (        
        <div>
            <div className="navbar navbar-inverse">
                <div className="navbar-header container-fluid navbar-scart">
                            <a className="navbar-brand" href="#" ></a>
                            <img src={nav_logo} alt="S-cart_logo" height="50px" width="150px"/>
                            <ul className="nav navbar-nav">
                            <li className="active"><Link to='/'>Home</Link></li>
                            </ul>
                            <input list="data" name="browser" id="browser" placeholder=  "Search here"/>
                            <datalist id="data">
                              <option value="Laptops"/>
                              <option value="Fashion"/>
                              <option value="electronics"/>
                              <option value="groceries"/>
                              <option value="footware"/>
                            </datalist>
                            
                            <div className="btn btn-primary">
                            <Link to='/login'>Login</Link>
                            </div>
                            <div className="btn btn-success" >
                            <Link to='/register'>REGISTER</Link>
                            </div>
                            <div className="btn btn-warning" >                              
                            <i className="uil uil-shopping-cart"></i>
                            <Link to='/cart'>Cart</Link>
                            </div>          
                </div>
            </div>
        </div>
    )
}

export default NavBar
