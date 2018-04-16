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
      stat: 'health',
      att: 1,
      dur: 0,
      speed: 'veryFast',
      type: 'pierce',
    },
    daggerPierce: {
      stat: 'health',
      att: 2,
      dur: 0,
      speed: 'fast',
      type: 'pierce',
    },
    daggerSlash: {
      stat: 'health',
      att: 2,
      dur: 0,
      speed: 'fast',
      type: 'slash',
    },
    swordPierce: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'medium',
      type: 'pierce',
    },
    swordSlash: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'medium',
      type: 'slash',
    },
    greatswordPierce: {
      stat: 'health',
      att: 4,
      dur: 0,
      speed: 'verySlow',
      type: 'pierce',
    },
    greatswordSlash: {
      stat: 'health',
      att: 4,
      dur: 0,
      speed: 'verySlow',
      type: 'slash',
    },
    axe: {
      stat: 'health',
      att: 4,
      dur: 0,
      speed: 'slow',
      type: 'slash',
    },
    greataxe: {
      stat: 'health',
      att: 5,
      dur: 0,
      speed: 'verySlow',
      type: 'slash',
    },
    axeThrow: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'fast',
      type: 'slash',
    },
    hammer: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'slow',
      type: 'bash',
    },
    greathammer: {
      stat: 'health',
      att: 4,
      dur: 0,
      speed: 'verySlow',
      type: 'bash',
    },
    hammerThrow: {
      stat: 'health',
      att: 2,
      dur: 0,
      speed: 'fast',
      type: 'slash',
    },
    halberd: {
      att: 3,
      dur: 0,
      speed: 'slow',
      type: 'slash',
    },
    becDeCorbin: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'slow',
      type: 'bash',
    },
    pike: {
      att: 3,
      dur: 0,
      speed: 'slow',
      type: 'pierce',
    },
    bowPierce: {
      stat: 'health',
      att: 2,
      dur: 0,
      speed: 'slow',
      type: 'pierce',
    },
    bowSlash: {
      stat: 'act',
      att: 2,
      dur: 0,
      speed: 'slow',
      type: 'slash',
    },
    bowBash: {
      stat: 'act',
      att: 2,
      dur: 0,
      speed: 'slow',
      type: 'bash',
    },
    crossbowPierce: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'verySlow',
      type: 'pierce',
    },
    crossbowSlash: {
      stat: 'health',
      att: 3,
      dur: 0,
      speed: 'verySlow',
      type: 'slash',
    },
    crossbowBash: {
      stat: 'act',
      att: 3,
      dur: 0,
      speed: 'verySlow',
      type: 'bash',
    },
    claws: {
      stat: 'health',
      att: 2,
      dur: 0,
      speed: 'fast',
      type: 'slash',
    },
    shieldBash: {
      stat: 'act',
      att: 2,
      dur: 0,
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
    med: -1,
    heavy: -2,
    ultra: -3,
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

export function gemColorEnum() {
  const colors = {
    att: 'red',
    def: 'blue',
    luck: 'green',
    init: 'purple',
    black: 'black'
  }
  return colors;
}
