import React , {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'

import AuthenticationService from '../../../api/todo/AuthenticationService'

class AuthenicatedRoute extends Component{
    render () {
        if(AuthenticationService.isUserLoggedIn()){
            //Sread operator
            return (<Route {...this.props}/>)
        } else {
            return (<Redirect to="/login"/>)
        }
    }
}

export default AuthenicatedRoute