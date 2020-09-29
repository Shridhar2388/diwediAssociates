import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import slideOne from '../../slide1.jpg';
import slideTwo from '../../slide2.jpg';
import slideThree from '../../slide3.png';
import slideFour from '../../slide4.png';
import slideFive from '../../slide5.jpg';
import slideSix from '../../slide6.jpg';

export const Slider = () => {
    return (
        <div className="container">
            <div className="row p-2">
                <div className="col-12">
                    <Carousel>
                        <Carousel.Item>
                            <Image src={slideOne} width="800" height="400" rounded className="d-block w-100" />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={slideTwo} width="800" height="400" rounded className="d-block w-100" />
{/* 
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={slideThree} width="800" height="400" rounded className="d-block w-100" />

                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>

                        <Carousel.Item>
                            <Image src={slideFour} width="800" height="400" rounded className="d-block w-100" />
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={slideFive} width="800" height="400" rounded className="d-block w-100" />

                            {/* <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={slideSix} width="800" height="400" rounded className="d-block w-100" />

                            {/* <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div >

    )
}