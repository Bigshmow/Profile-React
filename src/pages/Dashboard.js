import React, { useState, useEffect } from 'react';
import { Contact } from './Contact';
import { Container, Row, Col } from 'reactstrap';
import { Portfolio } from './Portfolio';
import { Topnav } from '../components/Topnav';
import '../styles.css';

export const Dashboard = props => {

  let findPortfolio = Topnav();
  console.log(findPortfolio.props.children.props.children[1].props.children[1].props.children.props.children[1].props.children.props.children)

  // const [scrollHere, setScrollHere] = useState(customHook.props.children[1])
  // console.log(scrollHere)

  // let scrollID = "Contact"
  // // customHook.props.children[1];
  
  // const handleScroll = () => {
  //   setScrollHere(scrollID)
  //   const x = document.getElementById(scrollID)
  //   console.log("this is logged across comps: ", scrollID)
  //   x.scrollIntoView();
  // }
  
  // useEffect(
  //   () => {
  //   handleScroll();
  // },[handleScroll])

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
        <Row className="main" id='Portfolio'>
            <Col xs='12' md='12' className=''>
              <Portfolio />
            </Col>
        </Row>            
        <Row className="main" id='Contact'>
            <Col xs='12' md='12' className=''>
              <Contact />
            </Col>
        </Row>
      </Container>
    </div>
  );
  }
  