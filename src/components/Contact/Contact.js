import React from 'react'
import PageIntro from '../share/pageIntro'
import cls from '../../style/Contact/contact.sass'
import contactImg from '../../static/introPic/cal.JPG'
import joinClassNames from '../share/joinClassName'
import ajaxRequest from '../share/ajaxRequest'
import '../share/getLast'

const contactIntro = {
  pageTitle: 'excel表格导出通讯录名片',
  pageImg: contactImg,
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.dragFile = this.dragFile.bind(this)
    this.dragOver = this.dragOver.bind(this)
    this.dragLeave = this.dragLeave.bind(this)
    this.clickToDownloadFile = this.clickToDownloadFile.bind(this)
    this.state = {
      resultFileName: '',
      processState: false,
      formData: '',
      // upLoadState: false,
    }
  }
  clickToDownloadFile() {
    if (this.state.processState) {
      this.clickToDownloadVCF.download = 'result.vcf'
      this.clickToDownloadVCF.href = `http://localhost:8080${this.state.resultFileName}`
    }
    if (this.state.formData !== '') {
      this.state.formData.append('saveParent', this.fatherOrNot.checked)
      ajaxRequest('http://localhost:8080/map/console', 'POST', this.state.formData)
        .then((resultFileFromServer) => {
          this.setState({
            resultFileName: JSON.parse(resultFileFromServer).result,
            processState: true,
          })
          this.resolveInfo.innerHTML = '处理成功，点击下载文件，用手机打开即可保存至通讯录'
          this.clickToDownloadVCF.children[0].style.backgroundImage = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
          this.clickToDownloadVCF.children[0].children[0].href = `http://localhost:8080/${this.state.resultFileName}`
          this.clickToDownloadVCF.children[0].children[0].download = 'result.vcf'
          console.log('gg')
          this.buttonInfo.innerHTML = '点击下载'
        })
        .catch((err) => {
          console.log(JSON.parse(err).result)
        })
    }
  }
  dragFile(e) {
    e.preventDefault()
    // console.log('hello')
    console.log(e.dataTransfer.files[0])
    const uploadFile = e.dataTransfer.files[0]
    const fileSuffix = uploadFile.name.split('.')
    // fileSuffix = fileSuffix[-1]
    if (fileSuffix.last() === 'csv') {
      const formData = new FormData()
      formData.append('file', uploadFile)
      this.state.formData = formData
      console.log(formData)
      this.dragOverContainer.children[0].innerHTML = uploadFile.name
      this.clickToDownloadVCF.children[0].style.backgroundImage = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
    } else if (fileSuffix.last() === 'xlsx') {
      alert('请将xlsx转成csv文件后再上传！\n\n转换教程 https://jingyan.baidu.com/article/925f8cb8a34a15c0dde056e6.html')
    } else {
      alert('请上传csv文件！')
    }
    this.dragOverContainer.style.borderImage = 'none'
    console.log(e.dataTransfer.files[0].name.split('.'))
  }
  dragOver(e) {
    e.preventDefault()
    this.dragOverContainer.style.borderImage = 'linear-gradient(to left, #79F1A4, #0E5CAD) 1 round'
    // console.log('drag')
  }
  dragLeave(e) {
    e.preventDefault()
    this.dragOverContainer.style.background = 'transparent'
    console.log(this.dragOverContainer.style)
    this.dragOverContainer.style.borderImage = 'none'
    console.log('over')
  }

  render() {
    return (
      <div className={joinClassNames(cls['right-page'], cls['contact-page'])}>
        <PageIntro pageInfo={contactIntro} />
        <img style={{ width: '70%' }}src="http://ojvrmnpos.bkt.clouddn.com/show/calendertttt.png" alt="样例展示" />
        <p>请按照顺序填写表格</p>
        <p>第一列填写【姓名】，第二列填写【手机号】</p>
        <p>（选填）第三列填写【父亲手机号】，第四列填写【母亲手机号】</p>
        <p>请上传csv文件，<a href="https://jingyan.baidu.com/article/925f8cb8a34a15c0dde056e6.html" target="_blank" >点击查看如何将xlsx一键保存成csv文件</a></p>
        <div ref={(c) => { this.dragOverContainer = c }} className={cls.dragFile} onDrop={this.dragFile} onDragOver={this.dragOver} onDragLeave={this.dragLeave}>
          <p>拖拽csv文件至此！</p>
        </div>
        {/* <div> */}
        {/* <input type="file" id="inputCSV" accept=".csv" onChange={this.handleFileUpload} /> */}
        <label htmlFor="fatherOrNot" >
          <input id="fatherOrNot" type="checkbox" ref={(c) => { this.fatherOrNot = c }} />
              是否保存父母联系方式
        </label>
        {/* </div> */}
        <p ref={(c) => { this.resolveInfo = c }} className={cls.resolveInfo} />
        <div ref={(c) => { this.clickToDownloadVCF = c }} className={cls.clickToDownload} onClick={this.clickToDownloadFile}>
          <p><a style={{ padding: '10px', color: 'white' }} ref={(c) => { this.buttonInfo = c }}>点击处理</a></p>
        </div>
      </div>
    )
  }
}

export default Contact
