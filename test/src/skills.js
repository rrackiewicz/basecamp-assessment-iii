export function compileSkills() {
  return Object.assign(weaponSkillEnum(), otherSkillEnum(), armorSkillEnum());
}

export function weaponSkillEnum() {
  const skills = {
      throwingKnife: {
        skillName: 'Throwing Knife',
        weaponType: ['knife'],
        skillType: 'weapon',
        purchaseCost: 5,
        hands: 1,
        minRange: 1,
        maxRange: 2,
        falloff: false,
        special: [{pierce: 'maim'}]
      },
      dagger: {
        skillName: 'Dagger',
        weaponType: ['daggerPierce', 'daggerSlash'],
        skillType: 'weapon',
        purchaseCost: 0,
        hands: 1,
        minRange: 1,
        maxRange: 1,
        falloff: false,
        special: [{pierce: 'puncture'}, {slash: 'rend'}]
      },
      sword: {
        skillName: 'Sword',
        weaponType: ['swordPierce', 'swordSlash'],
        skillType: 'weapon',
        purchaseCost: 10,
        hands: 1,
        minRange: 1,
        maxRange: 1,
        falloff: false,
        special: [{pierce: 'puncture'}, {slash: 'rend'}]
      },
      greatSword: {
        skillName: 'Greatsword',
        weaponType: ['greatswordPierce', 'greatswordSlash'],
        skillType: 'weapon',
        purchaseCost: 15,
        hands: 2,
        minRange: 1,
        maxRange: 1,
        falloff: false,
        special: [{pierce: 'puncture'}, {slash: 'rend'}]
      },
      bow: {
        skillName: 'Bow',
        weaponType: ['bowPierce', 'bowSlash', 'bowBash'],
        skillType: 'weapon',
        purchaseCost: 10,
        hands: 2,
        minRange: 2,
        maxRange: 4,
        falloff: true,
        special: [{pierce: 'hamstring'}, {slash: 'waylay'}, {bash: 'confuse'}]
      },
      claws: {
        skillName: 'Claws',
        weaponType: ['claws'],
        skillType: 'weapon',
        hands: 1,
        minRange: 1,
        maxRange: 1,
        purchaseCost: 0,
        falloff: false,
        special: [{slash: 'rend'}]
      },
      buckler: {
        skillName: 'Buckler',
        weaponType: ['shieldBash'],
        skillType: 'weapon',
        hands: 1,
        minRange: 1,
        maxRange: 1,
        purchaseCost: 20,
        falloff: false,
        special: [{bash: 'shake'}]
      },
      shield: {
        skillName: 'Shield',
        weaponType: ['shieldBash'],
        skillType: 'weapon',
        hands: 1,
        minRange: 1,
        maxRange: 1,
        purchaseCost: 30,
        falloff: false,
        special: [{bash: 'shake'}]
      },
      towerShield: {
        skillName: 'Tower Shield',
        weaponType: ['shieldBash'],
        skillType: 'weapon',
        hands: 1,
        minRange: 1,
        maxRange: 1,
        purchaseCost: 40,
        falloff: false,
        special: [{bash: 'shake'}]
      }

  }
  return skills;
}

export function otherSkillEnum() {
  const skills = {
    heal: {
      skillName: 'Heal',
      skillType: 'buff', 
      stateApplied: 'heal',
      purchaseCost: 10, 
      action: 10, 
    }
  };
  return skills;
}

export function armorSkillEnum() {
  const skills = {
    cloth : {
      skillName: 'Cloth',
      skillType: 'armor',
      purchaseCost: 0,
      def: 0,
      slots: 0,
      weight: 'NA'
    },
    fur: {
      skillName: 'Fur',
      skillType: 'armor',
      purchaseCost: 10,
      def: 1,
      slots: 1,
      weight: 'light'
    },    
    padded : {
      skillName: 'Padded',
      skillType: 'armor',
      purchaseCost: 20,
      def: 2,
      slots: 1,
      weight: 'light'
    },    
    leather:{
      skillName: 'Leather',
      skillType: 'armor',
      purchaseCost: 30,
      def: 3,
      slots: 1,
      weight: 'light'
    },    
    studded: {
      skillName: 'Studded',
      skillType: 'armor',
      purchaseCost: 40,
      def: 4,
      slots: 1,
      weight: 'light'
    },    
    hide:{
      skillName: 'Animal Hide',
      skillType: 'armor',
      purchaseCost: 50,
      def: 5,
      slots: 2,
      weight: 'med'
    },
    bone: {
      skillName: 'Animal Bone',
      skillType: 'armor',
      purchaseCost: 60,
      def: 6,
      slots: 2,
      weight: 'med'
    },   
    scale:{
      skillName: 'Animal Scale',
      skillType: 'armor',
      purchaseCost: 70,
      def: 7,
      slots: 2,
      weight: 'med'
    },    
    chainmail: {
      skillName: 'Chain Mail',
      skillType: 'armor',
      purchaseCost: 80,
      def: 8,
      slots: 2,
      weight: 'med'
    },    
    banded:{
      skillName: 'Banded',
      skillType: 'armor',
      purchaseCost: 90,
      def: 9,
      slots: 3,
      weight: 'heavy'
    },    
    chitin:{
      skillName: 'Insect Chitin',
      skillType: 'armor',
      purchaseCost: 100,
      def: 10,
      slots: 3,
      weight: 'heavy'
    },    
    platemail:{
      skillName: 'Plate Mail',
      skillType: 'armor',
      purchaseCost: 110,
      def: 11,
      slots: 3,
      weight: 'heavy'
    },    
    rock:{
      skillName: 'Rock',
      skillType: 'armor',
      purchaseCost: 115,
      def: 12,
      slots: 3,
      weight: 'heavy'
    },    
    dragonscale: {
      skillName: 'Dragon Scale',
      skillType: 'armor',
      purchaseCost: 120,
      def: 13,
      slots: 4,
      weight: 'ultra'
    }, 
    buckler: {
      skillName: 'Buckler',
      skillType: 'armor',
      purchaseCost: 20,
      def: 2,
      slots: 1,
      weight: 'light'
    },
    shield: {
      skillName: 'Shield',
      skillType: 'armor',
      purchaseCost: 30,
      def: 3,
      slots: 2,
      weight: 'med'
    },
    towerShield: {
      skillName: 'Tower Shield',
      skillType: 'armor',
      purchaseCost: 40,
      def: 4,
      slots: 3,
      weight: 'heavy'
    }, 
    dragonScaleShield : {
      skillName: 'Dragon Scale Shield',
      skillType: 'armor',
      purchaseCost: 50,
      def: 5,
      slots: 4,
      weight: 'ultra'
    }
  }   
  return skills;
}
