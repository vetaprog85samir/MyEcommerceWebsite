import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Single Blog Name"} />
      <BreadCrumb title="Dynamic Single Blog Name"></BreadCrumb>
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <AiOutlineArrowLeft className="fs-4" />
                Go Back To Blogs
              </Link>
              <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                quam dolorem illo praesentium reiciendis quis eos, doloremque
                possimus atque assumenda beatae minus ad quidem in maxime nam
                iure veritatis hic.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
