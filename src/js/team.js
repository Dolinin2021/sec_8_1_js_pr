export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Дублирование');
    }
  }

  addAll(...theArgs) {
    for (const character of theArgs) {
      this.members.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
