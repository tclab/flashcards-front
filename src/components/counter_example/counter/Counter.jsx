import React, {Component} from 'react';
import './Counter.css'
import CounterButton from '../counterButton/CounterButton'
import ResetButton from '../resetButton/ResetButton'


class Counter extends Component {

    constructor(){
        super();

        //Define the initial state of the component
        this.state = {
            counter : 0 
        }

        //Methods needs to be binded (initialized)
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment (by) { 
        this.setState( 
            (prevState) => {
                // prevState = this.state
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement (by) { 
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }

    reset () { 
        this.setState({counter: 0});
    }

    render () {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={20} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <ResetButton resetMethod={this.reset}></ResetButton>
          </div> 
        );
    } 
}

export default Counter