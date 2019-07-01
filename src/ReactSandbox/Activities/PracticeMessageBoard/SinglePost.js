import React, {Component} from 'react';

class SinglePost extends Component {
    render() {
        
        let editForm = "";
        
        if (this.props.showEditForm === true && this.props.post.id === this.props.editId){
            editForm = <form>
            <input type ="text" value = {this.props.editTitle} />
            <input type ="text" value = {this.props.editBody} />
            </form>
        }
        
        
        
        return (
            <div className = "justify-content-center d-flex flex-column align-items-center">
            <div className="card col-6 my-3">
            <h1>Title</h1>
            <p>{this.props.post.id}</p>
            <p>{this.props.post.title}</p>
            <div className="row mx-2 my-3">
            
            <button className = "col-2 btn btn-info bg-warning" onClick={() => this.props.handleDeletePost(this.props.post.id)}> Delete </button>
            
            <button className = "mr-3 col-2 btn btn-info bg-success" onClick={() => this.props.handleEditPost(this.props.post)}> Edit </button>
            
            
            </div>
            </div>
            </div>
            )
        }
    }
    export default SinglePost;
    
    