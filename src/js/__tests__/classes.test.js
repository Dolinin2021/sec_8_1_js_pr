import Team from '../team';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('add method works correctly', () => {
  const team = new Team();
  const daemon = new Daemon('Daemon');
  team.add(daemon);
  const example = [
    {
      name: 'Daemon',
      health: 100,
      level: 1,
      type: 'Magician',
      attack: 10,
      defence: 40,
    },
  ];
  expect(team.Daemon).toEqual(example.Daemon);
});

test('correct operation of the addAll method', () => {
  const team = new Team();
  const bowman = new Bowman('Bowman');
  const swordsman = new Swordsman('Swordsman');
  team.addAll(bowman, swordsman);
  const example = [
    {
      name: 'Bowman',
      health: 100,
      level: 1,
      type: 'Bowman',
      attack: 25,
      defence: 25,
    },
    {
      name: 'Swordsman',
      health: 100,
      level: 1,
      type: 'Swordsman',
      attack: 40,
      defence: 10,
    },
  ];
  expect(team.Bowman).toEqual(example.Bowman);
  expect(team.Swordsman).toEqual(example.Swordsman);
});

test('convert array to set', () => {
  const team = new Team();
  const bowman = new Bowman('Bowman');
  const swordsman = new Swordsman('Swordsman');
  const magician = new Magician('Magician');
  const daemon = new Daemon('Daemon');
  const undead = new Undead('Undead');
  const zombie = new Zombie('Zombie');
  team.add(daemon);
  team.add(undead);
  team.add(zombie);
  team.addAll(bowman, swordsman, magician);
  expect(team.toArray()).toEqual(expect.arrayContaining(team.toArray()));
});

test('duplication', () => {
  const team = new Team();
  const daemon = new Daemon('Daemon');
  team.add(daemon);
  expect(() => team.add(daemon)).toThrow();
});
