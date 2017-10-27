var s = require('../')

var test = require('tape')

test('Rule 30 on array', function (t) {
  t.plan(1)
  t.same(s('Teemo'), [ '#9628cf', '#FFFFFF' ])
})