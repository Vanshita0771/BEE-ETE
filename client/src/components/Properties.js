import React, { useEffect, useState } from "react";
import AllProperty from './AllProperty.js';
import './Properties.css';
import swal from 'sweetalert';

function Properties(){
    const [items,setItems]=useState(AllProperty);
    const filterItem=(cateItem)=>{
        const updatedItems=AllProperty.filter((curElem)=>{
            return curElem.category==cateItem;
        });
        setItems(updatedItems);
    }
    const filterState=(cateState)=>{
        const updateState=AllProperty.filter((curstate)=>{
              return curstate.state==cateState;
        });
        setItems(updateState);
    }
   
    return(
        <div>
       <h1 className="header">Buy your new House</h1>
       <div className="best">
            <p onClick={()=>{setItems(AllProperty);}} className="tag">All</p>
            <p onClick={()=>filterItem('House')} className="tag">Houses</p>
            <p onClick={()=>filterItem('Apartment')} className="tag">Apartments</p>
            </div> 
            <div className="best">
            <p onClick={()=>filterState('Alaska')} className="tag">Alaska</p>
            <p onClick={()=>filterState('Arizona')} className="tag">Arizona</p>
            <p onClick={()=>filterState('California')} className="tag">California</p>
            <p onClick={()=>filterState('Georgia')} className="tag">Georgia</p>
            </div> 
        {
         items.map((element)=>{
             let {id ,image1,image2,image3,image4,address,category,price,bedrooms,bathrooms,area,estpay} =element;
          return (<>
          <div  className="grid-container">
           <div className="item1"><img src={image1}/></div>
           <div className="item2"><img src={image2}/></div>
           <div className="item3"><img src={image3}/></div>
           <div className="item4"><img src={image4}/></div>
           </div>
          <div>
            <br/>
            <h2>{address}</h2>
            <h3>House for sale  {price}</h3>
            <table>
             <tr>
              <td>Bedrooms</td>
              <td>{bedrooms}</td>
              <td>Square feet</td>
              <td>{area}</td>
              </tr>
              <tr>
              <td>Bathrooms</td>
              <td>{bathrooms}</td>
              <td>Est Payment</td>
              <td>{estpay}</td>
              </tr>
              
            </table>
            <br/>
            <button className="btn buy" onClick={()=>{
              swal({
                title: `Are you sure,do you want to buy ${element.category}?`,
                text: `Location:${element.address}, Price:${element.price}`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Your request has been submitted!", {
                    icon: "success",
                  });
                } else {
                  swal("You cancelled the purchase!");
                }
              });
            }}>Buy now</button>
            <br/><br/>
           </div>
 </>)
         })
        }
        </div>
        
        )
}
export default Properties;