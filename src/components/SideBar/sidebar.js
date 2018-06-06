import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import styles from '../../style/SideBar/index.sass'
// import '../../style/index.sass'
import mapSvg from '../../static/2.svg'
import calenderSvg from '../../static/1.svg'
import aboutSvg from '../../static/about.svg'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isClick: false,
      text: this.props.text,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // this.setState(prevState => ({
    //   isClick: !prevState.isClick,
    // }))
    // alert(this.state.text)
    this.setState({
      // isClick: true,
    })
  }
  render() {
    const { isTitle, id, isHide } = this.props
    const svgMap = {
      1: calenderSvg,
      2: mapSvg,
      3: aboutSvg,
    }
    const text = this.state.text
    const index = 99 - id
    // const isClick = this.state.isClick
    const classNames = [styles.sidebar]
    if (isTitle) {
      classNames.push(styles.title)
    }
    if (id % 2) {
      classNames.push(styles.oddSideBar)
    }
    // if (isClick) {
    //   classNames.push(styles.title)
    // }
    // display: isHide ? 'none' : 'block'
    // display: isHide ? 'none' : 'block',
    return (
      <div className={classNames.join(' ')}
        style={{ zIndex: index }}
        onClick={this.handleClick}
      >
        <p
          ref={c => this.clickToToggle = c}
          style={{
            display: isHide ? 'none' : ' ',
            opacity: isHide ? '0' : '1',
            transition: 'all linear 1s',
          }}
        >{text}
        </p>
        <img className={styles.sideBarImg} src={svgMap[id]} alt="" />
      </div>
    )
  }
}

export default SideBar
