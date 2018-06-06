export default function (path, method, data) {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest()
    ajax.open(method, path, true)
    // ajax.setRequestHeader(requestHeader.header, requestHeader.type)
    ajax.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (JSON.parse(this.responseText).status === 200) {
          resolve(this.responseText)
        } else {
          reject(this.responseText)
        }
      }
    }
    ajax.send(data)
  })
}
