import React from "react";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeatures from "./pages/KeyFeatures";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact> <Home/></Route> 
          <Route path="/features"> <KeyFeatures/> </Route>
          <Route path="/pricing"> <Pricing/></Route>
          <Route path="/testimonials" ><Testimonials/> </Route>
          <Route path="/demo" ><Demo/> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


