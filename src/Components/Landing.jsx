import React from 'react'
import './Landing.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselImage1 from './CarouselImage1';
import CarouselImage2 from './CarouselImage2';
import CarouselImage3 from './CarouselImage2';
import CarouselImage4 from './CarouselImage2';
import CarouselImage5 from './CarouselImage2';
import Event1 from "../assets/college cultural event.jpg";
import Event2 from "../assets/dj night.jpeg";
import Event3 from "../assets/AI workshop.jpg";
import Event4 from "../assets/Hackathon.jpg";
import Event5 from "../assets/Seminar.jpg";

function Landing() {
  return (
    <div className="home-page">
        <Carousel fade>
          <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={Event1}
            alt="First slide"
          /> */}
          <CarouselImage1 text="First Slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src={Event2}
              alt="First slide"
            /> */}
            <CarouselImage2 text="Second Slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src={Event3}
              alt="First slide"
            /> */}
            <CarouselImage3 text="Third Slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src={Event4}
              alt="First slide"
            /> */}
            <CarouselImage4 text="Fourth Slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <img
              className="d-block w-100"
              src={Event5}
              alt="First slide"
            /> */}
            <CarouselImage5 text="Fifth Slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
  )
}

export default Landing