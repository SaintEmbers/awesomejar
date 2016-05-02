import React from 'react'
import { render }from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Root from './root'
import Add from './Add'
import Modal from './components/modal'
console.log('routes')

render((
  <Router history={browserHistory}>
    <Route path='/' component={ Root }>
      <IndexRoute component={ Add } />
      <Route path='modal' component={ Modal } />
    </Route>
  </Router>
), document.body)
