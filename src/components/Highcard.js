import React, { Fragment } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import '../styles.css';

export const Highcard = props => (
    <Fragment>
        <Card className='d-flex highCard'>
            <Row>
                <Col xs='12' className='text-center'>
                    <CardBody>
                        <CardTitle>
                            <h2>
                                <CardLink className='cardLink' href={props.link}>{props.header}</CardLink>
                            </h2>
                        </CardTitle>
                    </CardBody>
                </Col>
                <Col xs='12' className='text-center'>
                    <a href={props.link}> <img className='highImg' src={props.src} alt='Project'></img></a>
                </Col>
                <Col xs='12' className='text-center'>
                    <CardBody>
                        <CardText><p>{props.desc}</p></CardText>
                        <CardLink className='cardLink' href={props.git}><h4>Git it <i className="fa fa-github"></i></h4></CardLink>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    </Fragment>
);