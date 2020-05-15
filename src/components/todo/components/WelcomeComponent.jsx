import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import HelloWorldService from '../../../api/todo/HelloWorldService'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            servicemessage: ''
        }

        this.getWelcomeMessage = this.getWelcomeMessage.bind(this)
        this.handleSuccesfullResponse = this.handleSuccesfullResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this) 

    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">   
                    Welcome {this.props.match.params.name} to TODO app!!

                    <br/>
                    You can manage your todo list <Link to="/todos">here</Link>. 
                </div>

                {/* <div className="container">   
                    <button className="btn btn-success" onClick={this.getWelcomeMessage}>Todo list</button>
                </div> */}

                {/* <div className="container">   
                    <h1>{this.state.servicemessage}</h1>
                </div> */}

            </>

        )
    }

    getWelcomeMessage(event){
        HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
        .then(response => this.handleSuccesfullResponse(response))
        .catch(error => this.handleErrorResponse(error))
    }

    handleSuccesfullResponse(response) {
        this.setState({servicemessage: response.data.message})
    }

    handleErrorResponse(error){
        this.setState({servicemessage: error.response.data.message})

    }
}

export default WelcomeComponent