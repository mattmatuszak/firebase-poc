import React, { Component } from 'react'

import * as firebase from 'firebase'

import PrivateMessageCreator from './PrivateMessageCreator'
import Message from './Message'

class PrivateMessages extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  componentDidMount() {

    firebase.database().ref('pmessages').limitToLast(3).on('value', pmessages => {
      console.log('PrivateMessages.componentDidMount.on pmessages ->', pmessages)
      console.log('PrivateMessages.componentDidMount.on pmessages.key ->', pmessages.key)
      console.log('PrivateMessages.componentDidMount.on pmessages.val ->', pmessages.val())
      const initializedState = [];
      for (var pmessageKey in pmessages.val()) {
        initializedState.push(Object.assign({}, {key: pmessageKey}, pmessages.val()[pmessageKey]))
      }
      this.setState({messages: initializedState})

    })

    // this still seems like a hack...state is re-rendered with all messages with every new message
  }

  render() {
    console.log('PrivateMessages.render() state ->', this.state)
    if (this.state.messages.length === 0) {
      return (
        <div><h3>No private messages to display :(</h3> <PrivateMessageCreator /></div>
      )
    }
    const messages = this.state.messages.map((message, index) => {
      return <Message key={message.key} data={message} />
    })
    return (
      <div>
        <PrivateMessageCreator />
        <ol>
          {messages}
        </ol>
      </div>
    )
  }
}

export default PrivateMessages
