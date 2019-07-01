import React, {Component} from 'react'
import SinglePost from './SinglePost.js'

class Posts extends Component {

    state = {
        posts : [],
        editId : "",
        editTitle : "",
        editBody : "",
        showEditForm: false
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(json=>
            this.setState({posts:json}))
    }

    handleDeletePost = id => {
        const newPosts = this.state.posts.filter(post => post.id !== id)
        this.setState({posts:newPosts})
    }

    handleEditPost = post => {
        this.setState({showEditForm:true})
        this.setState({editId:post.id})
        this.setState({editBody:post.body})
        this.setState({editTitle:post.editTitle})
    }


    render(){
        return (
            <div>
                {this.state.posts.map(post => 
                <SinglePost 
                key = {post.id}
                post={post}
                handleDeletePost={this.handleDeletePost}
                handleEditPost={this.handleEditPost}
                showEditForm = {this.state.showEditForm}
                editId = {this.state.editId}
                editBody = {this.state.editBody}
                
                />
                )}
            </div>
        )
    }
}
export default Posts;