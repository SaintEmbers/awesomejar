import React from 'react'
import {Input} from 'react-bootstrap';
require('./styles/main.css')
import Firebase from 'firebase'
const InputAwesome = React.createClass({
  componentWillMount() {
    this.firebaseRef = new Firebase("https://awesomejar.firebaseio.com/items");
    console.log('firebase', this.firebaseRef)
    console.log('component mounted')
  },


  getInitialState() {
    return {
      value: ''
    };
  },
  handleChange() {
    this.setState({
      value: this.refs.input.getValue()
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.firebaseRef.push({
      text: this.refs.input.getValue(),
      date: new Date(),
      user: "Jason"
    });
    this.setState({value: ""});
    console.log(this.state)
  },

  render() {
    return (
      <div>
      <h1>Good things happen</h1>
      <Input
        type="text"
        value={this.state.value}
        placeholder="Enter something awesome"
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        onChange={this.handleChange}
       ></Input>
          <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
        </div>
    );
  }
});
export default InputAwesome


