'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Anônimo',
      lastname: {
        first: 'Sem ',
        last: 'sobrenome'
      }
    }
  },
  render: function () {
    return (
      <h1>Olá {
        this.props.name + ' ' + this.props.lastname.first + this.props.lastname.last
      }!</h1>
    )
  }
})

export default Title
