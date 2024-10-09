let runGameDraw = false
let runIntro = true
let startGAME = false
let fade = false
let opacity = 255
let intro = true
let introCredit = false
let fadeSTATUS = 'Null'
//activates intro fade
setTimeout(() => {
fade = true
}, 1500)
//setup the intro and dash.
function drawIntro () {
//intro
if(runIntro === true){
if(intro === true) {
background(200)
noStroke()
textSize(32)
fill(0, 0, 0, opacity)
text('RNGgasm', 120, 200)
stroke(0, 0, 0, opacity)
strokeWeight(5)
line(120, 210, 270, 210)
if(fade === false) {
console.log('Title loaded')
}
//starts fade once fade = true
if(fade === true){
if(opacity > 0) {
opacity -= 5
console.log('Title faded')
//if opacity>0 end
} else {
background(200)
opacity = 0
fade = false
intro = false
introCredit = true
console.log('Title faded: complete')
fadeSTATUS = 'in'
//else opacity>0 end
}
//if fade true end
}
//if intro true end
}
//drawing the credits
if(intro === false && introCredit === true) {
background(200)
noStroke()
textSize(16)
fill(0, 0, 0, opacity)
text('BreezyStreems...', 120, 210)
console.log('Credits drawing...')
if(fadeSTATUS === 'in') {
if(opacity < 255){
opacity += 5
if(opacity === 255){
fadeSTATUS = 'out'
//if opacity 255 end
}
//if opacity<255 end
}
//if fadeSTATUS in end
}
if(fadeSTATUS === 'out'){
if(opacity > 0){
opacity -= 5
if(opacity === 0){
fadeSTATUS = 'Null'
runIntro = false
intro = false
introCredit = false
console.log('intro credits: complete loading game')
startGAME = true
runGameDraw = true
//if opacity 0 end
}
//if opacity>0 end
}
//fadeSTATUS out end
}
//if intro and introcredit false, true end
}
//if run true end
}
//function draw end
}
if(runIntro === false){
startGAME = true
runGameDraw = true
}
