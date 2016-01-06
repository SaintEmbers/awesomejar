

const Jar = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = new Firebase("https://awesomejar.firebaseio.com/items")
    this.bindAsArray(ref, "items")
  }
})
