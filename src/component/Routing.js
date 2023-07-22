import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './home/Home';
const Routing =()=>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
        </BrowserRouter>
    )
}
export default Routing;