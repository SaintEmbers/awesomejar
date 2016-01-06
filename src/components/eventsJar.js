import React from 'react'
// require('./styles/main.css')
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'

const Jar = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://awesomejar.firebaseio.com/items")
    this.bindAsArray(ref, "items")
    console.log(this)
  },

  render() {
    return (
      <div>
        <p>jar</p>
      </div>
    );
  }
})


export default Jar
