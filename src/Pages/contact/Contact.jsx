import React, { useState } from "react";
import "./contact.css";
import { AiFillPhone } from "react-icons/ai";
import axios from "axios";

const Contact = () => {
  const userDetails = {
    name: "",
    email: "",
    mobile: "",
    query: "",
  };
  const [details, setDetails] = useState(userDetails);

  const getDetails = async () => {
    try {
      const response = await axios.post(
        "https://helpful-gray-rooster.cyclic.app/contactsdetails",
        details
      );
      console.log(response.data);
      alert("Thankyou! Query submit");
      setDetails("");
    } catch (error) {
      console.log(error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // console.log(details);

  return (
    <div className="contact_Container">
      <div className="contact-form">
        <div style={{ textAlign: "left", marginLeft: "10px" }}>
          <h1>
            Contact Us <AiFillPhone />
          </h1>{" "}
        </div>
        <form onSubmit={getDetails}>
          <label>Name-</label> <br />
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
          <br />
          <label>Email-</label> <br />
          <input
            type="email"
            placeholder="Enter your Email here"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
          <br />
          <label>Mobile-</label> <br />
          <input
            type="text"
            placeholder="Enter your Mobile"
            name="mobile"
            value={details.mobile}
            onChange={handleChange}
          />
          <br />
          <label>Query-</label> <br />
          <textarea
            placeholder="Type your Query"
            name="query"
            value={details.query}
            onChange={handleChange}></textarea>
          <br />
          <div>
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="image_container">
        <img
          src="https://img.freepik.com/premium-photo/words-with-contact-us-business-concept-idea_352439-357.jpg?w=740"
          alt="image_icon"
        />
      </div>
    </div>
  );
};

export default Contact;
