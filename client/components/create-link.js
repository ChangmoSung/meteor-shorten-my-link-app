import React, { Component } from 'react';

class CreateLink extends Component {
    constructor() {
        super()
        this.state = {
            error: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        Meteor.call('links.insert', this.refs.input.value, error => {
            if(error) {
                this.setState({
                    error: 'Enter a valid URL'
                })
            } else {
                this.refs.input.value = ''
            }
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Link to shorten</label>
                    <input ref='input' className='form-control'></input>
                </div>

                <div className='text-danger'>{this.state.error}</div>

                <button className='btn btn-primary'>Shorten</button>
            </form>
        );
    }
}
 
export default CreateLink;