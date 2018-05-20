import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../style/about.sass'
class FriendLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { info } = this.props
    const name = info.name
    const link = info.link
    const avatarSrc = info.avatar
    const intro = info.intro
    return (
      <div className={styles['friend-info-ctn']}>
        <a href={link}>
          <img className={styles['ava-img']} src={avatarSrc} alt={name} />
          <p className={styles['intro-name']}>{name}</p>
          <p className={styles['intro-info']}>{intro}</p>
        </a>

      </div>
    )
  }
}

FriendLink.propTypes = {
  info: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // link: PropTypes.string,
  // avatar: PropTypes.string,
  // intro: PropTypes.string,
}

export default FriendLink
