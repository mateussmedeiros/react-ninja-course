'use strict'

import React from 'react'
import Title from './title.js'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Mateus' lastname='Medeiros' />
      </div>
    )
  }
})

export default App
