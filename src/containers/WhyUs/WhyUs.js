import React from "react";
import "./WhyUs.css";
import img1 from "../../assets/dezy-image1.jpg";
import img4 from "../../assets/dezy-image4.png";
import img5 from "../../assets/dezy-image5.png";

const WhyUs = () => {
  return (
    <div>
      <div className="heading-whyus">
        <h1>Why Dezy It?</h1>
      </div>

      <div id="whyus">
        <div className="text-whyus">
          <h1>Collaboration</h1>
          <hr className="hrule" />
          <h6>
            The product development journey can become a linear process where
            there is very minimal interaction between the product team and all
            the other stakeholders, including the marketers, the sales team and
            customer service. Dezy It, brings in a collaborative space for your
            team to leverage design thinking and work together and participate
            in the ideation process, sharing valuable insights which would shape
            the product and its features. It's a process which truly gets your
            whole team invested!
          </h6>
        </div>
        <div>
          <img src={img1} alt="img1" height="400px" />
        </div>
      </div>

      <div id="whyus">
        <div>
          <img src={img4} alt="img4" height="400px" />
        </div>
        <div className="text-whyus">
          <h1>Creativity</h1>
          <hr className="hrule" />
          <h6>
            Design Sprints are a great way to quickly innovate. A structured
            agile process to streamline your innovation and come up with
            multiple creative ideas using the Crazy-8 framework. It boosts your
            morale and provokes you to think out of the box. Now, with a ton of
            ideas, the Impact vs Feasibility analysis is a simple yet effective
            criteria, to shortlist the winning ides and most importantly
            validate them with real users.
          </h6>
        </div>
      </div>
      <div id="whyus">
        <div className="text-whyus">
          <h1>Empathy</h1>
          <hr className="hrule" />
          <h6>
            The first rule of design thinking is to keep your users in the
            centre and under a spotlight. All great ideas arrive from
            devastating problems. The design sprint focuses on getting each and
            every team member to be able to empathise and understand the user,
            map their journeys and identify their pain points. You have to truly
            step into the shoes of your users to understand their psychology and
            experience of what they feel and think; while using your product or
            service.
          </h6>
        </div>
        <div>
          <img src={img5} alt="img5" height="300px" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
