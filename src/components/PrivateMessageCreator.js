import React, { Component } from 'react'

import * as firebase from 'firebase'

export default class PrivateMessageCreator extends Component {

  constructor(props) {
    super(props)

    this.state = { text: '' }
  }

  onChange = (event) => {
    this.setState({text: event.target.value})
  }

  onCreate = (event) => {
    firebase.database().ref('/pmessages').push().set({text: this.state.text})
      .then(result => this.setState({text: ''}))
  }

  render() {
    console.log('PrivateMessageCreator.render() state ->', this.state)

    return (
      <div>
        <input type='text' name='message'value={this.state.text} onChange={this.onChange} />
        <input type='button' value="New Private Message" onClick={this.onCreate} />
      </div>
    )
  }
}

// export default PrivateMessageCreator
