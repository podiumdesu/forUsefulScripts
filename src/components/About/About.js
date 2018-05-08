import React from 'react'

import FriendLink from './Friendlink'
// import avatar
import avaPetnaKanojo from '../../static/avatar/PetnaKanojo.jpg'
import styles from '../../style/about.sass'
const PetnaKanojo = {
  name: 'PetnaKanojo',
  link: 'https://moe.petnakanojo.com',
  avatar: avaPetnaKanojo,
  intro: 'Love&Peace',
}
const About = () => {
  return (
    <div>
      <div className="intro-title">
        <img src="../../static/PetnaKanojo.jpg" alt="" />
      </div>
      <div className={styles['friends-link']}>
        <FriendLink info={PetnaKanojo}></FriendLink>
        <FriendLink info={PetnaKanojo}></FriendLink>
        <FriendLink info={PetnaKanojo}></FriendLink>
        <FriendLink info={PetnaKanojo}></FriendLink>
        <FriendLink info={PetnaKanojo}></FriendLink>
        <FriendLink info={PetnaKanojo}></FriendLink>
        <FriendLink info={PetnaKanojo}></FriendLink>
      </div>
    </div>
  )
}
export default About
