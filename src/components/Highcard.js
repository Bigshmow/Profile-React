import React, { Fragment } from 'react';
import { Row, Col, Card, CardText, CardBody, CardLink,
    CardTitle } from 'reactstrap';
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
                <Col xs='12' className='d-flex justify-content-center'>
                <CardLink href={props.link}>
                <Card className='highImg' alt='Project' style={{ backgroundImage: `url(${props.src})`}}>
                     <div className='technologies'>
                        <h1 className="techHead text-center">Technologies: </h1>
                        <p className="techText text-center">{props.tech}</p>
                     </div>
                </Card>
                </CardLink>
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