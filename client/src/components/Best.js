import React from "react";
import './Best.css';
import { Link } from 'react-router-dom';
function Best(){
    return(
        <div>
        <h2 className="heading">Find Best Rated Properties</h2>
        <br/>
        <div className="images">
        <img src="assests/Apt1.jpg"/>
        <img src="../assests/Apt2.jpg"/>
        <img src="../assests/Apt3.jpg"/>
        </div>
        <button className="btn view"><Link to='/properties' className="link">View All</Link></button>
        </div>
    );
}
export default Best;