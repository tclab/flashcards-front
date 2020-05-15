import React, {Component} from 'react'
import TodoDataService from '../api/todo/TodoDataService'
import AuthenticationService from '../api/todo/AuthenticationService'

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: null,
            flashcards:[]
        }

        this.handleUpdateBtn = this.handleUpdateBtn.bind(this)
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this)
        this.refreshFlashcards = this.refreshFlashcards.bind(this)
    }

    // Caled just after the component was mounted
    componentDidMount(){
        // console.log('componentDidMount')
        this.refreshFlashcards()
    }

    // Called just before the component is destroyed
    componentWillUnmount(){
        // console.log('componentWillUnmount')
    }

    // To control when the component should be rendered based on the props
    shouldComponentUpdate(nextProps, nextState){
        // console.log('shouldComponentUpdate')
        // console.log(nextProps)
        // console.log(nextState)
        return true
    }

    handleDeleteBtn(id){
        let username = AuthenticationService.getLoggedInUser()
        console.log(`Id: ${id}, username: ${username}`)
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({
                    message: 'Todo deleted successfully!'
                })
                this.refreshFlashcards()
            }
        )
    }

    handleUpdateBtn(id){
        console.log(`Update id: ${id}`)
        this.props.history.push(`/flashcards/${id}`)
    }

    handleReviewBtn(id){
        console.log(`Update id: ${id}`)
        this.props.history.push(`/flashcards/${id}`)
    }

    refreshFlashcards(){
        let username = AuthenticationService.getLoggedInUser()
        TodoDataService.retrieveAllTodos(username)
        .then(
                response => {
                    // console.log(response)
                    this.setState({todos: response.data})
            }
            )
        .catch()
    }

    // Mount / render the component 
    render(){
        // console.log('render')
        return (
            <div>   
                <h1>Flashcards list</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Term</th>
                                <th>Front</th>
                                <th>Topic</th>
                                <th>Review</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.flashcards.map(flashcard => 
                                    <tr key = {flashcard.id}>
                                        <th>{flashcard.description}</th>
                                        <th>{flashcard.done.toString()}</th>
                                        <th>{flashcard.targetDate.toString()}</th>
                                        <th><button className="btn btn-primary" onClick={() => this.handleReviewBtn(flashcard.id)}>Review </button></th>
                                        <th>
                                            <button className="btn btn-success" onClick={() => this.handleUpdateBtn(flashcard.id)}>Update </button>
                                            <button className="btn btn-warning" onClick={() => this.handleDeleteBtn(flashcard.id)}>Delete</button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent