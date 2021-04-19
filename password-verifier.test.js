const verifyPassword = require('./password-verifier.js')

test('Should be under 9 characters', () => {
    const password = "Test1"
    const output = hasRightLength(password);
  expect(output).toBeTruthy();
});

test('Should not be null', () => {
    const password = "Test2"
    const output = isNotNull(password);
  expect(output).toBeTruthy();
});

test('Should have 1 or more uppercases', () => {
    const password = "test3"
    const output = hasUpperCaseCharacter(password);
  expect(output).toBeTruthy();
});

