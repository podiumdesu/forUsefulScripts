import React from 'react'

import FriendLink from './Friendlink'
// import avatar
import avaPetnaKanojo from '../../static/avatar/PetnaKanojo.jpg'
import avaVer217 from '../../static/avatar/ver217.png'
import avatyfsnake from '../../static/avatar/alexanderinhustpic.jpg'
import avaviseator from '../../static/avatar/viseator.jpg'
import avaimzhwk from '../../static/avatar/imzhwk.jpg'
import avaduskdragon from '../../static/avatar/duskdragonpic.jpg'
import avakylerky from '../../static/avatar/kylerky.jpg'

import styles from '../../style/about.sass'

const PetnaKanojo = {
  name: 'PetnaKanojo',
  link: 'https://moe.petnakanojo.com',
  avatar: avaPetnaKanojo,
  intro: 'Love&Peace',
}
const Ver217 = {
  name: 'Ver217',
  link: 'https://ver217.github.io',
  avatar: avaVer217,
  intro: 'AI方向❤️',
}

const alexanderinhust = {
  name: 'alexanderinhust',
  link: '',
  avatar: avatyfsnake,
  intro: 'snake',
}
const viseator = {
  name: 'viseator',
  link: 'https://www.viseator.com',
  avatar: avaviseator,
  intro: '安卓开发，朝着全栈学习中w 字节舞者',
}
const About = () => {
  return (
    <div className={styles['about-page']}>
      <h3>
        关于我
      </h3>
      <p>
        关山口职业技术学院在读，梦想是成为超绝可爱的程序喵！
      </p>
      <br />
      <h3>联系我</h3>
      <p>邮箱：wwhmomo@gmail.com</p>
      <br />
      <h3>友链</h3>
      <p>这是我的一些朋友们，都是非常可爱而且优秀的人哦～</p>
      <div className={styles['friends-link']}>
        <FriendLink info={PetnaKanojo} />
        <FriendLink info={Ver217} />
        <FriendLink info={PetnaKanojo} />
        <FriendLink info={PetnaKanojo} />
        <FriendLink info={PetnaKanojo} />
        <FriendLink info={PetnaKanojo} />
        <FriendLink info={PetnaKanojo} />
      </div>
    </div>
  )
}
export default About
