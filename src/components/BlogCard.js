import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1 December, 2022</p>
        <h5 className="title">A Beutiful Sunday Morning</h5>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          iste odit ab fugiat harum. Unde iusto ut, quos facilis, dignissimos
          qui ipsam rerum quaerat mollitia recusandae vitae magni culpa velit?
        </p>
        <Link className="button" to="/blog/:id">
          Read More..
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
