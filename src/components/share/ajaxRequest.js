export default function (path, method, data) {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest()
    ajax.open(method, path, true)
    // ajax.setRequestHeader(requestHeader.header, requestHeader.type)
    ajax.onreadystatechange = function () {
      if (this.readyState === 4) {
        resolve(this.responseText)
      }
    }
    ajax.send(data)
  })
}
