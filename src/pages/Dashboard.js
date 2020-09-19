import React from 'react';
// import { Contact } from './Contact';
import { Container, Row, Col } from 'reactstrap';
import { Highlights } from '../components/Highlights';
import { Portfolio } from './Portfolio';
import '../styles.css';
import { ProfileCarousel } from '../components/ProfileCarousel';

export const Dashboard = props => {

  return (

    <div>
      <Container>
        <Row className="main" id='Profile'>
          <Col xs='12' md='3' className='profile'>
              <ProfileCarousel />
          </Col>
          <Col xs='12' md='9' className='hello'>
            <div className='text-right '>
              <h1>Hello!</h1>
              <p>You've reached the portfolio page for Devin Stewart.</p>
              <p>MERN stack developer.</p>
              <i>(part-time mountainbiker and car enthusiast)</i>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row className="main2" id='Highlights'>
          <Highlights />
        </Row>
        <br></br>
        <Row className="main2" id='Skills'>
          <Portfolio className=""/>
        </Row>            
        {/* <Row className="main2" id='Contact'>
          <Col xs='12' md='12' className=''>
            <Contact />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
  }
  