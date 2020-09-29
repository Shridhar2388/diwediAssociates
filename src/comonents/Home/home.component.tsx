import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Header } from '../common/Header';
import { Slider } from '../common/Carousels';

export const Home = () => {
    const [count, setCount] = useState(0);
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
                                    {/* <div className="mb-2 border-bottom text-center">
                                        <h3>About Us</h3>
                                    </div> */}

                                    
                                    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                                        <strong>Kapoor Associates & Solicitors</strong> is a Law Firm dedicated to provide Legal Services and serve domestic and international clients, which include Individual, Multinational, Public and Private Companies and other corporate entities, across the country. Our Firm is an association consists of very senior advocate and attorneys from all over India. Firm has pursued civil, Company matter, Consumer-forum and Property matter. We possess a dedicated team of professionals including lawyers, company secretaries, chartered accountants, Trade Mark Attorneys etc. with the specific industry expertise.
                                    </p>
                                    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                                        <strong> Kapoor Associates & Solicitors</strong> firm believes that in the context of the present world economic order, the legal profession plays a valuable and constructive role than ever before. The changes in the economic climate in the world especially in India have brought about a change in the traditional role of the lawyer. Today, the role of lawyers is not limited to defending the rights of their clients but to also ensure that litigation is minimized. Today, there are more lawyers engaged in international business and finance procedures than ever before.
                                    </p>
                                    <h4 style={{ color: "#3b83b7" }}>LEGAL ADVISER & CONSULTANT OF...</h4>
                                    <Row>
                                        <Col>
                                            <ul>
                                                <li>Reliance Group of Companies</li>
                                                <li>HDFC BANK LTD</li>
                                                <li>ING VYSYA BANK</li>
                                                <li>AXIS BANK [UTI BANK]</li>
                                                <li>Havell's Group of Companies</li>
                                                <li>Kanpur Edible Oils</li>
                                                <li>Kanpur Extractions Pvt. Ltd.</li>
                                                <li>Mayur Infrastructures Pvt. Ltd.</li>
                                                <li>Unnao Distillery Pvt. Ltd.</li>

                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li>Garg India Ltd.</li>
                                                <li>Indo-Proshya Pvt. Ltd.</li>
                                                <li>Bansury Poly Pack Pvt. Ltd.</li>
                                                <li>Mehrotra Agencies Pvt. Ltd.</li>
                                                <li>Annapurna Baked Biscuits Pvt. Ltd.</li>
                                                <li>K.N Bakers Pvt. Ltd.</li>
                                                <li>Anand Bourses Ltd.</li>
                                                <li>Triveni Solvex Pvt. Ltd.</li>
                                                <li>Various other Public and Private Companies</li>
                                            </ul>
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