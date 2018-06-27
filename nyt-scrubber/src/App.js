import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import FormSearch from "./components/FormSearch";
import Results from "./components/Results";
import Articles from "./components/Articles";

const App = () => (
  <Router>
    <div>
      
      <Jumbotron />
      <Wrapper>
      <FormSearch />
      <Results />
      <Articles />
      </Wrapper>
      <Footer />

    </div>
  </Router>
);

export default App;