import React, { Component } from 'react';

class CreateLink extends Component {
    constructor() {
        super()
        this.statee = {

        }
    }

    handleSubmit = e => {
        e.preventDefault()

        Meteor.call('links.insert', this.refs.input.value)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Link to shorten</label>
                    <input ref='input' className='form-control'></input>
                </div>

                <button className='btn btn-primary'>Shorten</button>
            </form>
        );
    }
}
 
export default CreateLink;