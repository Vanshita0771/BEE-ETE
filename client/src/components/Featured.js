import React from "react";
import "./Featured.css";

function Featured(){
    return(
        <>
        <h1 className="header">Top featured Listings</h1>
        <div className="grid-container">
          <div className="item1"><img src="../assests/House3.jpg"/></div>
          <div className="item2"><img src="../assests/Bed3.jpg"/></div>
          <div className="item3"><img src="../assests/Dining1.jpg"/></div>
          <div className="item4"><img src="../assests/Bed2.jpg"/></div>
          </div>

           <div>
           <h2>123 Acme St.Dallas</h2>
           <h3>House for sale  $2,349,000</h3>
            <table>
             <tr>
              <td>Bedrooms</td>
              <td>4</td>
              <td>Square feet</td>
              <td>7,812</td>
              </tr>
              <tr>
              <td>Bathrooms</td>
              <td>3</td>
              <td>Est Payment</td>
              <td>$12,345/mo</td>
              </tr>
              
            </table>
            </div>
            <br/><br/>
           


<div className="grid-container">
          <div className="item1"><img src="../assests/House2.jpg"/></div>
          <div className="item2"><img src="../assests/Bed3.jpg"/></div>
          <div className="item3"><img src="../assests/Dining3.jpg"/></div>
          <div className="item4"><img src="../assests/Bed4.jpg"/></div>
          </div >
          <div>
          <h2>89 Fresno,California</h2>
           <h3>House for sale  $4,349,000</h3>
            <table>
             <tr>
              <td>Bedrooms</td>
              <td>6</td>
              <td>Square feet</td>
              <td>12,812</td>
              </tr>
              <tr>
              <td>Bathrooms</td>
              <td>4</td>
              <td>Est Payment</td>
              <td>$23,345/mo</td>
              </tr>
              
            </table>
            </div>
            <br/><br/>
           
</>
    );
}
export default Featured;