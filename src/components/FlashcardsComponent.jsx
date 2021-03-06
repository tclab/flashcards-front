import React, {Component} from 'react'
import moment from 'moment'
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
            topic:  '',
            subtopic:  '',
            createdAt: moment(new Date()).format('YYYY-MM-DD'),
            updatedAt: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        // this.validate = this.validate.bind(this)
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
        console.log("ID on submit: " +this.state.id)
        let flashcard = {
            id: this.state.id,
            front:   values.front,
            back:   values.back,
            topic:   values.topic,
            subtopic:   values.subtopic,
            okn: 0,
            nokn: 0,
            enable: true,
            createdAt: moment(new Date()).format('YYYY-MM-DD'),
            updatedAt: moment(new Date()).format('YYYY-MM-DD')
        };

        if(!this.state.id){
            FlashcardsDataService.createFlashcard(flashcard)
            .then(() => this.props.history.push(`/flashcards`))
        } else {
            FlashcardsDataService.updateFlashcard(flashcard)
            .then(() => this.props.history.push(`/flashcards`))
        }
    }

    // validate(values){
    //     let errors = {};

    //    if(!values.description){
    //         errors.description = "Enter a description"
    //     } else if (values.description.length < 5){
    //         errors.description = 'Enter at least 5 characters in the description'
    //     }

    //     if(!moment(values.targetDate).isValid){ 
    //         errors.targetDate = "Enter a valid target date"
    //     }
        
    //     return errors;
    // }

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
                                        <Field className="form-control" type="text" name ="front"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Back</label>
                                        <Field as="textarea" className="form-control" type="text" name="back" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Topic</label>
                                        <Field className="form-control" type="text" name="topic" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Subtopic</label>
                                        <Field className="form-control" type="text" name="subtopic" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save </button>
                                </Form>
                             )
                         }
                    </Formik>
                 </div>
            </div>
         )
     }
}

export default FlashcardsComponent