import React, {Component} from 'react'

import AuthenticationService from '../../../api/todo/AuthenticationService'

// Control component: Whenever the view is updated, 
// the state is updated and back in the element
class LoginComponent extends Component{
    constructor (props){
        super(props)
        this.state = {
            username: 'juan',
            password: '',
            loginFail: false,
            loginSuccess: false 
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickLoginHandler = this.onClickLoginHandler.bind(this)
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this)

    }

    // if the value is defined, there should be an onChange event handler
    render(){
        return (
            <div className="LoginComponent">   
                <h1>Login</h1>
                <div className="container">
                    {/*this.state.loginSuccess && <div>Login successful!</div>*/}
                    {this.state.loginFail && <div className="alert alert-warning">Invalid credentials</div>}
                    
                    <div className="container">
                        <div className="row row justify-content-md-center" style={{marginTop:"20px"}}> 
                            <div className="col-2">User name</div>
                            <div className="col-2"><input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} onKeyPress={this.onKeyPressHandler}/></div>
                        </div>
                        <div className="row justify-content-md-center" style={{marginTop:"10px"}}> 
                            <div className="col-2">Password</div>
                            <div className="col-2"><input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler} onKeyPress={this.onKeyPressHandler}/></div>
                        </div>
                        <div className="row justify-content-md-center" style={{marginTop:"20px"}}> 
                            <div className="col"><button className="btn btn-success" onClick={this.onClickLoginHandler}>Login</button></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onKeyPressHandler(event){
        if (event.key === 'Enter') {
            this.onClickLoginHandler(event)
        }
    }

    onClickLoginHandler (event){
        // juan, admin
        if(this.state.username==='juan' && this.state.password==='admin'){
            AuthenticationService.registerSuccessfullLoging(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({loginSuccess: true})
            //this.setState({loginFail: false})
        } else {
            this.setState({loginFail: true})
            this.setState({loginSuccess: false})
        }
    }
}

export default LoginComponent