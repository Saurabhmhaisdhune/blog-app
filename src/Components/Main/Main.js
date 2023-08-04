import React from "react";
import "./main.css"

export default function Main() {
  return (
    <div className="main-div">
      <div className="blog-cards">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Xnp5sqAeZx9FlQUlmKKQwXFj977Cx-9TIw&usqp=CAU"
          alt="blog-imgs"
        />
        <label className="blog-title">blog title</label>
        <label className="blog-discription">blog-discription</label>
      </div>
    </div>
  );
}
