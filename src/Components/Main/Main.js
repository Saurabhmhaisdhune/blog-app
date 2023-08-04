import React from "react";
import "./main.css";

export default function Main() {
  return (
    <div className="main-div">
      <div className="blog-cards">
        <img
          src="https://blog.feedspot.com/wp-content/uploads/2017/03/nature.png"
          alt="blog-imgs"
        />
        <label className="blog-title">
          Human Nature - Conservation International Blog
        </label>
        <label className="blog-discription">
          This blog is written by a diverse group of passionate people who
          believe in CI's mission to safeguard nature's critical services for
          the well-being of all of us. Authors include members of our global
          staff working in more than 25 countries, as well as valued partners
          with whom we team up to guide our efforts and extend our impact.
        </label>
      </div>
      <div className="blog-cards">
        <img
          src="https://d20x1nptavktw0.cloudfront.net/wordpress_media/2022/07/Blog-Image-50.jpg"
          alt="blog-imgs"
        />
        <label className="blog-title">World Nature Conservation Day 2022</label>
        <label className="blog-discription">
          World Nature Conservation Day is observed on 28 July every year. The
          main aim of this day is to spread awareness regarding the protection
          of nature and biodiversity for a healthy environment which is required
          for prospering humankind. It is also marked as the day to create
          positive opinions about climate change.
        </label>
      </div>
    </div>
  );
}
