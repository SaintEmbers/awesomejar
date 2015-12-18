import React from 'react'
require('./styles/main.css')
const Hello  = React.createClass({
  render (){
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="jdawg"/>, document.body)
