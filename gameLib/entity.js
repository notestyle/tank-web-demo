import { CONFIG } from './utils'

class Sprite {
  constructor({ position, context, width, height, color, image, maxFrames = 1, imgW, imgH, frames = 0 }) {
    this.position = {
      x: position.x * CONFIG.SQUARE_SIZE,
      y: position.y * CONFIG.SQUARE_SIZE,
    }
    this.height = CONFIG.SQUARE_SIZE * width
    this.width = CONFIG.SQUARE_SIZE * height
    this.imgW = imgW
    this.imgH = imgH
    this.context = context
    this.color = color
    this.image = new Image()
    this.image.src = image
    this.frames = frames
    this.maxFrames = maxFrames
    this.elapsed = 0
    this.hold = 15
  }

  draw() {
    this.context.fillStyle = this.color

    this.context.drawImage(
      this.image,
      this.frames * this.width,
      0,
      this.imgW / this.maxFrames,
      this.imgH,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )

    // this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.elapsed++

    if (this.elapsed % this.hold === 0) {
      this.frames++

      if (this.frames >= this.maxFrames) this.frames = 0
    }
    this.draw()
  }
}

class Tank extends Sprite {
  constructor({
    position,
    context,
    velocity = {
      x: 0,
      y: 0,
    },
    color,
    type,
  }) {
    super({
      position,
      context,
      width: CONFIG.TANK.W,
      height: CONFIG.TANK.H,
      color,
      imgW: CONFIG.TANK[type].IMG.STAND.W,
      imgH: CONFIG.TANK[type].IMG.STAND.H,
      image: CONFIG.TANK[type].IMG.STAND.RIGHT,
      maxFrames: CONFIG.TANK[type].IMG.STAND.MAX,
    })
    this.velocity = velocity
    this.type = type
    this.health = CONFIG.TANK[type].HEALTH
    this.speed = CONFIG.TANK[type].SPEED
    this.power = CONFIG.TANK[type].POWER

    this.status = 'STAND'
    this.direction = 'right'
    this.target = {
      x: position.x * CONFIG.SQUARE_SIZE,
      y: position.y * CONFIG.SQUARE_SIZE,
    }
    this.bullets = []
  }

  move(direction, move = '') {
    this.status = 'MOVE'
    this.direction = direction
    let speed = this.speed

    switch (direction) {
      case 'up':
        speed = (move.match(/U/g) || []).length
        this.target.y = this.target.y - CONFIG.SQUARE_SIZE
        this.velocity.y = -speed
        break
      case 'down':
        speed = (move.match(/D/g) || []).length
        this.target.y = this.target.y + CONFIG.SQUARE_SIZE
        this.velocity.y = speed
        break
      case 'right':
        speed = (move.match(/R/g) || []).length
        this.target.x = this.target.x + CONFIG.SQUARE_SIZE
        this.velocity.x = speed
        break
      case 'left':
        speed = (move.match(/L/g) || []).length
        this.target.x = this.target.x - CONFIG.SQUARE_SIZE
        this.velocity.x = -speed
        break
    }
  }

  fire(direction) {
    this.direction = direction
    this.bullets.push(
      new Bullet({
        position: this.position,
        context: this.context,
        color: this.color,
        direction,
      })
    )
  }

  update() {
    this.image.src = CONFIG.TANK[this.type].IMG[this.status][this.direction.toUpperCase()]
    // console.log(CONFIG.TANK[this.type].IMG[this.status][this.direction.toUpperCase()])

    this.draw()

    if (this.target.x != this.position.x) {
      this.position.x += this.velocity.x
    } else {
      this.velocity.x = 0
    }

    if (this.target.y != this.position.y) {
      this.position.y += this.velocity.y
    } else {
      this.velocity.y = 0
    }
  }
}

class BaseTower extends Sprite {
  constructor({ position, context, color }) {
    super({
      position,
      context,
      width: CONFIG.BASETOWER.W,
      height: CONFIG.BASETOWER.H,
      color,
      image: CONFIG.BASETOWER.IMG.SRC,
      imgW: CONFIG.BASETOWER.IMG.W,
      imgH: CONFIG.BASETOWER.IMG.H,
    })
    this.health = CONFIG.BASETOWER.HEALTH
    this.img = CONFIG.BASETOWER.IMG
  }
}

class Wall extends Sprite {
  constructor({ position, context, type }) {
    super({
      position,
      context,
      width: CONFIG.WALL.W,
      height: CONFIG.WALL.H,
      color: CONFIG.WALL[type].COLOR,
      image: CONFIG.WALL[type].IMG.SRC,
      imgH: CONFIG.WALL[type].IMG.H,
      imgW: CONFIG.WALL[type].IMG.W,
      maxFrames: CONFIG.WALL[type].IMG.MAX,
      frames: Math.floor(Math.random() * CONFIG.WALL[type].IMG.MAX),
    })
    this.type = type
    this.img = CONFIG.WALL[type].IMG
  }
}

class Road extends Sprite {
  constructor({ position, context }) {
    super({
      position,
      context,
      width: CONFIG.ROAD.W,
      height: CONFIG.ROAD.H,
      color: CONFIG.ROAD.COLOR,
      image: CONFIG.ROAD.IMG.SRC,
      imgW: CONFIG.ROAD.IMG.W,
      imgH: CONFIG.ROAD.IMG.H,
      maxFrames: CONFIG.ROAD.IMG.MAX,
    })
    this.randomX = Math.floor(Math.random() * this.maxFrames)
    this.randomY = Math.floor(Math.random() * this.maxFrames)
    this.img = CONFIG.ROAD.IMG
  }

  draw() {
    this.context.drawImage(
      this.image,
      (this.randomX * this.imgW) / this.maxFrames,
      (this.randomY * this.imgH) / this.maxFrames,
      this.imgW / this.maxFrames,
      this.imgH / this.maxFrames,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }
}

class Bullet extends Sprite {
  constructor({ position, context, direction }) {
    super({
      position: { x: 0, y: 0 },
      context,
      width: ['up', 'down'].includes(direction) ? CONFIG.BULLET.H : CONFIG.BULLET.W,
      height: ['up', 'down'].includes(direction) ? CONFIG.BULLET.W : CONFIG.BULLET.H,
      color: CONFIG.BULLET.COLOR,
      image: CONFIG.BULLET.IMG.RIGHT,
      imgW: CONFIG.BULLET.IMG.W,
      imgH: CONFIG.BULLET.IMG.H,
    })
    this.speed = CONFIG.BULLET.SPEED
    this.direction = direction // up, down, right, left

    this.velocity = { x: 0, y: 0 }

    switch (direction) {
      case 'up':
        this.velocity.y = -CONFIG.BULLET.SPEED
        this.position = {
          x: position.x + CONFIG.SQUARE_SIZE - (CONFIG.BULLET.W * CONFIG.SQUARE_SIZE) / 2,
          y: position.y,
        }
        break
      case 'down':
        this.velocity.y = CONFIG.BULLET.SPEED
        this.position = {
          x: position.x + CONFIG.SQUARE_SIZE - (CONFIG.BULLET.W * CONFIG.SQUARE_SIZE) / 2,
          y: position.y + (CONFIG.TANK.W * CONFIG.SQUARE_SIZE) / 2,
        }
        break
      case 'right':
        this.velocity.x = CONFIG.BULLET.SPEED
        this.position = {
          x: position.x + (CONFIG.TANK.W * CONFIG.SQUARE_SIZE) / 2,
          y: position.y + CONFIG.SQUARE_SIZE - (CONFIG.BULLET.W * CONFIG.SQUARE_SIZE) / 2,
        }
        break
      case 'left':
        this.velocity.x = -CONFIG.BULLET.SPEED
        this.position = {
          x: position.x,
          y: position.y + CONFIG.SQUARE_SIZE - (CONFIG.BULLET.W * CONFIG.SQUARE_SIZE) / 2,
        }
        break
    }
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if (
      this.position.x < 0 ||
      this.position.y < 0 ||
      this.position.x > CONFIG.BOARD_WIDTH * CONFIG.SQUARE_SIZE ||
      this.position.y > CONFIG.BOARD_HEIGHT * CONFIG.SQUARE_SIZE
    ) {
      delete this
      return
    }
  }
}

export { Sprite, Tank, BaseTower, Wall, Road, Bullet }
