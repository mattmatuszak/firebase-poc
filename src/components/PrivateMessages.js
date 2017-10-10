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

    // firebase.database().ref('pmessages').on('value', pmessages => {
    //   console.log('PrivateMessages.componentDidMount.on pmessages ->', pmessages)
    //   console.log('PrivateMessages.componentDidMount.on pmessages.key ->', pmessages.key)
    //   console.log('PrivateMessages.componentDidMount.on pmessages.val ->', pmessages.val())
    //   const pmessagesForState = pmessages.val().forEach(pmessage => console.log('PrivateMessages.componentDidMount.on.val().map pmessage.key ->', pmessage.key))
    //   //const stateMessages = [];
    //   //pmessages.forEach(message => stateMessages.push({key: message.key, text: message.val().text}))
    //   //this.setState({messages: stateMessages})
    //
    //   // console.log('PrivateMessages.componentDidMount() child_added ->', data)
    //   // const messages = this.state.messages
    //   // console.log('PrivateMessages.componentDidMount.messages ->', this.state.messages.length)
    //   // messages.push({key: pmessage.key, text: pmessage.val()})
    //   // this.setState({ messages })
    // })

    firebase.database().ref('pmessages').on('child_added', data => {
      console.log('PrivateMessages.componentDidMount.on.child_added data ->', data);
      console.log('PrivateMessages.componentDidMount.on.child_added data.key ->', data.key);
      console.log('PrivateMessages.componentDidMount.on.child_added data.val ->', data.val());

      // console.log('PrivateMessages.componentDidMount() child_added ->', data)
      const messages = this.state.messages
      console.log('PrivateMessages.componentDidMount.on.child.child_added messages ->', this.state.messages.length)
      messages.push(Object.assign({}, {key: data.key}, data.val()))
      this.setState({ messages })
    })
    // this seems like a massive hack...the component is rerendering for each child_added on initial fetch
    // i must be reading the firebase documentation wroong or keying into the wrong events
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
