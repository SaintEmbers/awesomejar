import React from 'react'
// require('./styles/main.css')
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'

var Jar = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://awesomejar.firebaseio.com/items")
    this.bindAsArray(ref, "items")
  },

  render() {
    // console.log(this.state)
    var items = this.state.items.map((item) => {
      return <li>{item.text}</li>
    })
    return (
      <div className="jar-info">
        <h2>{items.length} awesome things have happened</h2>
      </div>
    );
  }
})

export default Jar
