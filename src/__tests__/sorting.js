import sorting from '../sorting';

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('testing function sorting', () => {
  const result = sorting(heroes);
  expect(result).toEqual(expected);
});
