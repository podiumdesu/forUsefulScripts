import React from 'react'
/* import PropTypes from 'prop-types'*/
import { Link } from 'react-router-dom'
import styles from '../../style/LeftBoard/index.sass'

import SideBar from '../../components/SideBar/index.js'

const LeftBoard = () => {
  return (
    <div className={styles['left-board']}>

      <Link to="/"><SideBar text="title" isTitle="1" id="1" /></Link>
      <Link to="/contact"><SideBar text="一键导出通讯录" id="2" /></Link>
      <Link to="/map"><SideBar text="简单毕业地图制作工具" id="3" /></Link>
      <Link to="/about"><SideBar text="关于" id="4" /></Link>
    </div>
  )
}


export default LeftBoard
