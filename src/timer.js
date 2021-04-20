import React from "react";
import ReactDOM from "react-dom";

 export class Timer extends React.Component {
  
    constructor(props) {
     
    super(props);
    this.state = { seconds: 0 };
    var sec= this.state.seconds;
    }
    tick() {
    this.setState(state => ({
     seconds: state.seconds + 1
     
    }));
    }
    componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
    clearInterval(this.interval);
    }
    
    render() {
    return (
    <div>
    <h4 id="time">Cuantos menos segundos tardes, más alto estarás en el ranking:</h4> {this.state.seconds}
    
    </div>
    );
    }
    }
    