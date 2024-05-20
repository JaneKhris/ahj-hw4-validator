/* global test, expect */

import getSystem from '../getSystem';

test.each([
  // ['4539446492714008', ['visa', 16]],
  ['6011801901033881', ['discover', 16]],
  ['30185267799495', ['diners', 14]],
  ['4026415269601375', ['visa', 16]],
  ['5236094867659961', ['mastercard', 16]],
  ['3538909444851478', ['jcb', 16]],
  ['378754632231821', ['ae', 15]],
  ['243', ['mir', 16]],
  ['1', false],
])('test getSystem function', (number, expected) => {
  expect(getSystem(number)).toEqual(expected);
});
