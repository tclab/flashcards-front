import React, {Component} from 'react';
import './ResetButton.css'


//Class Component
class ResetButton extends Component {
    constructor(){
        super();

        //Methods needs to be binded (initialized)
        this.reset = this.reset.bind(this);
    }

    reset () {
        this.props.resetMethod();
    }

    render () {
        return (
          <div className="counter">
            <button className="reset" onClick={this.reset} >Reset</button>
          </div>
        );
    }
}

export default ResetButton