'use strict';
var test = require('tape');
var spacetime = require('./lib');

test('display-test', function(t) {
  var s = spacetime('Dec 4', 'new york')
  t.equal(s.timezone().display, 'EST', 'standard time - north');
  s = s.add(6, 'months')
  t.equal(s.timezone().display, 'EDT', 'daylight time');

  s = spacetime('Dec 4', 'easter island')
  t.equal(s.timezone().display, 'EASST', '\'summer\' time');
  s = s.add(6, 'months')
  t.equal(s.timezone().display, 'EAST', 'standard time - south');


  t.end();
});

test('weird-australia', function(t) {
  let s = spacetime('Dec 4', 'acst')
  t.equal(s.timezone().display, 'ACDT', 'Adelaide acst in dec');
  s = s.add(6, 'months')
  t.equal(s.timezone().display, 'ACST', 'Adelaide now acdt in july');

  // s = spacetime('Dec 4', 'darwin')
  // t.equal(s.timezone().display, 'ACST', 'darwin acst in dec');
  // s = s.add(6, 'months')
  // t.equal(s.timezone().display, 'ACST', 'still acst in july');

  t.end();
});