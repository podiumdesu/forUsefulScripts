import React from 'react'
import cls from '../../style/pageIntro.sass'

const pageIntro = (props) => {
  return (
    <div className={cls['pageintro-comp']}>
      <img src={props.pageInfo.pageImg} alt="" />
      <h3>{ props.pageInfo.pageTitle }</h3>
    </div>
  )
}
export default pageIntro

