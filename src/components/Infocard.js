import React, { Fragment } from 'react';
import { Card } from 'reactstrap';
import s from '../styles/app.style';

export const Infocard = props => (
  <div style={s.dashboard}>
    <Card>
        {props.children}
    </Card>
  </div>
    )
;
