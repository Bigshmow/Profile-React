import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import '../styles.css';

export const Contactcard = props => (
    <Fragment>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col xs='12' sm='12' className=''>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend"><span className="input-group-text"><i
                                    className="fa fa-user"></i></span></div>
                        <input type="text" className="form-control" placeholder="First and Last Name"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend"><span className="input-group-text"><i
                                    className="fa fa-envelope"></i></span></div>
                        <input type="text" className="form-control" placeholder="email@example.com"></input>
                    </div>
                    <p>Leave a message below:</p>
                    <textarea className="form-control" id="bigText" rows="5"></textarea>
                    <button type="submit" className="btn submit">Submit</button>
                    <p>Feel free to reach out via email directly: devinstewart88@gmail.com</p>
                    <p>Or give me a call: 7607160327</p>
                </Col>
            </Row>
    </Fragment>
);