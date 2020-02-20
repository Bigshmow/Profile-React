import React from 'react';
import { Contact } from './Contact';
import { Container, Row, Col } from 'reactstrap';
import { Portfolio } from './Portfolio';
import '../styles.css';

export const Dashboard = props => {

  return (

    <div>
      <Container>
        <Row className="main">
          <Col xs='12' md='5' className='profile'>
              <img className='profile' src={require("../assets/circle_profile.png")} alt='Profile' />
          </Col>
          <Col xs='12' md='6' className=''>
            <div className='text-right hiddenMedia'>
              <h1>Hello!</h1>
              <p>You've reached the portfolio page for Devin Stewart.</p>
              <p>MERN stack developer.</p>
              <i>(part-time mountainbiker and avid gamer)</i>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row className="main2" id='Portfolio'>
            <Col xs='12' md='12' className=''>
              <Portfolio />
            </Col>
        </Row>            
        <Row className="main2" id='Contact'>
            <Col xs='12' md='12' className=''>
              <Contact />
            </Col>
        </Row>
      </Container>
    </div>
  );
  }
  