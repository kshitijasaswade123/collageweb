import React from "react";
import Card from "./Card";
function Services() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <h1 className=" my-2 text-center text-uppercase ">Services</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card title="Web Devlopment" content="this is Web Devlopment" img="https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg"/>
        </div>
        <div className="col-md-4">
          <Card title="Mobile Devlopment" content= "this is Mobile Devlopment" img="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"/>
        </div>
        <div className="col-md-4">
          <Card  title="Desktop Devlopment" content="this is Desktop Devlopment" img="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    </div>
  );
}

export default Services;
