import React, {Component} from 'react'
import { Formik, Form, Field } from 'formik'
// import AuthenticationService from '../api/AuthenticationService'
import FlashcardsDataService from '../api/FlashcardsDataService'

class FlashcardsComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            front:  '',
            back:  '',
            show: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onReveal = this.onReveal.bind(this)
    }

    componentDidMount(){
        console.log(`id: ${this.state.id}`)
        if(!this.state.id) return;

        FlashcardsDataService.retrieveFlashcardById(this.state.id)
        .then(response => this.setState(
            {
                front:   response.data.front,
                back:   response.data.back,
                topic:   response.data.topic,
                subtopic:   response.data.subtopic
            }
        ))
    }

    onSubmit(values){
        this.props.history.push(`/flashcards`);
    }

    onReveal(values){
        if(this.state.show == '') this.setState({show: this.state.back})
        if(this.state.show != '') this.setState({show: ''})
    }

     render(){
         let {front, back, topic, subtopic} = this.state

         return (
             <div>
                 <h1>Flashcard</h1>
                 <div className="container">
                    <Formik
                        initialValues = {{
                            front, back, topic, subtopic
                        }}
                        onSubmit = {this.onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                         {
                             (props) => (
                                <Form>
                                    {/* <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/> */}
                                    <fieldset className="form-group">
                                        <label>Front</label>
                                        <Field  className="form-control" type="text" name ="front"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Back</label>
                                        <Field as="textarea" className="form-control" type='text' value={this.state.show}/>
                                    </fieldset>
                                    
                                    <button className="btn btn-success" type="submit">Back </button>
                                </Form>
                                
                             )
                         }
                    </Formik>
                 </div>
                 <button className="btn btn-primary" onClick={()=> this.onReveal()}>Reveal </button>
            </div>
         )
     }
}

export default FlashcardsComponent