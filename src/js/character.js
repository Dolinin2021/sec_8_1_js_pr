export default class Character {
  constructor(name, type) {
    if ((typeof (name) === 'string' && typeof (type) === 'string')
        && (name.length >= 2 && name.length <= 10)
        && (type === 'Bowman' || type === 'Swordsman'
        || type === 'Magician' || type === 'Daemon'
        || type === 'Undead' || type === 'Zombie')) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error(
        'name - строка, min - 2 символа, max - 10\n'
                + 'type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie\n',
      );
    }
  }
}
