import React, { Component } from 'react'

import * as firebase from 'firebase'

class Messages extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    firebase.database().ref().child('messages').on('value', snap => {
      console.log('Messages.componentDidMount() snap ->', snap)
      this.setState({ messages: snap.val() })
    })
  }

  render() {
    console.log('Messages.render() state ->', this.state)
    if (this.state.messages.length === 0) {
      return (
        <div><h3>No messages to display :(</h3></div>
      )
    }
    const messages = this.state.messages.map((message, index) => {
      return <li key={index}>{message.text}</li>
    })
    return (
      <div>
        <ol>
          {messages}
        </ol>
      </div>
    )
  }
}

export default Messages
