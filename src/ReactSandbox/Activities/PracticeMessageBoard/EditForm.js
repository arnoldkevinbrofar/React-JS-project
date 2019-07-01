import React, {Component} from 'react'

export default class EditForm extends Component {
    render () {
        return (
            <form>
                <div className="form-group">
                    <input 
                        onChange={this.props.handleInputChange} 
                        name="editTitle"
                        type="text" 
                        className="form-control" 
                        value={this.props.editTitle} />
                    <input 
                        onChange={this.props.handleInputChange} 
                        name="editBody"
                        type="text" 
                        className="form-control" 
                        value={this.props.editBody} />
                </div>
            </form>
        )
    }
}