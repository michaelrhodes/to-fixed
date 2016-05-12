var test = require('tape')
var fixed = require('./index')

test('it expects numbers', function (assert) {
  assert.plan(3)
  assert.equal(fixed('s', 2), null)
  assert.equal(fixed(2, 's'), null)
  assert.equal(fixed(1, 2), 1)
})

test('it works', function (assert) {
  assert.plan(4)
  assert.equal(fixed(0.12, 2), 0.12)
  assert.equal(fixed(0.0000123, 2), 0.000012)
  assert.equal(fixed(1.2345, 1), 1.2)
  assert.equal(fixed(1.2, 10), 1.2)
})
