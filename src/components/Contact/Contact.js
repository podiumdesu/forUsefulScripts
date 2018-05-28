import React from 'react'
import PageIntro from '../share/pageIntro'
import cls from '../../style/Contact/contact.sass'
import contactImg from '../../static/introPic/cal.JPG'
import processData from './processData'
import joinClassNames from '../share/joinClassName'
import ajaxRequest from '../share/ajaxRequest'

const XLSX = require('xlsx')

const contactIntro = {
  pageTitle: 'excel表格导出通讯录名片',
  pageImg: contactImg,
}
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.handleDownload = this.handleDownload.bind(this)
    // this.handleFileUpload = this.handleFileUpload.bind(this)
  }
  handleDownload() {
    // alert('gg')
  }
  handleFileUpload(e) {
    const f = e.target.files[0]
    const reader = new FileReader()
    // console.log(e.target.re)
    const fileName = f.className
    console.log(e)
    // console.log(`${fileName} is being read!`)
    reader.onload = function (e) {
      // console.log(e)
      const data = e.target.result
      const wb = XLSX.read(data, { type: 'binary' })
      console.log(data)
      processData(data)
    }
    reader.readAsText(f,'gb2312')
  }
  clickToDownloadFile() {
    // alert('gg')
    ajaxRequest('http://localhost:1234/map/console', 'POST', {data: 'ggg'})
  }
  render() {
    return (
      <div className={joinClassNames(cls['right-page'], cls['contact-page'])}>
        <PageIntro pageInfo={contactIntro} />
        <p>这里应该是一段很多很多的介绍嗷～</p>
        <p>请按照顺序填写表格</p>
        <input type="file" id="inputCSV" accept=".csv, .xlsx" onChange={this.handleFileUpload} />
        <p id="gg" onClick={this.handleFileUpload.bind(this)}>ggg</p>
        <input type="checkbox" id="fatherOrNot" />
        <label htmlFor="fatherOrNot">是否保存父母联系方式</label>
        <div className={cls['clickToDownload']} onClick={this.clickToDownloadFile.bind(this)}>
          点击生成通讯录
        </div>
      </div>
    )
  }
}

export default Contact
