import axios from 'axios'


class TodoDataService {

    retrieveAllTodos(username){
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }


    deleteTodo(username, todoid){
        return axios.delete(`http://localhost:8080/users/${username}/todos/${todoid}`)
    }

    updateTodo(username, todoid){
        return axios.put(`http://localhost:8080/users/${username}/todos/${todoid}`)
    }

}

export default new TodoDataService()