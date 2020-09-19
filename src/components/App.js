import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Dashboard } from '../pages/Dashboard';
import { Portfolio } from '../pages/Portfolio';
import { Resume } from '../pages/Resume';
import PageNotFound from '../pages/PageNotFound';
import { Sidebar } from './Sidebar';
import { Topnav } from './Topnav';
import s from '../styles/app.style';
import '../styles.css';
import { ProfileIntro } from './ProfileIntro';


export default function App() {
  return (
    <>
      <ProfileIntro>
        <Topnav />
        <div className='slide' style={s.slide}>
        <Sidebar />
          <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/works" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route component={PageNotFound} />
          </Switch>
        </div>
      </ProfileIntro>
    </>
  );
}
