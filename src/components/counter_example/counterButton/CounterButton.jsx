import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css'


//Class Component
class CounterButton extends Component {
    constructor(){
        super();
    }
    
    render () {
        return (
          <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
          </div>
        );
    }
}

//Default properties: for when "by" property is not sended
CounterButton.defaultProps = {
    by : 1
}

//Type check: check that by is a number
CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton