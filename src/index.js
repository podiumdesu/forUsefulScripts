/**
 * Created by petnakanojo on 2018/3/9.
 */

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { BrowserRouter, Route, hashHistory } from 'react-router-dom'

import LeftBoard from './layout/LeftBoard/index'
import App from './layout/App'
import Contact from './components/Contact/index'
import Map from './components/Map/index'
import About from './components/About/index'
import styles from './style/index.sass'


class Ct extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles['main-page']}>
          <LeftBoard />
          <div className={styles['right-board']}>
            <Route exact path="/" component={App} />
            <Route path="/contact" component={Contact} />
            <Route path="/map" component={Map} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

//
ReactDom.render(<Ct />, document.getElementById('root'))
