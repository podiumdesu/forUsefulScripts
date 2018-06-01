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

function dragOver(e) {
  e.preventDefault()
  console.log('dragOver')
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.dragFile = this.dragFile.bind(this)
    // this.dragOver = this.dragOver.bind(this)
    this.state = {
      resultFileName: '',
      processState: false,
    }
  }
  clickToDownloadFile() {
    if (this.state.processState) {
      this.clickToDownloadVCF.download = 'result.vcf'
      this.clickToDownloadVCF.href = `http://localhost:8080${this.state.resultFileName}`
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
      formData.append('saveParent', this.fatherOrNot.checked)
      ajaxRequest('http://localhost:8080/map/console', 'POST', formData)
        .then((resultFileFromServer) => {
          this.setState({
            resultFileName: JSON.parse(resultFileFromServer).result,
            processState: true,
          })
          this.clickToDownloadVCF.children[0].style.backgroundImage = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
          const addLink = document.createElement('a')
          this.clickToDownloadVCF.children[0].append(addLink)
          this.clickToDownloadVCF.children[0].children[0].href = `http://localhost:8080/${this.state.resultFileName}`
          this.clickToDownloadVCF.children[0].children[0].download = 'result.vcf'
        })
    } else if (fileSuffix.last() === 'xlsx') {
      alert('请将xlsx转成csv文件后再上传！')
    } else {
      alert('请上传csv文件！')
    }
    console.log(e.dataTransfer.files[0].name.split('.'))
  }

  render() {
    return (
      <div className={joinClassNames(cls['right-page'], cls['contact-page'])}>
        <PageIntro pageInfo={contactIntro} />
        <p>这里应该是一段很多很多的介绍嗷～</p>
        <p>请按照顺序填写表格</p>
        <div className={cls.dragFile} onDrop={this.dragFile} onDragOver={dragOver} />
        <div>
          {/* <input type="file" id="inputCSV" accept=".csv" onChange={this.handleFileUpload} /> */}
          <label htmlFor="fatherOrNot" >
            <input id="fatherOrNot" type="checkbox" ref={(c) => { this.fatherOrNot = c }} />
              是否保存父母联系方式
          </label>
        </div>
        <div ref={(c) => { this.clickToDownloadVCF = c }} className={cls.clickToDownload}>
          <p><a style={{ style: '10px', color: 'white' }}>点击下载</a></p>
        </div>
      </div>
    )
  }
}

export default Contact
