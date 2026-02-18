let a = sprites.create(img`
    . . . . .
    . . 2 . .
    2 2 2 2 2
    . . 2 . .
    . . . . .
`, SpriteKind.Player)

let b = sprites.create(img`
    . 5 5 5 .
    5 5 5 5 5
    5 5 5 5 5
    5 5 5 5 5
    . 5 5 5 .
`, SpriteKind.Enemy)

spriteUtils.rotate(a, 45)
spriteUtils.setRotation(a, 90)
spriteUtils.faceToward(a, b)
spriteUtils.flipHorizontal(a)
spriteUtils.flipVertical(a)
spriteUtils.smoothRotate(a, 180, 500)
spriteUtils.setOpacity(a, 60)
spriteUtils.recolor(a, 2, 9)
spriteUtils.outline(a, 1)

let distance = spriteUtils.getDistanceBetween(a, b)
let angle = spriteUtils.getAngleBetween(a, b)
spriteUtils.setRotation(a, angle)
spriteUtils.moveForward(a, distance / 4)

spriteUtils.orbitAroundPoint(b, 80, 60, 25, 90, 1000)
spriteUtils.cloneSpriteImage(a, b)
spriteUtils.stampToBackground(a)
spriteUtils.cropTransparentBorder(a)
