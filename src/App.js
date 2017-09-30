import React, { Component } from 'react'
import './App.css'
import GoogleSignIn from './components/GoogleSignIn'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: {
        name: 'anonymous'
      }
    }
  }

  handleLogin = (user) => {
    console.log('App.handleLogin() user ->', user)
    this.setState({
      loggedInUser: user
    })
  }

  render() {
    const picture = (this.state.loggedInUser.picture) ? <img width='50px' src={this.state.loggedInUser.picture}></img> : ''
    const signInButtons = (this.state.loggedInUser.name !== 'anonymous') ? '' : <GoogleSignIn loginCallback={this.handleLogin} />
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome!  {this.state.loggedInUser.name}</h1>
          {picture}
        </header>
        <p>This is a poc from the default create react app we all love and adore...lets start to do more stuff!</p>
        <p>this is a big change for QA!</p>
        <p>Testing some npm scripts.</p>
        {signInButtons}

      </div>
    )
  }
}

export default App
