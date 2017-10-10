import React, {Component} from 'react'

class Message extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log('Message.render() props ->', this.props)
    const displayText = `${this.props.data.key} - ${this.props.data.text}`
    console.log('Message.render() displayText ->', displayText)
    return (
      <li>
        {displayText}
      </li>
    )
  }
}

export default Message
