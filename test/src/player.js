import rando from './helpers.js';

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


export function compileSkills() {
  const skills = [];
  const weaponSkills = weaponSkillEnum();
  const otherSkills = otherSkillEnum();
  weaponSkills.forEach(e=>skills.push(e))
  otherSkills.forEach(e=>skills.push(e))
  return skills;
}

//would like to figure out how to do this by passing a function

export function weaponSkillEnum() {
  const skills = [
    {
      weaponName: 'Throwing Knife',
      weaponType: ['knife'],
      skillType: 'weapon',
      skillLevel: 0,
      purchaseCost: 5,
      qty: 0,
      secondarySkill: [{pierce: 'maimed'}]
    },
    {
      weaponName: 'Dagger',
      weaponType: ['daggerpierce', 'daggerslash'],
      skillType: 'weapon',
      skillLevel: 0,
      purchaseCost: 5,
      qty: 0,
      secondarySkill: [{pierce: 'punctured'}, {slash: 'bleeding'}]
    },
    {
      weaponName: 'Sword',
      weaponType: ['swordpierce', 'swordslash'],
      skillType: 'weapon',
      skillLevel: 0,
      purchaseCost: 10,
      qty: 0,
      secondarySkill: [{pierce: 'punctured'}, {slash: 'bleeding'}]
    },
    {
      weaponName: 'Greatsword',
      weaponType: ['greatswordpierce', 'greatswordslash'],
      skillType: 'weapon',
      skillLevel: 0,
      purchaseCost: 15,
      qty: 0,
      secondarySkill: [{pierce: 'punctured'}, {slash: 'bleeding'}]
    },
    {
      weaponName: 'Bow',
      weaponType: ['bowpierce', 'bowslash', 'bowbash'],
      skillType: 'weapon',
      skillLevel: 0,
      purchaseCost: 10,
      qty: 0,
      secondarySkill: [{pierce: 'hamstring'}, {slash: 'waylay'}, {bash: 'confuse'}]
    },
    {
      weaponName: 'Claws',
      weaponType: ['swordslash'],
      skillType: 'weapon',
      skillLevel: 0,
      purchaseCost: 0,
      qty: 0,
      secondarySkill: [{slash: 'bleeding'}]
    }
  ]
  return skills;
}

export function otherSkillEnum(skillObj) {
  const skills = [
    {
      skillName: 'Heal',
      skillType: 'buff', //buff, debuff 
      skillLevel: 0, //skill level
      stateApplied: 'heal',
      purchaseCost: 10, //purchase cost
      actionCost: 10, //action cost
    }
  ];
  return skills;
}

