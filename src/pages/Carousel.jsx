import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"
const Carouselhome = () => {
  return (
    <div>
      <Carousel controls={false} >
     
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://clipart-library.com/2023/kids-learn-cooking-mom-teaches-children-bake-holiday-cookies-family-joint-preparation-process-teacher-chef-with-students-boys-girls-making-desserts-together-culinary-courses-vector-concept_533410-1256.jpg"
            alt="First slide"
            height="530px"
          />
           <Carousel.Caption>
          <h1 className="title">Looking for a best Cook?</h1>
        
        </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://content.jdmagicbox.com/comp/delhi/p7/011pxx11.xx11.220531192427.x1p7/catalogue/sr-service-sultanpuri-delhi-sofa-cleaning-services-04nhk8s250.jpg?clr="
            alt="Second slide"
            height="530px"
          /> 

          <Carousel.Caption>
            <h1 className="title">Waiting for a maid to do your tasks</h1>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
           <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1283683027/photo/party-concept-balloons-in-living-room.jpg?s=612x612&w=0&k=20&c=kXT-ZwvgX9U_IHAkz9jhaBVAxg8Tha1xxyM0o-_F3sw="
            alt="Third slide"
            height="530px"
          /> 

          <Carousel.Caption>
            <h1 className="title">Want Party Decor by professionals</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
           <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1129117264/photo/learning-from-the-best-two-men-technician-sitting-near-dishwasher.jpg?s=2048x2048&w=is&k=20&c=mIyPWa6EbWidqo3YEeyFJg1kR4_t0-aDcBJfanGqwB4="
            alt="Fourth slide"
            height="530px"
          /> 

          <Carousel.Caption>
            <h1 className="title">Homeneeds</h1>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselhome;