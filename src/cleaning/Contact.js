import React, { useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import "./Contact.css"
import { db } from "../firebase"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const [loader, setLoader] = useState("false")

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoader(true)

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })

        // .then(() => {
        //     alert("Message has been submitted")
        //     setLoader(false)
        // })
        // .catch((error) => {
        //     alert(error.message)
        //     setLoader(false)
        // });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-background">
            {/* <Header /> */}
            <Link to="/">
            <div className="head-contact">
               Back Home
            </div>
            </Link>
            <div className="app-contact">
          <form className="form" onSubmit={handleSubmit} >
            <h1>Contact form</h1>
  
            <label>Name</label>
                <input 
                  required 
                  type="text"
                  placeholder="Enter Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                 />

                <label>Email</label>
                <input 
                  required 
                  type="email"
                  placeholder="Enter Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}  
                  />   

                <label>Message</label>
                <textarea 
                  required 
                  type="text"
                  placeholder="Message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}  ></textarea>

                <button type="submit"  >
                    submit
                </button>
          </form>
          </div>
        </div>
    )
}


export default Contact
