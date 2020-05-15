import React, {Component} from 'react'
import TodoDataService from '../../../api/todo/TodoDataService'
import AuthenticationService from '../../../api/todo/AuthenticationService'

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: null,
            todos:[]
        }

        this.handleUpdateBtn = this.handleUpdateBtn.bind(this)
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    // Caled just after the component was mounted
    componentDidMount(){
        // console.log('componentDidMount')
        this.refreshTodos()
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
                this.refreshTodos()
            }
        )
    }

    handleUpdateBtn(id){
        console.log(`Update id: ${id}`)
        this.props.history.push(`/todos/${id}`)

        // let username = AuthenticationService.getLoggedInUser()
        // TodoDataService.deleteTodo(username, id)
        // .then(
        //     response => {
        //         this.setState({
        //             message: 'Todo deleted successfully!'
        //         })
        //         this.refreshTodos()
        //     }
        // )
    }

    refreshTodos(){
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
                <h1>Todo list</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is completed?</th>
                                <th>Target date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo => 
                                    <tr key = {todo.id}>
                                        <th>{todo.description}</th>
                                        <th>{todo.done.toString()}</th>
                                        <th>{todo.targetDate.toString()}</th>
                                        <th><button className="btn btn-success" onClick={() => this.handleUpdateBtn(todo.id)}>Update </button></th>
                                        <th><button className="btn btn-warning" onClick={() => this.handleDeleteBtn(todo.id)}>Delete</button></th>
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