
// const grids = []
const invaderProjectiles = []
const Particles = []

// const keys = {
//   a: { pressed : false}...
//   .....
//   space: {............}
// }}

let frames = 0
let randomInterval = Math.floor((Math.random()* 500) + 500)

function createParticles({object, color}) {
    for (let i = 0; i < 15; i++) {
        particles.push(
          new Paricle({ 
            position : {
              x : object.position.x + object.width  / 2 ,
              y : object.position.y + object.heigth / 2
          },
            velocity: {
              x: (Math.random() - 0.5) *2 ,
              y: (Math.random() - 0.5) *2 ,
          },
          radius: Math.random() * 3, 
          color : color || '#BAA0DE'
          })
        )   
    }
}

function animate() {
    // c.fillRect(0, 0) canvas.width......
    // player.update()
    particles.forEach((particle, i)=> { 
      if (particle.opacity <= 0) {
        setTimeout(() =>{
          particles.splice(i, 1)
        }, 0)
      } else{
        particle.update()
      }        
    })
    invaderProjectiles.forEach((invaderProjectile, index) => {
        if(
          invaderProjectile.position.y + invaderProjectile.
          height >= canvas.height){
            setTimeout(() => {
             invaderProjectiles.splice(index, 1)
          }, 0)
        }
        else invaderProjectile.update()
//  projectile hits player       
        if (
            invaderProjectile.posiion.y + invaderProjectile.
            height >= player.position.y
            && invaderProjectile.
            position.x + invaderProjectile.width >= player.position.x 
            && invaderProjectile.position.x <= player.position.x + player.width 
    ) {
        setTimeout(() => {
            invaderProjectiles.splice(index, 1)
        }, 0)
        console.log('you lose')
        createParticles({
            object : player,
            color: 'white'  
          })
      }
    })

     //projectile hit enemy       
    projectile.forEach((projectile, j) =>{
         //  if(
         //   projectile.position.y-proje.......
        //){}
    
// setTimeout(() =>{
        // const invaderFound = grid.invaders.find((invader2) =>....
        // const prjectileFound = projectile.find((projectile2)).... 
// )
})
    
// remove invader and projectile
// right below setTimeout() function mentioned above 
    if (invaderFound && projectileFound){
        createParticles({
          object : invader,  
        })

       grid.invader.splice(i, 1)
       projectiles.splice(j,1)
       
       if(grid.invaders.length > 0){
         const firstInvader = grid.invaders[0]
         const lastInvader = grid.invaders[grid.invader.length - 1]
    
         grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width
         gird.position.x = firstInvader.position.x
    
        }else{
          grids.splice(gridIndex,1)
    
    }
    }
    }, 
    
    
    if (keys.a.pressed && player.position.x >= 0) {
        player.veloocity.x  = -7
        player.rotation = -0.15   }
    else if{
        keys.d.pressed &&
        player.position.x + player.width <= canvas.width
    }{
        player.velocity.x = 7
        player.rotation = 0.15
    }else{
        player.velocity.x = 0 
        player.rotation = 0
    }
 //===========================================================

    // grid.forEach((grid,gridIndex....))
        // grid.update()
    // spawning enemies
    if(frames % 100 === 0 && grid.invaders.length > 0){
        grid.invaders[Math.floor(Math.random() * grid.invaders.
        length)].shoot(invaderProjectiles)}


//============================================================


    // if(frames % randomInterval === 0){
    //    grids.push(new Grid())
    //    randomInterval = Math.floor(Math.random() * 500 + 500)
    //    frames = 0
    // }
    
    // if(frames % 100 === 0 && grid.invaders.length > 0){
    //    grid.invaders[Math.floor(Math.random() * grid.invaders.
    //    length)].shoot(invaderProjectiles)}
    
//========================================================    
class Particle{
    constructor({ position, velocity, radius, color}){
      this.position = position
      this.velocity = velocity
      this.color = color
      this.radius = radius
      this.opacity = 1
   }
   
   draw(){
     c.save()
     c.globalAlpha = this.opacity
     c.beginPath()
     c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
     c.fillStyle = this.color
     c.fill()
     c.closePath()
   }
   
update() {
   this.draw()
   this.position.x += this.velocity.x
   this.position.y += this.velocity.y
   this.opacity -= 0.01
}
}

class invaderProjectile{
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.width = 3
        this.height =10
    }
    draw(){
        c.beginPath()
        c.fillRect(this.position.x, this.position.y, this.width,this.height)
        c.fillStyle = 'white'
        
    }
    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}
//============================================================
    //with in the class Invader at end of
   //update({velocity}){} function
   shoot(invaderProjectiles){
     invaderProjectiles.push(new invaderProjectile({
       position: {
        x: this.position.x + this.width / 2,
        y: this.position.y + this.height / 2
       },
       velocity:{
        x: 0,
        y: 5
       }
     }))
   }
//============================================================
  
  
//==========================================================================
// write at the end of function animate()
console.log(frames)

if (frames % randomInterval === 0){
    grids.push(new Grid())
    randomInterval = Math.floor(Math.random()*500 + 500)
    frames = 0
    console.log(randomInterval)
}
// spawn projectiles
frames ++

