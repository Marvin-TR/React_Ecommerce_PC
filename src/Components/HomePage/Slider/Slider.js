import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'


const Slider = () => (
    <section className="slider">
        <div className="sliderdiv">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./Images/Gamer1.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./Images/Gamer2.jpeg"
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./Images/Gamer3.jpeg"
                alt="Third slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        </section>
);

export default Slider;