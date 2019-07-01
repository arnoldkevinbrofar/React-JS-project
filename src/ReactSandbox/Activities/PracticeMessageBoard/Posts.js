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

    handleInputChange = e => {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({
            [name]: value
        })
    }

    handleDeletePost = id => {
        const newPosts = this.state.posts.filter(post => post.id !== id)
        this.setState({posts:newPosts})
    }

    handleEditPost = post => {
        console.log(post)
        this.setState({showEditForm:true})
        this.setState({editId:post.id})
        this.setState({editBody:post.body})
        this.setState({editTitle:post.title})
    }

    handleSavePost = updatedData => {
        console.log(updatedData)
        const updatedPosts = this.state.posts.map(post => {
            if (post.id === updatedData.id) {
                post.title = updatedData.title
                post.body = updatedData.body
            }
        })

        this.setState({
            post: updatedPosts,
            showEditForm:false
        })
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
                editTitle={this.state.editTitle}
                editBody = {this.state.editBody}
                handleInputChange={this.handleInputChange}
                handleSavePost={this.handleSavePost}
                />
                )}
            </div>
        )
    }
}
export default Posts;