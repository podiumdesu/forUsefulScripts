import React from 'react'
import PageIntro from '../share/pageIntro'
import cls from '../../style/Contact/contact.sass'
import contactImg from '../../static/introPic/cal.JPG'
import joinClassNames from '../share/joinClassName'
import ajaxRequest from '../share/ajaxRequest'

const contactIntro = {
  pageTitle: 'excel表格导出通讯录名片',
  pageImg: contactImg,
}
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.clickToDownloadFile = this.clickToDownloadFile.bind(this)
  }
  handleFileUpload() {
    const formData = new FormData()
    formData.append('file', document.getElementById('inputCSV').files[0])
    formData.append('saveParent', this.fatherOrNot.checked)
    ajaxRequest('http://localhost:8080/map/console', 'POST', formData).then(
      console.log()
    )
  }
  clickToDownloadFile() {
    
  }
  render() {
    return (
      <div className={joinClassNames(cls['right-page'], cls['contact-page'])}>
        <PageIntro pageInfo={contactIntro} />
        <p>这里应该是一段很多很多的介绍嗷～</p>
        <p>请按照顺序填写表格</p>
        <input type="file" id="inputCSV" accept=".csv" onChange={this.handleFileUpload.bind(this)} />
        <input type="checkbox" ref={(c) => { this.fatherOrNot = c }} id="fatherOrNot" />
        <label htmlFor="fatherOrNot" >是否保存父母联系方式</label>
        <div className={cls.clickToDownload} onClick={this.clickToDownloadFile.bind(this)}>
          点击生成通讯录
        </div>
      </div>
    )
  }
}

export default Contact
