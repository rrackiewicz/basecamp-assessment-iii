export function statusEnum() {
  const status = {
    rend: {
      name: 'Rend',
      status: 'is bleeding for',
      stat: 'health',
      cost: ['black', 'black'],
      targetSelf: false, //flag
      val: -2,
      dur: 5, 
      hasFalloff: true //flag
    },
    heal: {
      name: 'Heal',
      status: 'healed for',
      stat: 'health',
      cost: ['black'],
      targetSelf: true, //flag
      val: 10,
      dur: 1, 
      hasFalloff: false //flag
    },
    bandage: {
      name: 'Bandage',
      status: 'is healing for',
      stat: 'health',
      cost: ['black'],
      targetSelf: true, //flag
      val: 10,
      dur: 5, 
      hasFalloff: true //flag
    },
    puncture: {
      name: 'Puncture',
      status: 'armor is reduced by',
      stat: 'def',
      cost: ['def'],
      targetSelf: false, //flag
      val: -3, 
      dur: 1, 
      hasFalloff: false //flag
    },
    shake: {
      name: 'Shake',
      status: 'attack power is reduced by',
      stat: 'att',
      cost: ['att'],
      targetSelf: false, //flag
      val: -2, 
      dur: 1, 
      hasFalloff: false //flag
    },
    maim: {
      name: 'Maim',
      status: 'is slowed',
      stat: 'speed',
      cost: ['black', 'black'],
      targetSelf: false, //flag
      val: -1, //can't move this turn
      dur: 1, 
      hasFalloff: false //flag
    },
  }
  return status;
}

export function weaponTypeEnum() {
  const weaponTypes = { 
    knife: {
      att: 1,
      speed: 'veryFast',
      type: 'pierce',
    },
    daggerPierce: {
      att: 2,
      speed: 'fast',
      type: 'pierce',
    },
    daggerSlash: {
      att: 2,
      speed: 'fast',
      type: 'slash',
    },
    swordPierce: {
      att: 3,
      speed: 'medium',
      type: 'pierce',
    },
    swordSlash: {
      att: 3,
      speed: 'medium',
      type: 'slash',
    },
    greatswordPierce: {
      att: 4,
      speed: 'verySlow',
      type: 'pierce',
    },
    greatswordSlash: {
      att: 4,
      speed: 'verySlow',
      type: 'slash',
    },
    axe: {
      att: 4,
      speed: 'slow',
      type: 'slash',
    },
    greataxe: {
      att: 5,
      speed: 'verySlow',
      type: 'slash',
    },
    axeThrow: {
      att: 3,
      speed: 'fast',
      type: 'slash',
    },
    hammer: {
      att: 3,
      speed: 'slow',
      type: 'bash',
    },
    greathammer: {
      att: 4,
      speed: 'verySlow',
      type: 'bash',
    },
    hammerThrow: {
      att: 2,
      speed: 'fast',
      type: 'slash',
    },
    halberd: {
      att: 3,
      speed: 'slow',
      type: 'slash',
    },
    becDeCorbin: {
      att: 3,
      speed: 'slow',
      type: 'bash',
    },
    pike: {
      att: 3,
      speed: 'slow',
      type: 'pierce',
    },
    bowPierce: {
      att: 2,
      speed: 'slow',
      type: 'pierce',
    },
    bowSlash: {
      att: 2,
      speed: 'slow',
      type: 'slash',
    },
    bowBash: {
      att: 2,
      speed: 'slow',
      type: 'bash',
    },
    crossbowPierce: {
      att: 3,
      speed: 'verySlow',
      type: 'pierce',
    },
    crossbowSlash: {
      att: 3,
      speed: 'verySlow',
      type: 'slash',
    },
    crossbowBash: {
      att: 3,
      speed: 'verySlow',
      type: 'bash',
    },
    claws: {
      att: 2,
      speed: 'fast',
      type: 'slash',
    },
    shieldBash: {
      att: 2,
      speed: 'fast',
      type: 'bash'
    }
  }
  return weaponTypes;
}

export function armorInitEnum() {
  const armorClasses = { 
    NA: 1,
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

export function zoneEnum() {
  const zones = ['','left','center','right','left', 'center', 'right'];
  return zones;
}

export function statColors() {
  const stats = {
    health: 'magenta',
    action: 'cyan',
    init: 'purple',
    luck: 'green',
    att: 'red',
    def: 'blue'
  }
  return stats;
}



export function weaponSpeedEnum() {
  const weaponSpeeds = {
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
    }
  return weaponSpeeds;
}

