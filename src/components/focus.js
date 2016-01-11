import React from 'react'
// require('./styles/main.css')
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'

var Focus = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://awesomejar.firebaseio.com/focus")
    this.bindAsArray(ref, "focus")
  },

  render() {
    var focus = this.state.focus[this.state.focus.length - 1]
    console.log('focus', focus)
    return (
      <div>
        <h1>{focus.text}</h1>
      </div>
    );
  }
})

export default Focus
