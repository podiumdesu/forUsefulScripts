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

const Ct = () => {
  return (
    <Router>
      <div className={styles['main-page']}>
        <LeftBoard />
        <div className={styles['right-board']}>
          <Route exact path="/" component={App} />
          <Route path="/contact" component={Contact} />
          <Route path="/map" component={Map} />
          <Route path="/about" component={About} />
          <footer>
            <p>© 2018 <span className={styles.love}>❤</span> PetnaKanojo</p>
            <p><a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=fMSSEhgInrHRa0wGyk1ENyKM1AAMiqdGE85oxCUnkJiFnGDhM7ds!-2113647171">沪ICP备17003868号-1</a></p>

          </footer>
        </div>
      </div>
    </Router>
  )
}
//
ReactDom.render(<Ct />, document.getElementById('root'))
