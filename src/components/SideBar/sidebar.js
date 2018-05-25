import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import styles from '../../style/SideBar/index.sass'
// import '../../style/index.sass'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isClick: false,
      text: this.props.text,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // static propTypes = {
  //   color: PropTypes.string,
  // }
  // defaultProps = {
  //   color: 'red',
  // }
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
    const { isTitle, id } = this.props
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
    return (
      <div className={classNames.join(' ')}
        style={{ zIndex: index }}
        onClick={this.handleClick}
      >
        <p>{text}</p>
      </div>
    )
  }
}

export default SideBar
