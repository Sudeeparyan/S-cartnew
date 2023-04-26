import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Categories from '../../components/Categories/Categories'
import Announcement from '../../components/Announcement/Announcement'
import './product.css'
import fig1 from './1.png'
function Product() {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Categories/>
            
            <div className="style">  
            <img src={fig1} height="50%" width="50%"></img>              
                
                <container className="dis">
                                    <h1>Asus ZenBook Duo UX481FL-B7611T Ultrabook (Core I7 10th Gen/16 GB/1 TB SSD/Windows 10/2 GB)</h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                                tristique tortor pretium ut. Curabitur elit justo, consequat id
                                condimentum ac, volutpat ornare.
                                <h2>Price: 99,990 Rs</h2>
                            <div className="btn btn-warning" >
                                        ADD TO CART 
                            </div>
                            <div className="btn btn-danger" >
                                        BUY
                            </div>
                </container>
                </div>
                

                
                    
                
            
            
        </div>
    )
    
}

export default Product

