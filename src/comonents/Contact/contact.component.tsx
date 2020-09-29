import React from 'react';
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap';
import contact from '../../contact-us.png';
import { Header } from '../common/Header';
import { Slider } from '../common/Carousels';
export const Contact = () => {
    // const [count, setCount] = useState(0);
    return (
        <>
            <Header />
            <br />
            <Slider />
            <div className="main-content">
                <div className="container">
                    <div className="row p-2">
                        <div className="col-12">
                            <Card className="shadow-sm" style={{ backgroundColor: 'whitesmoke' }}>
                                <Card.Body>
                                    <div className="mb-2 border-bottom text-center">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <Row className="justify-content-sm-center">
                                        <Col sm={3}>
                                            <Image src={contact} width="228"  rounded />
                                        </Col>
                                        <Col sm={5}>
                                            <Form>
                                                <Form.Group controlId="formBasicName">
                                                    <Form.Label style={{ color: "#303333", fontWeight: "bold" }}>Full name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter full name" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label style={{ color: "#303333", fontWeight: "bold" }}>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                    <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicMobile">
                                                    <Form.Label style={{ color: "#303333", fontWeight: "bold" }}>Mobile</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter mobile No." />
                                                    <Form.Text className="text-muted">
                                                        We'll never share your mobile No. with anyone else.
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group controlId="formBasicMessage">
                                                    <Form.Label style={{ color: "#303333", fontWeight: "bold" }}>Message</Form.Label>
                                                    <Form.Control as="textarea" rows={3} placeholder="Enter message" />
                                                </Form.Group>

                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Col>
                                        <Col sm={2}>
                                            <Row>
                                                <Col>
                                                    <h4 style={{ color: "#3b83b7" }}>Address:</h4>
                                                    <p>15/198, Vikrmjeet Singh Marg, Civil Lines, Kanpur-208001, Court Compound Kanpur</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <h4 style={{ color: "#3b83b7" }}>Contact Numbers:</h4>
                                                    <p>+91-512-2561839</p>
                                                    <p>+91-9839036847</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <h4 style={{ color: "#3b83b7" }}>Email:</h4>
                                                    <p>devendradwivedi.in@gmail.com</p>                                                    
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}