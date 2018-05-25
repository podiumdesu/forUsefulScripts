import React from 'react'
/* import PropTypes from 'prop-types' */
import { Link } from 'react-router-dom'
import styles from '../../style/LeftBoard/index.sass'

import SideBar from '../../components/SideBar/index.js'

// class ClickToHide extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     console.log(this)
//     const gg = this.clickToHide
//     gg.parentElement.className = ` ${  styles.newgg}`
//     console.log(gg)
//     gg.style.backgroundColor = 'pink'
//     alert('gg')
//   }
//   render() {
//     return (
//       <div ref={(c) => { this.clickToHide = c }} className={styles.clicktohide} onClick={this.handleClick}>
//       gg
//       </div>
//     )
//   }
// }

class LeftBoard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // console.log(this)
    const gg = this.clickToHide
    const ggClass = [gg.nextSibling.className]
    console.log(ggClass)
    ggClass.push(styles.newgg)
    console.log(styles)
    console.log(ggClass)
    gg.nextSibling.className = ggClass.join(' ')
    // console.log(gg.parentElement.className)
    // gg.style.backgroundColor = 'pink'
    // alert('gg')
  }
  render() {
    return (
      <div className={styles['left-board']}>
        <div ref={(c) => { this.clickToHide = c }}
          className={styles.clicktohide}
          onClick={this.handleClick}
        >
        gg
        </div>
        {/* <Link to="/"><SideBar text="title" isTitle="1" id="1" /></Link> */}
        <Link to="/contact"><SideBar text="一键导出通讯录" id="1" /></Link>
        <Link to="/map"><SideBar text="简单毕业地图制作工具" id="2" /></Link>
        <Link to="/about"><SideBar text="关于" id="3" /></Link>
      </div>
    )
  }
}


export default LeftBoard
