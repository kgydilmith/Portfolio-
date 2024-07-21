import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "631963f3-8421-4625-aa21-75033be2ebda");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>lets talk</h1>
          <p>
          I’m here to help with all your web design, content writing, and digital marketing needs. If you have any questions or would like to discuss how we can work together, please feel free to get in touch. You can contact me via email,telephone
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>dilmithyesitha@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" />
              
              <p>0719218717</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" />
              <p>sabaragamuwa university of sri lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">your name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label htmlFor="">your email</label>
          <input type="text" placeholder="enter your email" name="email" />
          <label htmlFor="">write your message here</label>
          <textarea name="message" rows="4" placeholder="enter your massage" />
          <button  type='submit' className="contact-submit"> submite now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
