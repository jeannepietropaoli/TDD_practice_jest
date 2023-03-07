import sum from '../modules/sum';

test('add positive integers', () => {
  expect(sum(1, 2)).toBe(3);
});


test('add positive and negative integers', () => {
  expect(sum(1, -2)).toBe(-1);
});

test('add negative integers', () => {
  expect(sum(-1, -2)).toBe(-3);
});

