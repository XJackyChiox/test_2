import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

const element = <h1>Hello world!</h1>;
ReactDom.render(<Counters />, document.getElementById('root'));