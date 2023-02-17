import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import DisplayIP from './DisplayIP';
import Latency from './Latency';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Connection Tester"/>
      <Exhibit name="Child Components displayed below"/>
      <Exhibit name="This Exhibit displays latency">
        <Latency/>
      </Exhibit>
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
