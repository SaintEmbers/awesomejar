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
    // console.log('focus', this.state.focus[0])
    var focus = this.state.focus;
    var mainFocus = focus[focus.length - 1];

    // console.log('focus2', focus)
    return (
      <div>
        <h1>{mainFocus.user}:</h1>
        <h2>{mainFocus.text}</h2>
      </div>
    );
  }
})

export default Focus
