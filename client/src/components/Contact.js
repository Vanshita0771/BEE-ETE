import React, {  useState, useEffect } from "react";
import './Contact.css';
function Contact() {
 
    const [formvalue, setFormvalue]= useState({ name:'',email:'',Query:''});
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit]= useState(false);
 
    const handlevalidation =(e)=>{
        const {name, value}= e.target;
        setFormvalue({...formvalue, [name]: value});
    }
    const handlesubmit= (e)=>{
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    } 
    const validationform = (value)=>{
        const errors= {};
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
        if(!value.name){
            errors.name="Please Enter Name";
        }
 
        if(!value.email){
            errors.email="Please Enter Email";
        } else if(!emailPattern.test(value.email))
        {
            errors.email="Enter Valid Email";
        }
        if(!value.Query){
            errors.Query="Please Enter Query";
        }
        return errors;
    }
 
    useEffect( ()=>{
        if(Object.keys(formerror).length===0 && issubmit)
        {
            console.log(formvalue);
            alert("Your query has been submitted");

        }
    },[formerror, issubmit]);
     
 return (
       <>
       <h2>Contact-form</h2>
        <div className="container" id="contact-form">
            
        <div className="row mb-5">
               
                <p className="fw-bold "> If you have any query,then feel free to ask.Our team will
                resolve your query within few hours</p>
            <br/>
            <br/>
 
            <form onSubmit={ handlesubmit} >
 
                <div className="container row mb-4">
                    <label className="col-sm-2 col-form-label">Name<span className="astriccolor">*</span></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" name="name" value={ formvalue.name}  onChange={ handlevalidation} />
                    <span className="text-danger">{ formerror.name } </span>
                    </div>
                </div>
 
                <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Email<span className="astriccolor">*</span></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" name="email" value={formvalue.email} onChange={ handlevalidation}   />
                    <span className="text-danger">{ formerror.email}  </span>
                    </div>
                </div>
 
                <div className="row mb-4">
                    <label className="col-sm-2 col-form-label">Query<span className="astriccolor">*</span></label>
                    <div className="col-sm-8">
                    <textarea  className="form-control" name="Query" value={formvalue.Query} onChange={ handlevalidation}   />
                    <span className="text-danger">{ formerror.Query}  </span>
                    </div>
                </div>
 
                <div className="row mb-4">
                    <label className="col-sm-5 col-form-label"></label>
                    <div className="col-sm-2">
                    
                    <button className="btn btn-success" name="button" type="submit">Submit</button>
                </div>
                </div>
                </form>
            </div>
        </div>
        </>
  );
}
 
export default Contact;
