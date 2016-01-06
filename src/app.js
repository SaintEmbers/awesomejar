import React from 'react'
import ReactDom from 'react-dom'
require ('bootstrap/dist/css/bootstrap.css')
require('./styles/main.css')
import InputAwesome from './submit.js'


require('./styles/main.css')
const App  = React.createClass({
  render (){
    return <div>
      <InputAwesome/>
      <InputJar/>
    </div>
  }
})

ReactDom.render(<App/>, document.body)
