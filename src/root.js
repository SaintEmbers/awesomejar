var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return null;
  },
  handleLogout: function(loggedIn){
  },
  componentWillMount: function(){
  },
  render() {
    console.log(this.props)
    return <div>
      <div>
        {this.props.children}
      </div>
    </div>
  }
});


