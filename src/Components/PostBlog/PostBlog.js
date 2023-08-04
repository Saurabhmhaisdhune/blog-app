import axios from "axios";
import React, { useState } from "react";
import "./postblog.css";

let initialValue = {
  name: "",
  title: "",
  discription: "",
};
export default function PostBlog() {
  const [hotelData, setHotelData] = useState(initialValue);

  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://booking-app-p324.onrender.com/api/hotels", JSON.stringify(hotelData), {
        headers: {
          "Content-type": "application/json",
        },
      })
      // .then(() =>{props.setShow(false);props.getdata()});
    
  };

  return (
    <>
      <h1 className="headline">Add New Hotel</h1>
      <div className="center-div">
        <div className="add-hotel">
          <input
            type="file"
            onChange={handleChange}
            name="name"
            placeholder="Enter hotel name"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="type"
            placeholder="title"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="city"
            placeholder="discription"
            required
          />

          <button type="button" onClick={handleSubmit} className="add-btn">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}