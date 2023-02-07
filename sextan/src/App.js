import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Connection Tester"/>
      <Exhibit name="Child Components displayed below"/>
      <Exhibit name="This is another exhibit"/>
      <Exhibit name="And another one"/>
    </div>
  );
}


export default App;
