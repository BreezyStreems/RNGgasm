function setup() {
createCanvas(400, 400)
}

let timeout = true
setTimeout(function() {
timeout = false
}, 100)


function draw() {
if(timeout === false){
if(runIntro === true){
drawIntro()
}

if(runGameDraw === true){
drawGame()
setInterval (() => {
if(runkeyurollcheck === false){
runkeyurollcheck = true
}
}, 1)

}

}
}
