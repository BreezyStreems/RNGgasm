let rollfade = 'null'
let rollfade2 = 'null'
let rollfade3 = 'null'
let rollfade4 = 'null'
let rollfade5 = 'null'
let rolls = 0
let f5fill1 = 148
let f5fill2 = 148
let f5fill3 = 148
let f4fill1 = 148
let f4fill2 = 148
let f4fill3 = 148
let f3fill1 = 148
let f3fill2 = 148
let f3fill3 = 148
let f2fill1 = 148
let f2fill2 = 148
let f2fill3 = 148
let ffill1 = 148
let ffill2 = 148
let ffill3 = 148
let rollfadecheck = -1
let fill1 = 148
let fill2 = 148
let fill3 = 148
let gfill1 = 148
let gfill2 = 148
let gfill3 = 148
let greatestrar = 0
let money = 0
let rarityString = 'null'
let raritydrawcheck = false
let runkeyurollcheck = true
let drawOpening = true
console.log(startGAME)

function drawGame() {



if(startGAME === true){
if(drawOpening === true) {

rollfadecheck++
background(200)
fill(102, 204, 0, 255)
rect(100, 300, 200, 50)

textSize(16)
fill(0)
text('press Space to roll', 130, 328)

textSize(16)
fill(0)
text('money: ' + money, 1, 20)

textSize(10)
fill(0)
text('rolls: ' + rolls, 1, 55)

if(raritydrawcheck === true ){
textSize (32)
fill(fill1, fill2, fill3, 255)
text(rarityString, 125, 200)

if(rollfadecheck > 1){
textSize(28)
fill(ffill1, ffill2, ffill3, 255)
text(rollfade, 125, 180)
if(rollfadecheck > 2){
textSize(24)
fill(f2fill1, f2fill2, f2fill3, 255)
text(rollfade2, 125, 164)
if(rollfadecheck > 3){
textSize(20)
fill(f3fill1, f3fill2, f3fill3, 255)
text(rollfade3, 125, 150)
if(rollfadecheck > 4){
textSize(16)
fill(f4fill1, f4fill2, f4fill3, 255)
text(rollfade4, 125, 138)
if(rollfadecheck > 5){
textSize(12)
fill(f5fill1, f5fill2, f5fill3, 255)
text(rollfade5, 125, 128)
}
}
}
}
}

textSize (16)
fill(gfill1, gfill2, gfill3, 255)
if(greatestrar > 92 && greatestrar < 96){
text('MAX RARITY IMPOSSIBLE 3%', 1, 40)
} else {
text('Greatest Rarity: ' + greatestrar, 1, 40)
}
raritydrawcheck = false
}





drawOpening = false
//if draw opening true end
}
//key pressed then gets roll.
document.addEventListener('keydown', function(event) {
if(runkeyurollcheck === true){
if(event.key === ' ') {
runkeyurollcheck = false
rollfade5 = rollfade4
f5fill1 = f4fill1
f5fill2 = f4fill2
f5fill3 = f4fill3
rollfade4 = rollfade3
f4fill1 = f3fill1
f4fill2 = f3fill2
f4fill3 = f4fill3
rollfade3 = rollfade2
f3fill1 = f2fill1
f3fill2 = f2fill2
f3fill3 = f2fill3
rollfade2 = rollfade
f2fill1 = ffill1
f2fill2 = ffill2
f2fill3 = ffill3
rollfade = rarityString
ffill1 = fill1
ffill2 = fill2
ffill3 = fill3
let lograrity = 0
let itemRarityNumber = random(0, 5000000000)
let tempVarRarity = 5000000000
let itemRarityLevel = 1
while (itemRarityNumber < tempVarRarity / 1.09) {
tempVarRarity /= 1.09;
itemRarityLevel += 1;
if(itemRarityLevel > 100) {
itemRarityNumber = tempVarRarity
//if itemrar > 100 end
}
//while itemrar < tempvar end
} 
rarityString = 'common'
fill1 = 148
fill2 = 148
fill3 = 148
let fillrarity = [148, 148, 148]
if (itemRarityLevel > 50) {
rarityString = 'uncommon'
fill1 = 28
fill2 = 206
fill3 = 16
if(itemRarityLevel > 75){
rarityString = 'rare'
fill1 = 21
fill2 = 176
fill3 = 243
if(itemRarityLevel > 80){
rarityString = 'exotic'
fill1 = 158
fill2 = 233
fill3 = 245
if(itemRarityLevel > 85){
rarityString = 'legendary'
fill1 = 241
fill2 = 196
fill3 = 30
if(itemRarityLevel > 89){
rarityString = 'unreal'
fill1 = 204
fill2 = 10
fill3 = 10
if(itemRarityLevel > 92){
rarityString = 'impossible'
fill1 = 0
fill2 = 0
fill3 = 0
if(itemRarityLevel > 95){
rarityString = 'mythical'
fill1 = 255
fill2 = 109
fill3 = 221
//if rar 95 end
}
//if rar 92 end
}
//if rar 89 end
}
//if rar 85 end
}
//if rar 80 end
}
//if rar 75 end
}
//if rar 50 end
}
 drawOpening = true
raritydrawcheck = true

if(rarityString === 'common'){
money += 10
} else if (rarityString === 'uncommon'){
money += 20
} else if (rarityString === 'rare'){
money += 40
} else if (rarityString === 'exotic'){
money += 80
} else if (rarityString === 'legendary'){
money += 160
} else if (rarityString === 'unreal'){
money += 320
} else if (rarityString === 'mythical'){
money += 640
} else if (rarityString === 'impossible'){
money += 1280
}

if(itemRarityLevel > greatestrar){
greatestrar = itemRarityLevel
gfill1 = fill1
gfill2 = fill2
gfill3 = fill3
}

rolls++

//if event key u end
}
//if runkeyrollcheck true end
}
//document keydown listener end
})

//if start game true end
}

//function draw end
}
