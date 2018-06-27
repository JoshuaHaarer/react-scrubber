import React from "react";
import "./FormSearch.css";
import Container from "../Container";
import Button from "../Button";

const FormSearch = () => (
    <Container>
    <div className = "box">
    <header>Search</header>
    <p>Topic</p>
    <input className="formControl" type="text" id="topic" placeholder="Topic"/>
    <p>Start Year</p>
    <input className="formControl" type="text" id="start year" placeholder="Start Year"/>
    <p>End Year</p>
    <input className="formControl" type="text" id="end year" placeholder="End Year"/>
    <p></p>
    <Button />
    </div>
    </Container>
);

export default FormSearch;
