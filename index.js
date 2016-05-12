var a = '^(0*[1-9]{1,'
var b = '}).*$'

module.exports = function (number, n) {
  return isNaN(number) || isNaN(n) ? null :
    parseFloat((+number).toFixed(('' + number)
      .replace(/^[^\.]+\.?/, '')
      .replace(RegExp(a + n + b), '$1')
      .length
    ))
}
