// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('invalid phone number too short', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

// isEmail tests
test('valid email simple', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('valid email no dot in username', () => {
  expect(isEmail('first@gmail.com')).toBe(true);
});

test('invalid email missing at symbol', () => {
  expect(isEmail('student.ucsd.edu')).toBe(false);
});

test('invalid email missing domain', () => {
  expect(isEmail('student@')).toBe(false);
});

// isStrongPassword tests
test('valid strong password letters only 1', () => {
  expect(isStrongPassword('Password')).toBe(true);
});

test('valid strong password letters only 2', () => {
  expect(isStrongPassword('helloworld')).toBe(true);
});

test('invalid password too short 1', () => {
  expect(isStrongPassword('P')).toBe(false);
});

test('invalid password too short 2', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate tests
test('valid date with slashes', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('valid date with slashes 2', () => {
  expect(isDate('01/01/2026')).toBe(true);
});

test('invalid date letters', () => {
  expect(isDate('not a date')).toBe(false);
});

test('invalid date with dashes', () => {
  expect(isDate('2026-12-25')).toBe(false);
});

// isHexColor tests
test('valid hex color lowercase', () => {
  expect(isHexColor('ffffff')).toBe(true);
});

test('valid hex color uppercase', () => {
  expect(isHexColor('ABCDEF')).toBe(true);
});

test('invalid hex color wrong characters', () => {
  expect(isHexColor('zzzzzz')).toBe(false);
});

test('invalid hex color too long', () => {
  expect(isHexColor('ffffffff')).toBe(false);
});