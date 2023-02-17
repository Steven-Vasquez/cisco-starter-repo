import React, { Component } from 'react';

class DisplayIP extends Component {
    constructor(props){
        super(props);
        this.state = {ip: ""};
    }
    
    // Gets called after the component has been rendered to the DOM for the first time
    // We only need to use this, not also componentDidUpdate, because IP addresses should be static
    componentDidMount() {
        // Deciding which type of IP version (v4 or v6) to return based on props passed to a DisplayIP component in React
        let endpoint = "https://api.ipify.org";
        if(this.props.ipVersion === "ipv6"){
            endpoint = "https://api64.ipify.org";
        }

        // Using the fetch to make an HTTP request 
        fetch(`${endpoint}?format=json`)
            .then(response => response.json()) // Allows us to convert the response into a JSON object
            .then(data => this.setState({ ip: data.ip})) // Then, we do ( => something) with the data 
    }
    render()  {
        return(
            <span>
                My public IP addres is: {this.state.ip}
            </span>
        )
    }
}

export default DisplayIP;