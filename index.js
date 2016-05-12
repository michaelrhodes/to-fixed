var min = Math.min
var max = Math.max
var a = '^(0*[1-9]{'
var b = '}).*$'

module.exports = function (number, n) {
  return isNaN(number) || isNaN(n) ? null :
    parseFloat((+number).toFixed(('' + number)
      .replace(/^[^\.]+\.?/, '')
      .replace(RegExp(a + upto(n) + b), '$1')
      .length
    ))
}

function upto (n) {
  var l = min(0, n)
  var h = max(0, n)
  return l !== h ? l + ',' + h : n
}
