import React, {Component} from 'react';
import Form from './Form.js'

class ShowForm extends Component {
    
    render() {
        let form = "";
        if(this.props.showForm === true){
            form = <Form />
        }

            return (
                <div>
                <button className= "btn btn-primary m-5" onClick={this.props.handleShowFormButton}>Show Form</button>
                { form }
                </div>
                )
            }
        }
        
        export default ShowForm;