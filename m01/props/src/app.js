'use strict'

import React from 'react'
import Title from './title.js'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Mateus Medeiros' />
        <label htmlFor='input'>Input</label>
        <input type='text' id='input' />
      </div>
    )
  }
})

export default App
