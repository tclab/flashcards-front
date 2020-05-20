import React, {Component} from 'react'
import {BrowserRouter as Rourter, Route, Switch} from 'react-router-dom'

import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import ListFlashcardsComponent from './ListFlashcardsComponent'
import FlashcardsComponent from './FlashcardsComponent'


class FlashcardsAppApp extends Component{
    render(){
        return (
            <div className="FlashcardsApp">
                <Rourter>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/flashcards/:id" component={FlashcardsComponent}/>
                        <AuthenticatedRoute path="/flashcards" component={ListFlashcardsComponent}/>
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

export default FlashcardsAppApp