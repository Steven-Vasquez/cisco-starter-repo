import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import DisplayIP from './DisplayIP';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Connection Tester"/>
      <Exhibit name="Child Components displayed below"/>
      <Exhibit name="This is another exhibit"/>
      <Exhibit name="IP Address v4">
        <DisplayIP ipVersion="ipv4"/>
      </Exhibit>
      <Exhibit name="IP Address v6">
        <DisplayIP ipVersion="ipv6"/>
      </Exhibit>
    </div>
  );
}


export default App;
