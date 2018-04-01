export function stateEnum() {
  const states = {
    bleeding: {
      name: 'Rend',
      stat: 'health',
      targetSelf: false, //flag
      val: 2,
      dur: 5, 
      hasFalloff: true //flag
    },
    heal: {
      name: 'Heal',
      stat: 'health',
      targetSelf: true, //flag
      val: 10,
      dur: 1, 
      hasFalloff: false //flag
    },
    healing: {
      name: 'Bandage',
      stat: 'health',
      targetSelf: true, //flag
      val: 10,
      dur: 5, 
      hasFalloff: true //flag
    },
    punctured: {
    name: 'Punctured',
    stat: 'defense',
    targetSelf: false, //flag
    val: 3, //reduces armor by this much
    dur: 1, 
    hasFalloff: false //flag
    },
    shook: {
      name: 'Shaken',
      stat: 'attack',
      targetSelf: false, //flag
      val: 2, //reduces attack by this much
      dur: 1, 
      hasFalloff: false //flag
    },
    maimed: {
      name: 'Maimed',
      stat: 'speed',
      targetSelf: false, //flag
      val: 1, //can't move this turn
      dur: 3, 
      hasFalloff: false //flag
    },
  }
  return states;
}

export function weaponTypeEnum() {
  const weaponTypes = { 
    knife: {
      damLevel: 1,
      speed: 'veryFast',
      type: 'pierce',
      hands: 1,
      minRange: 1,
      maxRange: 2,
      falloff: false
    },
    daggerpierce: {
      damLevel: 2,
      speed: 'fast',
      type: 'pierce',
      hands: 1,
      minRange: 1,
      maxRange: 1,
      falloff: false
    },
    daggerslash: {
      damLevel: 2,
      speed: 'fast',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 1,
      falloff: false
    },
    swordpierce: {
      damLevel: 3,
      speed: 'medium',
      type: 'pierce',
      hands: 1,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    swordslash: {
      damLevel: 3,
      speed: 'medium',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    greatswordpierce: {
      damLevel: 4,
      speed: 'verySlow',
      type: 'pierce',
      hands: 2,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    greatswordslash: {
      damLevel: 4,
      speed: 'verySlow',
      type: 'slash',
      hands: 2,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    axe: {
      damLevel: 4,
      speed: 'slow',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    greataxe: {
      damLevel: 5,
      speed: 'verySlow',
      type: 'slash',
      hands: 2,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    axethrow: {
      damLevel: 3,
      speed: 'fast',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 2,
      falloff: false,
    },
    hammer: {
      damLevel: 3,
      speed: 'slow',
      type: 'bash',
      hands: 1,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    greathammer: {
      damLevel: 4,
      speed: 'verySlow',
      type: 'bash',
      hands: 2,
      minRange: 1,
      maxRange: 1,
      falloff: false,
    },
    hammerThrow: {
      damLevel: 2,
      speed: 'fast',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 2,
      falloff: false,
    },
    halberd: {
      damLevel: 3,
      speed: 'slow',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 2,
      falloff: false,
    },
    becdecorbin: {
      damLevel: 3,
      speed: 'slow',
      type: 'bash',
      hands: 1,
      minRange: 1,
      maxRange: 2,
      falloff: false,
    },
    pike: {
      damLevel: 3,
      speed: 'slow',
      type: 'pierce',
      hands: 1,
      minRange: 1,
      maxRange: 2,
      falloff: false,
    },
    bowpierce: {
      damLevel: 2,
      speed: 'slow',
      type: 'pierce',
      hands: 2,
      minRange: 2,
      maxRange: 4,
      falloff: true,
    },
    bowslash: {
      damLevel: 2,
      speed: 'slow',
      type: 'slash',
      hands: 2,
      minRange: 2,
      maxRange: 4,
      falloff: true,
    },
    bowbash: {
      damLevel: 2,
      speed: 'slow',
      type: 'bash',
      hands: 2,
      minRange: 2,
      maxRange: 4,
      falloff: true,
    },
    crossbowpierce: {
      damLevel: 3,
      speed: 'verySlow',
      type: 'pierce',
      hands: 1,
      minRange: 1,
      maxRange: 3,
      falloff: true,
    },
    crossbowslash: {
      damLevel: 3,
      speed: 'verySlow',
      type: 'slash',
      hands: 1,
      minRange: 1,
      maxRange: 3,
      falloff: true,
    },
    crossbowbash: {
      damLevel: 3,
      speed: 'verySlow',
      type: 'bash',
      hands: 1,
      minRange: 1,
      maxRange: 3,
      falloff: true,
    }
  }
  return weaponTypes;
}

export function armorInitEnum() {
  const armorClasses = { 
    none: 1,
    light: 0,
    medium: -1,
    heavy: -2,
    ultra: -3,
    buckler: 0,
    shield: -1,
    towerShield: -2
  }
  return armorClasses;
}

export function statusInitEnum() {
  const statusInit = {
    slow: -3,
    fast: 3
  }
  return statusInit;
}

export function weaponSpeedEnum() {
  const weaponSpeeds = {
    weaponSpeedEnum: {
      veryFast: {
        init: 2,
        action: 1
      },
      fast: {
        init: 1,
        action: 2
      },
      medium: {
        init: 0,
        action: 3
      },
      slow: {
        init: -1,
        action: 4
      },
      extraSlow: {
        init: -2,
        action: 5
      }
    } // actiona and init modifiers for weapon speed
  }
  return weaponSpeeds;
}

export function armorTypeEnum() {
  const armorTypes = {
    flesh : {
      name: 'Flesh',
      cost: 0,
      def: 0,
      weight: 'none'
    },
    fur: {
      name: 'Fur',
      cost: 10,
      def: 1,
      weight: 'light'
    },    
    padded : {
      name: 'Padded',
      cost: 20,
      def: 2,
      weight: 'light'
    },    
    leather:{
      name: 'Leather',
      cost: 30,
      def: 3,
      weight: 'light'
    },    
    studded: {
      name: 'Studded',
      cost: 40,
      def: 4,
      weight: 'light'
    },    
    hide:{
      name: 'Animal Hide',
      cost: 50,
      def: 5,
      weight: 'medium'
    },
    bone: {
      name: 'Animal Bone',
      cost: 60,
      def: 6,
      weight: 'medium'
    },   
    scale:{
      name: 'Animal Scale',
      cost: 70,
      def: 7,
      weight: 'medium'
    },    
    chainmail: {
      name: 'Chain Mail',
      cost: 80,
      def: 8,
      weight: 'medium'
    },    
    banded:{
      name: 'Banded',
      cost: 90,
      def: 9,
      weight: 'heavy'
    },    
    chitin:{
      name: 'Insect Chitin',
      cost: 100,
      def: 10,
      weight: 'heavy'
    },    
    platemail:{
      name: 'Plate Mail',
      cost: 110,
      def: 11,
      weight: 'heavy'
    },    
    rock:{
      name: 'Rock',
      cost: 115,
      def: 12,
      weight: 'heavy'
    },    
    dragonscale: {
      name: 'Dragon Scale',
      cost: 120,
      def: 13,
      weight: 'ultra'
    }, 
    buckler: {
      name: 'Buckler',
      cost: 20,
      def: 2,
      weight: 'light'
    },
    shield: {
      name: 'Shield',
      cost: 30,
      def: 3,
      weight: 'light'
    },
    towerShield: {
      name: 'Tower Shield',
      cost: 40,
      def: 4,
      weight: 'light'
    }
  }   
  return armorTypes;
}