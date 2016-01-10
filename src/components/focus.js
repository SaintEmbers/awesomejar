import React from 'react'
import {Input} from 'react-bootstrap';
// require('./styles/main.css')
import Firebase from 'firebase'
const InputFocus = React.createClass({
  componentWillMount() {
    this.firebaseRef = new Firebase("https://awesomejar.firebaseio.com/focus");
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
    console.log(this.refs.input.getValue())
    e.preventDefault();
    this.firebaseRef.push({
      text: this.refs.input.getValue()
    });
    this.setState({value: ""});
    console.log(this.state)
  },

  render() {
    return (
      <div>
      <h1>What is your relationship focus today</h1>
      <Input
        type="text"
        value={this.state.value}
        placeholder="What will have the biggest impact today?"
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
export default InputFocus