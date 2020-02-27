import React, { Fragment } from 'react';
import { Card, Row, Col } from 'reactstrap';
import '../styles.css';

export const Projectcard = props => (
    <Fragment>
        <Card className='d-flex'>
            <Row>
                <Col xs='12' sm='6' className=''>
                    <img className='projectImg' src={props.src} alt='Project'></img>
                </Col>
                <Col xs='12' sm='6' className='text-center'>
                    <h1>{props.header}</h1>
                    <h2><a href={props.link}>Visit the project</a></h2>
                    <h2><a href={props.git}>See the Git</a></h2>
                    <p>{props.desc}</p>
                </Col>
            </Row>
        </Card>
    </Fragment>
);