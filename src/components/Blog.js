import React from "react";
import medium from "../assets/medium.png";

const Blog = () => {
  return (
    <div className="blog">
      <p>
        I also blog on
        <a href="https://medium.com/@lucas.eckman">
          <img src={medium} alt="" />
        </a>
        .
      </p>
    </div>
  );
};

export default Blog;
