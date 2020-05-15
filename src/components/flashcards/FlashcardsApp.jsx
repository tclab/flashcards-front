import React, {Component} from 'react'
import {BrowserRouter as Rourter, Route, Switch} from 'react-router-dom'

import LoginComponent from './components/LoginComponent'
import WelcomeComponent from './components/WelcomeComponent'
import ListTodosComponent from './components/ListTodosComponent'
import LogoutComponent from './components/LogoutComponent'
import ErrorComponent from './components/ErrorComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import TodoComponent from './components/TodoComponent'


class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Rourter>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/flashcards/:id" component={TodoComponent}/>
                        <AuthenticatedRoute path="/flashcards" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Rourter> 
                

                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default TodoApp