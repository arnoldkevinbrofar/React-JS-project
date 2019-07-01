import React, { Component } from 'react';
import GreenButton from './GreenButton.js'
import BlueButton from './BlueButton.js'
import RedButton from './RedButton.js'
import ShowForm from './ShowForm.js'
import Form from './Form.js'

class ButtonApp extends Component {
    state = {
        showGreen : false,
        showBlueButton : false,
        showRed : false,
        showForm : false,
        nameInput : "",
        messageInput : "",
        showMessage : "",
        
    }
    
    handleShowGreen = () => {
        this.setState ({showGreen:true})
        this.setState ({showBlueButton:false})
        this.setState ({showRed:false})
    }
    
    handleShowBlueButton = () => {
        this.setState ({showBlueButton:true})
        this.setState ({showGreen:false})
        this.setState ({showRed:false})
    }
    
    handleShowRed = () => {
        this.setState ({showRed:true})
        this.setState ({showBlueButton:false})
        this.setState ({showGreen:false})
    }
    
    handleShowFormButton = () => {
        if (this.state.showForm === false){
            this.setState ({showForm:true})
        }else {
            this.setState({showForm:false})
        }
    }
    
    handleNameChange = e => {
        this.setState({nameInput:e.target.value})
    }

    handleMessageChange = e => {
        this.setState({messageInput:e.target.value})
    }
    
    handleSubmitForm = e => {
        e.preventDefault();
        this.setState({showname: this.state.nameInput})
        this.setState({showMessage: this.state.showMessage})
    }
    
    
    render() {
        console.log(this.state.messageInput)
        return(
            <div>
            
            <h1>{this.state.showName}</h1>
            <p>{this.state.showMessage}</p>

            <ShowForm
            showForm = {this.state.showForm}
            handleShowFormButton = {this.handleShowFormButton}
            />
            
            <Form
            handleNameChange = {this.handleNameChange}
            handleMessageChange = {this.handleMessageChange}
            handleSubmitForm = {this.handleSubmitForm}
            />
            
            <RedButton 
            showRed={this.state.showRed}
            handleShowRed = {this.handleShowRed}
            />
            <GreenButton
            showGreen = {this.state.showGreen}
            handleShowGreen = {this.handleShowGreen}
            />
            <BlueButton
            showBlueButton={this.state.showBlueButton}
            handleShowBlueButton={this.handleShowBlueButton}
            />
            </div>
            
            )
        }
    }
    
    export default ButtonApp;