import React from 'react'
import ReactDom from 'react-dom'
require('./styles/main.css')
require('react-bootstrap')
import InputAwesome from './submit.js'


require('./styles/main.css')
const Hello  = React.createClass({
  render (){
    return <div>
      <InputAwesome/>
    </div>
  }
})

ReactDom.render(<Hello/>, document.body)
