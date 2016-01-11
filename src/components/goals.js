import React from 'react'
import {Input} from 'react-bootstrap';
// require('./styles/main.css')
import Firebase from 'firebase'
const Goals = React.createClass({
  componentWillMount() {
    this.firebaseRef = new Firebase("https://awesomejar.firebaseio.com/goals");
    console.log('firebase', this.firebaseRef)
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
    console.log(this.refs.input.getValue())
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
      <h1>Goals</h1>
      <Input
        type="text"
        value={this.state.value}
        placeholder="What are your goals?"
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
export default Goals

