export function getMonster(index) {
  const monster = [
    {test: 0}, //0 index empty for simplicity
    {
      name: 'jackelope',
      hands: {left: 'claws', right: 'claws', both: '', tail: ''},
      skills: [{claws: 1}],
      armor: 'fur',
      stats: {
        baseHealth: 10,
        health: 10, 
        healthRegen: 0,
        action: 10,
        actionRegen: 0, 
        attack: 3, 
        attackBonus: {
          left: 0,
          right: 0,
          both: 0,
          tail: 0
        },
        defense: 1, 
        defenseBonus: 0,
        init: 1,
        initBonus: {
          left: 0,
          right: 0,
          both: 0,
          tail: 0
        },
        luck: 0,
        luckBonus: 0
      }
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


