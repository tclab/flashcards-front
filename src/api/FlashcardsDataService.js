import axios from 'axios'
import {HEROKU_API_URL} from '../Constants'

class FlashcardsDataService {

    //retrieveAllFlashcards2(username){
      //  return axios.get(`http://localhost:8080/flashcards`)
    //}

    retrieveAllFlashcards(username){
        return axios.get(`${HEROKU_API_URL}/flashcards`)
    }

    retrieveFlashcardById(id){
        return axios.get(`${HEROKU_API_URL}/flashcards/get/${id}`)
    }


    deleteFlashcard(username, id){
        return axios.delete(`${HEROKU_API_URL}/flashcards/${id}`)
    }

    createFlashcard(flashcard){
        console.log(flashcard)
        return axios.post(`${HEROKU_API_URL}/flashcards`, flashcard)
    }

    updateFlashcard(flashcard){
        console.log(flashcard)
        return axios.put(`${HEROKU_API_URL}/flashcards`, flashcard)
    }

}

export default new FlashcardsDataService()