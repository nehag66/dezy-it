import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import blogImg1 from "../../assets/blog-img1.png";
import blogImg2 from "../../assets/blog-img2.png";
import blogImg3 from "../../assets/blog-img3.png";

import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="heading-blog">
        <h1>Our Blog</h1>
      </div>
      <div id="blogs">
        <Card>
          <CardImg top width="100%" src={blogImg1} alt="Card image cap" />
          <CardBody>
            <br />
            <CardTitle tag="h6">Jun 18 . 3 min</CardTitle>
            <br />
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              How to go from idea to product using Design Sprints
            </CardSubtitle>
            <CardText>
              Such product-related challenges can be hard, but they aren’t
              impossible to deal with. And to face these...
            </CardText>
          </CardBody>
        </Card>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card>
          <CardImg top width="100%" src={blogImg2} alt="Card image cap" />
          <CardBody>
            <br />
            <CardTitle tag="h6">Jun 13 . 4 min</CardTitle>
            <br />
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Productivity hacks for Work From Home
            </CardSubtitle>
            <CardText>
              Working from home can be challenging, especially for individuals
              and teams who aren't used to working in...
            </CardText>
          </CardBody>
        </Card>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Card>
          <CardImg top width="100%" src={blogImg3} alt="Card image cap" />
          <CardBody>
            <br />
            <CardTitle tag="h6">May 29 . 2 min</CardTitle>
            <br />
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Work From Home: Design Edition
            </CardSubtitle>
            <CardText>
              The Covid pandemic has hit the world hard, leading to some major
              transofrmations in traditional business...
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Blogs;
