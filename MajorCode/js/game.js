import {update as updateSnake , draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersect} from './snake.js'

import {update as updateFood, draw as drawFood} from './food.js'

import{outsideGrid} from './grid.js'

let lastRenderTime =0
let gameOver = false
const gameBoard = document.getElementById('game-board')
alert('Press arrow keys to start game')


function main(currentTime){
    
    if(gameOver){
     if(confirm('You Lost Press Ok to Restart')){
         window.location = '/snake.html'
     }
        return
    }
    
    window.requestAnimationFrame(main)
    const secondsSincelastRender = (currentTime - lastRenderTime)/1000
    if (secondsSincelastRender < 1 / SNAKE_SPEED) return
    
    
    console.log('Render')
    lastRenderTime = currentTime 
    
    update()
    draw()
}
window.requestAnimationFrame(main)

function update()
{
    updateSnake()
    updateFood()
    checkDeath()
}
function draw()
{
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
   gameOver = outsideGrid(getSnakeHead) || snakeIntersect()
}