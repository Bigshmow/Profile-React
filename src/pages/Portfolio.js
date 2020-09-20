import React from 'react';
import { Card, Col } from 'reactstrap';
// import { Projectcard } from '../components/Projectcard';

export const Portfolio = (props) => { 
  
  // const Projects = require('./Projects.json')

  // const [random, setRandom] = useState(10);

  // const randNorepeat = () => {
  //   let newNum = (Math.floor(Math.random() * Projects.length))
  //   if (newNum !== random) {
  //     setRandom (newNum)
  //   } else {
  //     setRandom ((Math.floor(Math.random() * Projects.length)))
  //   }
  // }
      return (
      
      <>
        <Col xs='12' md='7' className='project'>
          <Card>
            <div className="card-header text-center">More Coming Soon</div>
          </Card>
        {/* <Projectcard
        className=""
        src = {Projects[random].src}
        header = {Projects[random].header}
        link = {Projects[random].link}
        git = {Projects[random].git}
        desc = {Projects[random].desc}
        >
        </Projectcard>
          <button onClick={randNorepeat}>
            Feeling lucky???  (Click for a random project.)
          </button> */}
        </Col>
      </>
        )
      };
        // } 