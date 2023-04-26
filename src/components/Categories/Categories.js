import React from 'react'
import {Link} from 'react-router-dom'

const Categories=(props)=> {
    return (
      
        <React.Fragment>
            {/* <div class="collapse navbar-collapse" id="menu1" >
                      <ul class="nav navbar-nav"> */}
                    <div className="collapse navbar-collapse" id="menu1" >
                      <ul className="nav navbar-nav">
                        
                        <li><Link to="/BestSellers">Best Sellers</Link></li>
                        <li><Link to="/S-CartPay">S-Cart Pay</Link></li>
                        <li><Link to="/RoboElements">Robo Elements</Link></li>
                        <li><Link to="/Mobiles">Mobiles</Link></li>
                        <li><Link to="/Groceries">Groceries</Link></li>
                        <li><Link to="/Fashion">Fashion</Link></li>
                        <li><Link to="/Electronics">Electronics</Link></li>
                        <li><Link to="/ComputerAccresseries">Computer Accresseries</Link></li>
                        <li><Link to="/Kitchen,Toys,Games">Kitchen,Toys,Games</Link></li>
                        <li><Link to="/Subscrption">Subscrption</Link></li>
                        <li><Link to="/New Releases">New Releases</Link></li>
                        <li><Link to="/CustomerSerice">Customer Serice</Link></li>
                      </ul>
                    </div>
        </React.Fragment>
    )
}

export default Categories
