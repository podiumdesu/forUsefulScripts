import React from 'react'
import { Link } from 'react-router-dom'
//
// class App extends Component {
//   return() {
//
//   }
//
// }
// export default

import Leftboard from './LeftBoard/index'
import cls from '../style/share.sass'

class App extends React.Component {
  render() {
    return (
      <div className = {cls['right-page']} >
        <div>hello, lhx</div>
        <div>yes, done</div>
        <div>
          这是我完成的一些简单的项目，为了更好的投入使用，所以放在了一个页面中。嘻嘻
        </div>
      </div>

    )
  }
}

export default App
