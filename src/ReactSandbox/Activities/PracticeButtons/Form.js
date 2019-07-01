import React, {Component} from 'react';

class Form extends Component {
    render(){
        return(
            <div>
            <form className = "form" action="" onSubmit={this.props.handleSubmitForm}>
            <input placeholder="name"  onChange={this.props.handleNameChange}/>
            <input placeholder="message" onChange={this.props.handleMessageChange}/>
            <button type="submit">Submit</button>
            </form>
            </div>
            )
        }
    }
    export default Form;