import React from 'react'
import './Topcomponents.css'
import fig7 from './7.png'
import fig8 from './8.png'
import fig9 from './9.png'
import fig10 from './10.png'
import fig11 from './11.png'
import fig12 from './12.png'
import {
  BrowserRouter,
  Switch ,
  Route,
  Link
} from "react-router-dom"


function Topcomponents() {
    return (
        <div>
              
              <div className="topcomponents">
                  <div className="top">
                <h2> Top Categories this Week</h2>
                  </div>
             </div>
              <div className="TopCategories">
                    <div className="Topcomponent">
                    <Link to={`/Topcomponent/1`}><img className='Topcomponent' src={fig7} alt="laptop"/></Link>
                    
                    </div>
                    <div className="Topcomponent">
                    <Link to={`/Topcomponent/1`}><img className='Topcomponent' src={fig8} alt="laptop"/></Link>
                  </div>
                  <div className="Topcomponent">
                  <Link to={`/Topcomponent/1`}><img className='Topcomponent' src={fig9} alt="laptop"/></Link>
                  </div>
                  <div className="Topcomponent">
                  <Link to={`/Topcomponent/1`}><img className='Topcomponent' src={fig10} alt="laptop"/></Link>
                  </div>
                  <div className="Topcomponent">
                  <Link to={`/Topcomponent/1`}><img className='Topcomponent' src={fig11} alt="laptop"/></Link>
                  </div>
                  
                  
              </div>
        </div>
    )
}

export default Topcomponents
