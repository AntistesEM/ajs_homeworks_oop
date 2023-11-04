export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!typeList.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
