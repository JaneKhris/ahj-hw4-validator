/* global test, expect */

import luhnCheck from '../luhnCheck';

test.each([
  ['4539446492714008', true],
  ['6011801901033881', true],
  ['30185267799495', true],
  ['4026415269601375', true],
  ['5236094867659961', true],
  ['3538909444851478', true],
  ['378754632231821', true],
  ['4539446492714007', false],
  ['6011801901033880', false],
  ['30185267799494', false],
  ['4026415269601374', false],
  ['5236094867659960', false],
  ['3538909444851477', false],
  ['378754632231820', false],
])('test luhnCheck function', (number, expected) => {
  expect(luhnCheck(number)).toEqual(expected);
});
