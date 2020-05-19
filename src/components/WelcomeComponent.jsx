import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            servicemessage: ''
        }

        this.handleSuccesfullResponse = this.handleSuccesfullResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this) 

    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">   
                    Welcome {this.props.match.params.name} to FlashMemo! app.

                    <br/>
                    You can manage your flashcard list <Link to="/flashcards">here</Link>. 
                </div>
            </>

        )
    }    

    handleSuccesfullResponse(response) {
        this.setState({servicemessage: response.data.message})
    }

    handleErrorResponse(error){
        this.setState({servicemessage: error.response.data.message})

    }
}

export default WelcomeComponent