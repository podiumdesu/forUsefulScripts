import React from 'react'
// import { WebView } from 'react-native-cli'
import cls from '../../style/Map/index.sass'
import PageIntro from '../share/pageIntro'
import mapIntroImg from '../../static/introPic/map.JPG'

// import MapSrc from '../../map.html'

// const MapSrc = require('../../map.html')

const MapIntro = {
  pageTitle: '地图',
  pageImg: mapIntroImg,
}
const Map = () => {
  return (
    <div className={cls['right-page']} >
      <PageIntro pageInfo={MapIntro} />
      {/* <div dangerouslySetInnerHTML={{ _html: MapSrc }} /> */}
    </div>
  )
}

export default Map
