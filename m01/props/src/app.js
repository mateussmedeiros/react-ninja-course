'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Mateus'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Medeiros'
      })}>
        {this.state.text}
      </div>
    )
  }
}

export default App
