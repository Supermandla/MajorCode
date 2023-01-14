let inputDirection = { x: 0, y:0}
let lastInputDrection ={x:0, y:0}

window.addEventListener('keydown',e=>{
    switch (e.key){
        case 'ArrowUp':
            if(lastInputDrection.y !==0) break
        inputDirection = { x:0,y:-1}
        break
        
        case 'ArrowDown':
        if(lastInputDrection.y !==0) break
        inputDirection = { x:0,y:1}
        break
        
        case 'ArrowLeft':
        if(lastInputDrection.x !==0) break
        inputDirection = { x:-1,y:0}
        break
        
        case 'ArrowRight':
        if(lastInputDrection.x !==0) break
        inputDirection = { x:1,y:0}
        break
        
    }
})

export function getInputDirect(){
    lastInputDrection = inputDirection
    return inputDirection
}