import React, {Component} from 'react'
import FlashcardsDataService from '../api/FlashcardsDataService'
import AuthenticationService from '../api/AuthenticationService'

class ListFlashcardsComponent extends Component{
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
        this.refreshFlashcards()
    }

    handleDeleteBtn(id){
        let username = AuthenticationService.getLoggedInUser()
        console.log(`Id: ${id}, username: ${username}`)
        FlashcardsDataService.deleteFlashcard(username, id)
        .then(
            response => {
                this.setState({
                    message: 'Flashcard deleted successfully!'
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
        FlashcardsDataService.retrieveAllFlashcards(username)
        .then(
                response => {
                    console.log(response)
                    this.setState({flashcards: response.data})
            }
            )
        .catch()
    }

    // Mount / render the component 
    render(){
        // console.log('render')
        return (
            <div>   
                <h1>Flashcards</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
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
                                        <th>{flashcard.front}</th>
                                        <th>{flashcard.topic}</th>
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

export default ListFlashcardsComponent