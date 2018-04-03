export function compileSkills() {
  return Object.assign(weaponSkillEnum(), otherSkillEnum());
}

//would like to figure out how to do this by passing a function

export function weaponSkillEnum() {
  const skills = {
      throwingKnife: {
        skillName: 'Throwing Knife',
        weaponType: ['knife'],
        skillType: 'weapon',
        purchaseCost: 5,
        hands: 1,
        range: 2,
        falloff: false,
        secondarySkill: [{pierce: 'maimed'}]
      },
      dagger: {
        skillName: 'Dagger',
        weaponType: ['daggerPierce', 'daggerSlash'],
        skillType: 'weapon',
        purchaseCost: 5,
        hands: 1,
        range: 1,
        falloff: false,
        secondarySkill: [{pierce: 'punctured'}, {slash: 'bleeding'}]
      },
      sword: {
        skillName: 'Sword',
        weaponType: ['swordPierce', 'swordSlash'],
        skillType: 'weapon',
        purchaseCost: 10,
        hands: 1,
        range: 1,
        falloff: false,
        secondarySkill: [{pierce: 'punctured'}, {slash: 'bleeding'}]
      },
      greatSword: {
        skillName: 'Greatsword',
        weaponType: ['greatswordPierce', 'greatswordSlash'],
        skillType: 'weapon',
        purchaseCost: 15,
        hands: 2,
        range: 1,
        falloff: false,
        secondarySkill: [{pierce: 'punctured'}, {slash: 'bleeding'}]
      },
      bow: {
        skillName: 'Bow',
        weaponType: ['bowPierce', 'bowSlash', 'bowBash'],
        skillType: 'weapon',
        purchaseCost: 10,
        hands: 2,
        range: 4,
        falloff: false,
        secondarySkill: [{pierce: 'hamstring'}, {slash: 'waylay'}, {bash: 'confuse'}]
      },
      claws: {
        skillName: 'Claws',
        weaponType: ['swordSlash'],
        skillType: 'weapon',
        hands: 1,
        purchaseCost: 0,
        falloff: false,
        secondarySkill: [{slash: 'bleeding'}]
      }
  }
  return skills;
}

export function otherSkillEnum() {
  const skills = {
    heal: {
      skillName: 'Heal',
      skillType: 'buff', //buff, debuff 
      skillLevel: 0, //skill level
      stateApplied: 'heal',
      purchaseCost: 10, //purchase cost
      hasPurchased: false,
      actionCost: 10, //action cost
    }
  };
  return skills;
}
