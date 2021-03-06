import React from 'react'
/* import PropTypes from 'prop-types' */
import { Link } from 'react-router-dom'
import styles from '../../style/LeftBoard/index.sass'
// import joinClass from '../../components/share/pushClassName'
// import removeClass from '../../components/share/removeClassName'
import SideBar from '../../components/SideBar/index.js'
// import openIconStyle from '../../static/clickOpen.svg'
// import hideIconStyle from '../../static/clickHide.svg'

class LeftBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHide: false,
      // iconStyle: hideIconStyle,
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  // handleClick() {
  //   let iconSrc
  //   if (this.state.isHide) {
  //     const leftBoardClasses = this.clickToHide.nextElementSibling.className
  //     this.clickToHide.nextElementSibling.className = removeClass(leftBoardClasses, styles.newgg)
  //     this.clickToHide.style.left = '15%'
  //     this.clickToHide.parentElement.nextSibling.style.left = '15%'
  //     this.clickToHide.parentElement.nextSibling.style.width = '85%'
  //     iconSrc = hideIconStyle
  //   } else {
  //     const leftBoardToHideClass = [this.clickToHide.nextSibling.className]
  //     // 修改整个页面的宽度
  //     const leftMargin = '5%'
  //     this.clickToHide.parentElement.nextSibling.style.left = '5%'
  //     this.clickToHide.parentElement.nextSibling.style.width = '95%'
  //     this.clickToHide.style.left = leftMargin
  //     this.clickToHide.nextElementSibling.className = joinClass(leftBoardToHideClass, styles.newgg)
  //     iconSrc = openIconStyle
  //   }
  // console.log(this.state.isHide)
  // this.setState(prevState => ({
  //   isHide: !prevState.isHide,
  //   iconStyle: iconSrc,
  // }))
  // }
  render() {
    // const clickIconSrc = this.state.iconStyle
    const isHide = this.state.isHide
    return (
      <div>
        <div ref={(c) => { this.clickToHide = c }}
          className={styles.clicktohide}
          // onClick={this.handleClick}
        >
          {/* <img src={clickIconSrc} alt="" /> */}
        </div>
        <div className={styles['left-board']}>
          {/* <Link to="/"><SideBar text="title" isTitle="1" id="1" /></Link> */}
          <Link to="/contact"><SideBar text="一键导出通讯录" id="1" isHide={isHide} /></Link>
          <Link to="/map"><SideBar text="毕业地图制作" id="2" isHide={isHide} /></Link>
          <Link to="/about"><SideBar text="关于" id="3" isHide={isHide} /></Link>
        </div>
      </div>
    )
  }
}


export default LeftBoard
