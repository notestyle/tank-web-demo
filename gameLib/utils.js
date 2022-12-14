const CONFIG = {
  SQUARE_SIZE: 24,
  BOARD_WIDTH: 0,
  BOARD_HEIGHT: 0,
  BASETOWER: {
    W: 2,
    H: 2,
    HEALTH: 101,
    IMG: {
      W: 64,
      H: 64,
      SRC: './game/map/barracks.png',
    },
  },
  BULLET: {
    W: 0.4,
    H: 1,
    SPEED: 6,
    IMG: {
      UP: './game/tank/bullet/up.png',
      DOWN: './game/tank/bullet/down.png',
      RIGHT: './game/tank/bullet/right.png',
      LEFT: './game/tank/bullet/left.png',
      W: 347,
      H: 225,
    },
    COLOR: 'yellow',
  },
  TANK: {
    W: 2,
    H: 2,
    HEAVY: {
      HEALTH: 100,
      SPEED: 1,
      POWER: 100,
      IMG: {
        MOVE: {
          UP: './game/tank/move/up.png',
          DOWN: './game/tank/move/down.png',
          RIGHT: './game/tank/move/right.png',
          LEFT: './game/tank/move/left.png',
          MAX: 1,
          W: 24,
          H: 24,
        },
        FIRE: {
          UP: './game/tank/fire/up.png',
          DOWN: './game/tank/fire/down.png',
          RIGHT: './game/tank/fire/right.png',
          LEFT: './game/tank/fire/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
        STAND: {
          UP: './game/tank/stand/up.png',
          DOWN: './game/tank/stand/down.png',
          RIGHT: './game/tank/stand/right.png',
          LEFT: './game/tank/stand/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
        DEAD: {
          UP: './game/tank/dead/up.png',
          DOWN: './game/tank/dead/down.png',
          RIGHT: './game/tank/dead/right.png',
          LEFT: './game/tank/dead/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
      },
    },
    NORMAL: {
      HEALTH: 50,
      SPEED: 2,
      POWER: 50,
      IMG: {
        MOVE: {
          UP: './game/tank/move/up.png',
          DOWN: './game/tank/move/down.png',
          RIGHT: './game/tank/move/right.png',
          LEFT: './game/tank/move/left.png',
          MAX: 1,
          W: 24,
          H: 24,
        },
        FIRE: {
          UP: './game/tank/fire/up.png',
          DOWN: './game/tank/fire/down.png',
          RIGHT: './game/tank/fire/right.png',
          LEFT: './game/tank/fire/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
        STAND: {
          UP: './game/tank/stand/up.png',
          DOWN: './game/tank/stand/down.png',
          RIGHT: './game/tank/stand/right.png',
          LEFT: './game/tank/stand/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
        DEAD: {
          UP: './game/tank/dead/up.png',
          DOWN: './game/tank/dead/down.png',
          RIGHT: './game/tank/dead/right.png',
          LEFT: './game/tank/dead/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
      },
    },
    LIGHT: {
      HEALTH: 25,
      SPEED: 3,
      POWER: 25,
      IMG: {
        MOVE: {
          UP: './game/tank/move/up.png',
          DOWN: './game/tank/move/down.png',
          RIGHT: './game/tank/move/right.png',
          LEFT: './game/tank/move/left.png',
          MAX: 1,
          W: 24,
          H: 24,
        },
        FIRE: {
          UP: './game/tank/fire/up.png',
          DOWN: './game/tank/fire/down.png',
          RIGHT: './game/tank/fire/right.png',
          LEFT: './game/tank/fire/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
        STAND: {
          UP: './game/tank/stand/up.png',
          DOWN: './game/tank/stand/down.png',
          RIGHT: './game/tank/stand/right.png',
          LEFT: './game/tank/stand/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
        DEAD: {
          UP: './game/tank/dead/up.png',
          DOWN: './game/tank/dead/down.png',
          RIGHT: './game/tank/dead/right.png',
          LEFT: './game/tank/dead/left.png',
          MAX: 1,
          W: 48,
          H: 48,
        },
      },
    },
  },
  ROAD: {
    W: 1,
    H: 1,
    IMG: {
      SRC: './game/map/road.png',
      W: 93,
      H: 93,
      MAX: 3,
    },
    COLOR: 'grey',
  },
  WALL: {
    W: 1,
    H: 1,
    IRON: {
      IMG: {
        SRC: './game/map/iron.png',
        MAX: 1,
        W: 24,
        H: 24,
      },
      COLOR: 'rgb(229 229 229)',
    },
    BLOCK: {
      IMG: {
        SRC: './game/map/bush.png',
        MAX: 1,
        W: 24,
        H: 24,
      },
      COLOR: 'rgb(34 197 94)',
    },
    WATER: {
      IMG: {
        SRC: './game/map/water2.png',
        MAX: 4,
        W: 128,
        H: 32,
      },
      COLOR: 'rgb(103 232 249)',
    },
  },
}

const MAP_ITEM = {
  0: 'EMPTY',
  1: 'BLOCK',
  2: 'IRON',
  3: 'WATER',
}

const MOVE_ITEM = {
  U: 'up',
  D: 'down',
  R: 'right',
  L: 'left',
}

const getDirection = (value) => {
  return (value && MOVE_ITEM[value[1]]) || 'unknown'
}

export { CONFIG, MAP_ITEM, getDirection }
