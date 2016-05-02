import React from 'react'
import ReactDom from 'react-dom'
require('./styles/main.css')

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

require('./styles/main.css')


var Add  = React.createClass({
  getInitialState(){
  console.log('yooo in app')
    return{
      addToJar: false
    }
  },

  openJar(){
    console.log('clicked')
    this.setState({addToJar: true})
    // browserHistory.push('modal')
  },

  render (){
   
  if(!this.state.addToJar){
    return (
      <div>
        <div className={this.state.addToJar ? 'transition jar ' : 'jar'} onClick={ this.openJar }>
          <div className={this.state.addToJar ? 'transition content ' : 'content'}>
          <svg width="300" height="300" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className='add'>
            <title>Slice 1</title>
            <g fill="none" fill-rule="evenodd" strokeLinecap="square" strokeWidth="4">
              <path d="M200 1.5v400" stroke="#38B5B9"/>
              <path d="M1.5 200h400" stroke="#5DBCC6"/>
            </g>
          </svg>
          </div>
        </div>
      </div>  
      
    )
    } else{
      return(
      <div>
      <div className='transition jar' onClick={ this.openJar }>
        <div className='transition content'>
        <svg width="300" height="300" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className='add-transition transition add'>
          <title>Slice 1</title>
          <g fill="none" fill-rule="evenodd" strokeLinecap="square" strokeWidth="4">
            <path d="M200 1.5v400" stroke="#38B5B9"/>
            <path d="M1.5 200h400" stroke="#5DBCC6"/>
          </g>
        </svg>
        </div>
      </div>
      <h1></h1>
      <form action="#" className="memory-form" method="post">
          <div>
              <textarea className="memory-input"></textarea>
          </div>
          <button type="submit" className="submit">Submit</button>
      </form>
      </div>
      )
    }
  } 
})

export default Add


