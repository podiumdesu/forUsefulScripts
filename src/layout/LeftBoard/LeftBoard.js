import React from 'react'
/* import PropTypes from 'prop-types' */
import { Link } from 'react-router-dom'
import styles from '../../style/LeftBoard/index.sass'
import joinClass from '../../components/share/joinClassName'
import removeClass from '../../components/share/removeClassName'
import SideBar from '../../components/SideBar/index.js'

class LeftBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHide: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.state.isHide) {
      const leftBoardClasses = this.clickToHide.nextElementSibling.className
      this.clickToHide.nextElementSibling.className = removeClass(leftBoardClasses, styles.newgg)
      this.clickToHide.style.left = '15%'
    } else {
      const leftBoardToHideClass = [this.clickToHide.nextSibling.className]
      // 修改整个页面的宽度
      const leftMargin = '5%'
      this.clickToHide.style.left = leftMargin
      this.clickToHide.nextElementSibling.className = joinClass(leftBoardToHideClass, styles.newgg)
    }
    console.log(this.state.isHide)
    this.setState(prevState => ({ isHide: !prevState.isHide }))
  }
  render() {
    return (
      <div>
        <div ref={(c) => { this.clickToHide = c }}
          className={styles.clicktohide}
          onClick={this.handleClick}
        >
        gg
        </div>
        <div className={styles['left-board']}>
          {/* <Link to="/"><SideBar text="title" isTitle="1" id="1" /></Link> */}
          <Link to="/contact"><SideBar text="一键导出通讯录" id="1" /></Link>
          <Link to="/map"><SideBar text="简单毕业地图制作工具" id="2" /></Link>
          <Link to="/about"><SideBar text="关于" id="3" /></Link>
        </div>
      </div>
    )
  }
}


export default LeftBoard
