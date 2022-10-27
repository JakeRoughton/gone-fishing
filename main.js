const prompt = require('prompt-sync')
    ({ sigint: true });


let caughtFish = []
let fish1 = generateFish()
let fish2 = generateFish()


// States The Start Of The Game 

console.log("Lets Go Fishing! ")
console.log("Choose Your Fish Wisely. ")
console.log("You can fish for six hours (Until 12:00pm) And Can Catch At Most 10 Lbs Of Fish. ")

// For loop iterates for the current time states what you've caught and what time it is 
for (let i = 6; i < 13; i++) {
    console.log
        ('===========================\n')
    console.log("The Time Is " + i + ":00am. So Far You've Caught: ")

    
    console.log(`${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}`)



    let fish = generateFish()


    // States what fish has been caught the weight of it and what it's valued at


    console.log('You caught a ' + fish.name + 'Weighing In At ' + fish.weight + 'Lbs And Valued At $' + fish.value)
    let currentTotalWeight = getTotalWeight()

    if (currentTotalWeight + fish.weight > 10) {
        console.log('\n YOU ARE OVER THE LIMIT!. \n')
        prompt('Please Press A Key To Continue')

    }

    // Prompts the user to catch or release the fish 

    let action = prompt("\n Commit An Action: [C]atch or [R]elease?")

    while (action !== 'c' && action !== 'r') {
        console.log('Please Enter [C] Or [R]')
        action = prompt('> ')
    }



    // based on the user input determines if they wanted to keep or release the fish 

    if (action === 'c') {
        caughtFish.push(fish)
        console.log('\n You Kept The Fish ' + fish.name + '\n')
    } else if (action === 'r') {
        console.log('\n You Released The Fish ' + fish.name + '\n')
    }
}

// End of Game states the time is up and notifies the user on which fish they kept the total weight of them and price $$

console.log('The Time Is Now 12:00. ')

console.log('You Caught ' + caughtFish.length + ' Fish: ')

for (let i = 0; caughtFish.length > i; i++) {
    console.log(caughtFish[i].name + ' ' + caughtFish[i].weight + ' Lbs ' + caughtFish[i].value)
}
console.log('\n Total Weight: ' + getTotalWeight() + ' Lbs')
console.log('\n Total Value: ' + '$' + getTotalValue())



function generateRandomWeight() {
    let weight = Number((Math.random() * 5).toPrecision(3))
    while (weight < 1) {
        weight = Number((Math.random() * 5).toPrecision(3))
    }
    return weight
}


//----------------------- FUNCTIONS----------------------------//

function generateRandomValue() {

    let value = Number((Math.random() * 5).toPrecision(3))


    while (value < 1) {
        value = Number((Math.random() * 5).toPrecision(3))
    }

    if (value < 1) {
        value = value.toPrecision(2)
    }
    return value
}


function generateRandomName() {

    let adjectives = ['Shiny', 'Red','Dull', 'Blue', 'Slimy', 'Green', 'Dry', 'Yellow', 'Vibrant', 'Purple', 'Floppy', 'Orange', 'Silly', 'Silver']


    let types = ['Salmon', 'Bass', 'Trout', 'Blue Gill', 'Snapper', 'Flounder', 'Perch', 'Cod', 'Catfish', 'Grouper', 'Blobfish', 'Blowfish']
    

    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)]

    let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)]

    while (adj1 === adj2) {
        adj2 = adjectives[Math.floor(Math.random() * adjectives.length)]
    }

    let type = types[Math.floor(Math.random() * types.length)]

    return adj1 + " " + adj2 + " " + type
}





function generateFish() {
    let fish = {}
    fish.name = generateRandomName()
    fish.weight = generateRandomWeight()
    fish.value = generateRandomValue()
    return fish
}

function getTotalWeight() {

    let totalWeight = 0
    for (let i = 0; i < caughtFish.length; i++) {
        let currentFish = caughtFish[i]
        totalWeight += currentFish.weight
    }
    return Number(totalWeight.toPrecision(3))
}

function getTotalValue() {
    let totalValue = 0


    for (let fish of caughtFish) {
        totalValue = totalValue + fish.value
    }


    return Number(totalValue)
}