import React, {Component} from 'react';
import EditForm from './EditForm'

class SinglePost extends Component {
    state = {
        updatedItem: {
            editId: this.props.editId,
            editTitle: this.props.editTitle,
            editBody: this.props.editBody
        }
    }

    render() {
        return (
            <div className = "justify-content-center d-flex flex-column align-items-center">
            <div className="card col-6 my-3">
            <h1>{this.props.post.title}</h1>
            {/* <p>{this.props.post.id}</p> */}
            <p>{this.props.post.body}</p>
            <div className="row mx-2 my-3">

            <div className="col-md-12">
                {this.props.showEditForm && this.props.editId === this.props.post.id ? (
                    <EditForm 
                        handleInputChange={this.props.handleInputChange}
                        editTitle={this.props.editTitle}
                        editBody={this.props.editBody}
                    />
                ) : null}
            </div>
            
            {this.props.showEditForm ? (
                <button className = "mr-3 col-2 btn btn-info bg-success" onClick={e => {
                    this.props.handleSavePost({
                        id: this.props.editId,
                        title: this.props.editTitle,
                        body: this.props.editBody
                    })
                } }> Save </button>
            ) : <button className = "mr-3 col-2 btn btn-info bg-primary" onClick={e => {
                this.props.handleEditPost(this.props.post)
            } }> Edit </button> }
            
            <button className = "col-2 btn btn-info bg-secondary" onClick={() => this.props.handleDeletePost(this.props.post.id)}> Delete </button>
            
            
            
            
            </div>
            </div>
            </div>
            )
        }
    }
    export default SinglePost;
    
    