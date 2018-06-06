import React from 'react'

import FriendLink from './Friendlink'
// import avatar

import avaVer217 from '../../static/avatar/ver217.png'
import avatyfsnake from '../../static/avatar/alexanderinhustpic.jpg'
import avaviseator from '../../static/avatar/viseator.jpg'
import avaimzhwk from '../../static/avatar/imzhwk.jpg'
import avaduskdragon from '../../static/avatar/duskdragonpic.jpg'
import avakylerky from '../../static/avatar/kylerky.jpg'
import avafaraway from '../../static/avatar/faraway.jpg'
import styles from '../../style/about.sass'

const Ver217 = {
  name: 'Ver217',
  link: 'https://ver217.github.io',
  avatar: avaVer217,
  intro: '人工智障❤️',
}

const alexanderinhust = {
  name: 'alexanderinhust',
  link: 'http://梅怡晗.我爱你',
  avatar: avatyfsnake,
  intro: 'Android开发者/高性能计算/HKU研究生',
}
const viseator = {
  name: 'viseator',
  link: 'https://www.viseator.com',
  avatar: avaviseator,
  intro: 'Android开发/朝着全栈学习中w/今日头条实习生',
}
const imzhwk = {
  name: 'imzhwk',
  link: 'https://imzhwk.com',
  avatar: avaimzhwk,
  intro: '应该是系统/分布式方向',
}
const blackdragon = {
  name: 'blackdragon',
  link: 'http://blog.codedragon.tech/',
  avatar: avaduskdragon,
  intro: 'IOS开发/系统底层/微信实习生',
}
const kylerky = {
  name: 'kylerky',
  link: 'http://www.theta.live/',
  avatar: avakylerky,
  intro: '曾经是机器学习选手～',
}
const faraway = {
  name: 'faraway',
  link: 'https://farawaaay.github.io',
  avatar: avafaraway,
  intro: '前端开发/腾讯实习生/（个人描述）菜得不知道怎么形容',
}

const About = () => {
  return (
    <div className={styles['about-page']}>
      <h3>
        关于我<span className={styles['byte-dance']}>(◍•ᴗ•◍)❤</span>
      </h3>
      <p>就读于关山口男子职业技术学院～</p>
      <p>目前在学习web前端开发，ctf觉得也很好玩～未来可能会接触一点iOS开发以及信息安全专业方面的知识。</p>
      <p>计算机学院本科大二在读，信息安全专业。</p>
      <p><a href="https://hustmeituan.club">华科美团点评技术俱乐部Web组成员</a></p>
      <p><a href="https://www.hustunique.com">华科联创团队Web组成员</a></p>
      <p>开发环境：macOS。google大法好。</p>
      <p style={{ color: 'white' }}>还有个等我月薪百万来养活的猪猪</p>
      <br />
      <h3>联系我</h3>
      <p>对于「小工具」的使用遇到了问题可以随时联系我</p>
      <p><a href="mailto:wwhmomo@gmail.com">邮箱：wwhmomo@gmail.com</a></p>
      <br />
      <h3>友链</h3>
      <p>这是我的一些朋友们，都是非常可爱而且优秀的人哦～</p>
      <div className={styles['friends-link']}>
        <FriendLink info={Ver217} />
        <FriendLink info={viseator} />
        <FriendLink info={imzhwk} />
        <FriendLink info={blackdragon} />
        <FriendLink info={alexanderinhust} />
        <FriendLink info={kylerky} />
        <FriendLink info={faraway} />
        {/* <FriendLink info={nekoDrider} /> */}
      </div>
    </div>
  )
}
export default About
