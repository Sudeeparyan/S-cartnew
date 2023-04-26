// import Home from './pages/Home/Home';

// const App = () => {
//     return <Home />;    
// };

// export default App;



import React from 'react'
import {
        BrowserRouter,
        Switch ,
        Route,
        // Link
} from "react-router-dom"
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'  
import Login from './pages/Login/Login'
import ProductList from './pages/ProductList/ProductList'

function App() {
    return (
        
        <div>
        <>
         <BrowserRouter>
             <Switch>
                 <Route exact path="/"component={Home}></Route>
                 <Route path="/product" component={Product}></Route>
                 <Route path="/login" component={Login}></Route>
                  <Route path="/productlist"component={ProductList}></Route> 
             </Switch>
         </BrowserRouter>
        </>
        </div>
    )
}

export default App
