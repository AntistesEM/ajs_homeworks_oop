import Character from '../BaseClass';

test('test class Character', () => {
  const result = new Character('Heroes', 'Bowman');

  expect(result).toEqual({
    name: 'Heroes',
    type: 'Bowman',
    health: 100,
    level: 1,
  });
});

test('should throw an error if name is not a string or its length is less than 2 or greater than 10', () => {
  expect(() => new Character(123, 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  expect(() => new Character('Lorem ipsum dolor sit amet', 'Swordsman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Incorrect character type', () => {
  expect(() => new Character('Heroes', 'Swordsman2')).toThrow('Некорректный тип персонажа');
});
