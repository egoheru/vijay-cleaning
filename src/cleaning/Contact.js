import React, { useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import "./Contact.css"
import { db } from "../firebase"
import Cards from './Cards'
import HeaderAir from '../AirCleaning/HeaderAir'
import CleanFooter from './CleanFooter'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

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
      <>
      <Link to="/">
            <div className="head-contact">
               Back Home
            </div>
            </Link>
        <div className="contact-info">
          <h1> <WhatsAppIcon className="whatsapp-icon"/> WhatsApp : 0091 9731330926</h1>
          <h1> <EmailIcon className="email-icon" /> Email: info@tazzercleaners.com</h1>
          <h1> <EmailIcon className="email-icon" /> Email: tazzercleaners@gmail.com</h1>
          
          {/* <h1>55670-76789</h1> */}
        </div>
        <div className="contact-background">
            {/* <Header /> */}
            <HeaderAir />
            {/* <Link to="/">
            <div className="head-contact">
               Back Home
            </div>
            </Link> */}

             {/* <Cards /> */}
             
            <div className="app-contact">
          <form className="form" onSubmit={handleSubmit} >
            <h1>Contact Us</h1>
  
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
          <CleanFooter />
        </div>
        </>
    )
}


export default Contact
