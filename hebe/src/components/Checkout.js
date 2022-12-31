import React from 'react';
import "./Checkout.css";
import {Button, Form } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

function Checkout(){
    return (
        <Container>
            <Row>
                <Col className='border' lg={7} md={6} sm={12}>
                <h2>Hebe Designer Boutique</h2>
                <p>Cart &#62; Information &#62; Shipping &#62; Payment</p>
                <p>Express Checkout</p>
                <Row>
                    <Col lg={4} sm={12}>
                        <Button className='btn'>Shop Pay</Button>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Button lassName='btn'>Pay pal</Button>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Button lassName='btn'>G Pay</Button>
                    </Col>
                </Row>
                <hr/>
                <h5>Contact Information</h5>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email or mobile phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Email me with news and offers" />
                </Form.Group>
                <h5>Delivery Method</h5>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                    Ship
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                    Pick Up
                </label>
                </div>                
                <h5>Shipping Address</h5>
                <Form>
                <Form.Select aria-label="Default select example">
                    <option>Country</option>
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                    <option value="france">France</option>
                    <option value="russia">Russia</option>
                </Form.Select>
                <br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Company (optional)" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Row>
                        <Col lg={6} sm={6}>
                        <p>&#60; Return to cart</p>
                        </Col>
                        <Col lg={6} sm={6}>
                        <Button variant="dark" type="submit">
                        Continue to shipping
                        </Button>
                        </Col>
                    </Row>
                    </Form>
                </Col>
                <Col className='border' lg={5} md={6} sm={12}>
                xs=6 md=4 sm=12
                </Col>
                
            </Row>
        </Container>
    )
}
export default Checkout;