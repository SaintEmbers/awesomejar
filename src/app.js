import React from 'react'
import ReactDom from 'react-dom'
// require ('bootstrap/dist/css/bootstrap.css')
// require('./styles/main.css')
import InputAwesome from './submit.js'
// import Jar from './components/eventsjar.js'

require('./styles/main.css')
var App  = React.createClass({

  render (){
    return <div>
      Wassup

    </div>
  }
})

ReactDom.render(<App/>, document.body)
