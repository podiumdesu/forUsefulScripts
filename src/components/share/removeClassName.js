export default function (classString, removeClass) {
  classString = classString.split(' ')
  classString.pop(removeClass)
  return classString
}
