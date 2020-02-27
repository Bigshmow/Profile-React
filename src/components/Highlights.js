import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import { Highcard } from './Highcard';
import '../styles.css';

const Projects = require('../pages/Projects.json')

const highArr = [7,13,14]

export const Highlights = props => {

    return (
        <Fragment>
            {highArr.map( (num) => {
                return (
                    <Col xs='12' md ='4'>
                        <Highcard
                        src = {Projects[num].src}
                        header = {Projects[num].header}
                        link = {Projects[num].link}
                        git = {Projects[num].git}
                        desc = {Projects[num].desc}
                        />
                    </Col>
                )
            })}
        </Fragment>
    )
}