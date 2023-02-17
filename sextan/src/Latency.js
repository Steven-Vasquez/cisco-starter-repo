import React, { Component } from 'react';
//import { WebSocketClient } from 'websocket';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

class Latency extends Component{
    constructor(props){
        super(props);
        this.state = {latency: 0};
    }

    componentDidMount(){        
        /*
        componentDidMount(){
        
        let endpoint = "ws://localhost:55455";
        const client = new WebSocketClient();

        // Prints the error when the WebSocket client fails to connect
        client.on('connectFailed', function(error) {
            console.log('Connect Error: ' + error.toString());
        });
        
        // What happens when the WebSocket connection is made with the server
        client.on('connect', function(connection) {
            console.log('WebSocket Client Connected');
            connection.on('error', function(error) { // Whenever the websocket conenction receives an error
                console.log("Connection Error: " + error.toString());
            });
            connection.on('close', function() { // When the WebSocket connection closes
                console.log('echo-protocol Connection Closed');
            });
            connection.on('message', function(message) { // Whenever the client receives a WebSocket message from the server
                if (message.type === 'utf8') {
                    console.log("Received: '" + message.utf8Data + "'");
                }
            });
            
            function sendNumber() {
                if (connection.connected) {
                    var number = Math.round(Math.random() * 0xFFFFFF);
                    connection.sendUTF(number.toString());
                    setTimeout(sendNumber, 1000);
                }
            }
            sendNumber();
        });
        */

        let endpoint = "ws://localhost:55455";
        //var W3CWebSocket = require('websocket').w3cwebsocket;
        var client = new W3CWebSocket(endpoint);

        console.log('This happens');
        // Prints the error when the WebSocket client fails to connect
        client.onerror = function() {
            console.log('Connection Error');
        };
        
        // What happens when the WebSocket connection is made with the server
        client.onopen = function() {
            console.log('WebSocket Client Connected');
        
            function sendNumber() {
                if (client.readyState === client.OPEN) {
                    var number = Math.round(Math.random() * 0xFFFFFF);
                    client.send(number.toString());
                    setTimeout(sendNumber, 1000);
                }
            }
            sendNumber();
        };
        
        // When the WebSocket connection is closed
        client.onclose = function() {
            console.log('Client Closed');
        };
        
        // When the client receives a WebSocket message from the server
        client.onmessage = function(e) {
            if (typeof e.data === 'string') {
                let liveTime = Date.now() - e.data;
                this.setState({latency: liveTime});
                console.log("Live ping is: " + liveTime);
            }
        }.bind(this);
    }

    render() {
        return(
            <span>
                {this.state.latency}
            </span>
        )
    }
}

export default Latency;
