import rando from './helpers.js';

export function getMonster(index) {
  const monster = [
    {
      name: 'jackelope',
      hands: {left: '', right: 'Claws'},
      armor: 'none',
      attack: 3,
      defense: 1,
      health: 20,
      action: 10,
      init: 1
    },
    "zombie",
    "mummy",
    "gnome",
    "kobold",
    "treant",
    "archaeopteryx",
    "goblin",
    "catoblepasu",
    "phantom",
    "dimorphodon",
    "wisp",
    "orc",
    "satyr",
    "lamia",
    "harpy",
    "ghoul",
    "shambler",
    "centaur",
    "troll",
    "argos",
    "raptor",
    "cyclops",
    "minotaur",
    "golem",
    "insectoid",
    "triceratops",
    "wendigo",
    "griffin",
    "chimera",
    "necromancer",
    "succubus",
    "manticore",
    "flayer",
    "medusa",
    "vampire",
    "haetae",
    "gibberer",
    "t-rex",
    "demon",
    "ifrit",
    "cerberus",
    "hydra",
    "incubus",
    "devil",
    "dragon",
    "behemoth",
    "death",
    "balrog"
  ];
  return monster[index];
}


