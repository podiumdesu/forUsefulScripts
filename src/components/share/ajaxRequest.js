export default function (path, method, data) {
  const ajax = new XMLHttpRequest()
  ajax.open(method, path, true)
  ajax.setRequestHeader('Content-type', 'application/json')
  ajax.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log(this.responseText)
      return this.responseText
    }
  }
  ajax.send(JSON.stringify(data))
}
