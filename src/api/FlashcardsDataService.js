import axios from 'axios'


class FlashcardsDataService {

    //retrieveAllFlashcards2(username){
      //  return axios.get(`http://localhost:8080/flashcards`)
    //}

    retrieveAllFlashcards(username){
        return axios.get(`https://tclab-flashcards-back.herokuapp.com/flashcards`)
    }


    deleteFlashcard(username, todoid){
        return axios.delete(`http://localhost:8080/users/${username}/todos/${todoid}`)
    }

    updateFlashcard(username, todoid){
        return axios.put(`http://localhost:8080/users/${username}/todos/${todoid}`)
    }

}

export default new FlashcardsDataService()