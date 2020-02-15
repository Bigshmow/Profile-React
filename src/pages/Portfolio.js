import React, { useState, Fragment } from 'react';
import { Projectcard } from '../components/Projectcard';

export const Portfolio = (props) => { 
  
  const Projects = require('./Projects.json')

  const [random, setRandom] = useState(7);

  const randNorepeat = () => {
    let newNum = (Math.floor(Math.random() * Projects.length))
    if (newNum !== random) {
      setRandom (newNum)
    } else {
      setRandom ((Math.floor(Math.random() * Projects.length)))
    }
  }
      
      return (
      
      <Fragment>
        <Projectcard
        src = {Projects[random].src}
        header = {Projects[random].header}
        link = {Projects[random].link}
        git = {Projects[random].git}
        desc = {Projects[random].desc}
        >
        </Projectcard>
          <button onClick={randNorepeat}>
            Find another project
          </button>
      </Fragment>
        )
      };
        // } 