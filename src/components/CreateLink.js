import React, { Component } from 'react'
import { GC_USER_ID } from '../constants'
import CreateLinkMutation from '../mutations/CreateLinkMutation'

class CreateLink extends Component {
    state = {
        description: '',
        url: ''
    }

    render() {
        return (
            <div>
                <div className='flex flex-column mt3'>
                    <input
                        className='mb2'
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                        type='text'
                        placeholder='A description for the link'
                    />
                    <input
                        className='mb2'
                        value={this.state.url}
                        onChange={(e) => this.setState({ url: e.target.value })}
                        type='text'
                        placeholder='The URL for the link'
                    />
                </div>
                <div
                    className='button'
                    onClick={() => this._createLink()}
                    >
                    submit
                </div>
            </div>
        )
    }

    _createLink = () => {
        const postedById = localStorage.getItem(GC_USER_ID)
        if (!postedById) {
            console.error('No user logged in')
            return
        }
        const { description, url } = this.state
        CreateLinkMutation(description, url, () => this.props.history.push('/'))
    }
}

export default CreateLink
