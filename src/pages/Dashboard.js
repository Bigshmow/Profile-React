import React from 'react';
// import { Contact } from './Contact';
import { Container, Row, Col } from 'reactstrap';
import { Highlights } from '../components/Highlights';
import { Portfolio } from './Portfolio';
import '../styles.css';

export const Dashboard = props => {

  return (

    <div>
      <Container>
        <Row className="main" id='Profile'>
          <Col xs='12' md='3' className='profile'>
              <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img className="img-fluid z-depth-2 rounded-circle profile" src="https://profile-dms-pictures.s3.amazonaws.com/Profile_Picture.JPG" alt="First slide"/>
                </div>
                <div className="carousel-item active">
                  <img className="img-fluid z-depth-2 rounded-circle profile" src="https://profile-dms-pictures.s3.amazonaws.com/slotcanyon_UT_sq.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="img-fluid z-depth-2 rounded-circle profile" src="https://scontent.fsan1-1.fna.fbcdn.net/v/t1.0-9/35552183_905706676656_4769851135450152960_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=C2KS-ogdd_4AX-sAZcT&_nc_ht=scontent.fsan1-1.fna&oh=d5ba354d38fefdb6ce2190d8ad15e3fb&oe=5F8B6390" alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
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
  