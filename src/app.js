import React from 'react'
import ReactDom from 'react-dom'
require ('bootstrap/dist/css/bootstrap.css')
require('./styles/main.css')
import InputAwesome from './submit.js'
import Jar from './components/eventsjar.js'
import InputFocus from './components/focus.js'

require('./styles/main.css')
const App  = React.createClass({
  render (){
    return <div>
      <InputFocus/>
      <InputAwesome/>
      <Jar/>
    </div>
  }
})

ReactDom.render(<App/>, document.body)
