export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getName(sex) {
  const boy = [
    "Aghon",
    "Boal",
    "Cydara",
    "Duba",
    "Eik",
    "Fyn",
    "Gryn",
    "Hacton",
    "Isen",
    "Jex",
    "Laderic",
    "Meowol",
    "Noford",
    "Ocarin",
    "Pyder",
    "Qupar",
    "Ryfar",
    "Syr",
    "Tuk",
    "Uerthe",
    "Volux",
    "Wyeth",
    "Xulo",
    "Y'reth",
    "Zio"
  ];

  const girl = [
    "Awnia",
    "Brana",
    "Calina",
    "Dylena",
    "Enoka",
    "Fayne",
    "Gvene",
    "Hildandi",
    "Jezzine",
    "Kassina",
    "Lyna",
    "Mylene",
    "Niraya",
    "Orwyne",
    "Peri'el",
    "Q'ara",
    "Ryiah",
    "Sina",
    "Tressa",
    "Useli",
    "Voladea",
    "Wyeta",
    "Xina",
    "Yysara",
    "Zephale"
  ];
  return (sex === 'boy') ? rando(boy) : rando (girl);
}

export function getMonster(index) {
  const monster = [
    "jackelope",
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
