import axios from "axios";
import { useState } from "react";
import "./register.css";

let initialValue = {
  username: "",
  email: "",
  phone: "",
  password: "",
};
export default function Register() {
  const [userData, setUserData] = useState(initialValue);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://booking-app-p324.onrender.com/api/auth/register",
        JSON.stringify(userData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setUserData(initialValue));
    alert("Now Login with same Credentials.");
  };

  return (
    <div className="Register">
      <div className="lContainer">
        <p className="head-line">Register</p>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="Enter Username"
          className="lInput"
        />

        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Enter you email"
          className="lInput"
        />

        <input
          type="number"
          onChange={handleChange}
          name="phone"
          placeholder="Enter phone number"
          className="lInput"
        />

        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Enter password"
          className="lInput"
        />
        <button onClick={handleSubmit} className="lButton">
          Register
        </button>
      </div>
    </div>
  );
}
