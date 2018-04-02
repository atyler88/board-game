const resources = [
    "Stone",
    "Wood",
    "Iron",
    "Livestock",
    "Hay"
]

const products = {
    "Castle": {
        requirements: {
            "Stone": 1,
            "Wood": 1,
            "Hay": 1,
            "Cattle": 1
        },
        attributes: {
            "Hitpoints": 2,
            "Resource Multiplier": 1
        }
    },
    "Army": {
        requirements: {
            "Cattle": 1,
            "Iron": 1
        },
        attributes: {
            "Hitpoints": 1
        }
    },
    "Road": {
        requirements: {
            "Wood": 1,
            "Stone": 1
        }
    },
    "Defence": {
        requirements: {
            "Cattle": 1,
            "Iron": 1,
            "Stone": 1
        }
    },
    "Battle Card": {
        requirements: {
            "Iron": 1,
            "Hay": 1,
            "Stone": 1
        } 
    }
}

const playerState = {
    resources: {
        "Stone": 0,
        "Wood": 0,
        "Iron": 0,
        "Livestock": 0,
        "Hay": 0
    },
    assets: {
        "Army": [],
        "Castle": [],
        "Road": [],
        "Battle Card": [],
        "Defence": []
    }
}

  const hex= [
    {x: 7, y: 4}, {x: 11, y: 4}, {x: 15, y: 4}, {x: 19, y: 4},
    {x: 5,y:8}, {x: 9,y:8}, {x: 13,y:8}, {x: 17, y: 8}, {x: 21,y:8}, 
    {x: 3,y:12}, {x: 7,y: 12}, {x: 11,y: 12}, {x: 15,y: 12}, {x: 19,y:12}, {x: 23,y:12},
    {x: 5,y:16}, {x: 9, y:16}, {x: 13,y:16}, {x: 17,y:16}, {x: 21,y:16},
    {x: 7,y:20}, {x: 11,y:20}, {x: 15, y:20}, {x: 19,y:20}
  ]



  function hexNeighbor(array, i){
    console.log(`initial item ${array[i].x},${array[i].y} `);
    const n1x = array[i].x - 2;
    const n1y = array[i].y - 4;
    const n2x = array[i].x + 2;
    const n2y = array[i].y -4;
    const n3x = array[i].x + 4;
    const n3y = array[i].y;
    const n4x = array[i].x + 2;
    const n4y = array[i].y + 4;
    const n5x = array[i].x - 2;
    const n5y = array[i].y + 4;
    const n6x = array[i].x - 4;
    const n6y = array[i].y;
    hex.forEach(function(item){
       if(item.x === n1x && item.y ===n1y 
        || item.x === n2x && item.y ===n2y
        || item.x === n3x && item.y ===n3y
        || item.x === n4x && item.y ===n4y
        || item.x === n5x && item.y ===n5y
        || item.x === n6x && item.y ===n6y
    ){
        console.log("found it");
        console.log(item);
       }
    })
  }

  const vert = [
    {x:7, y:1}, {x:11, y:1}, {x:15, y:1}, {x:19, y:1},
    {x:5, y:3}, {x:9, y:3}, {x:5,y:3}, {x:9,y:3}, {x:13,y:3}, {x:17,y:3}, {x:21,y:3},
    {x:5,y:5}, {x:9,y:5}, {x:13,y:5}, {x:17,y:5}, {x:21,y:5},
    {x:3,y:7}, {x:7,y:7}, {x:11,y:7}, {x:15,y:7}, {x:19,y:7}, {x:23,y:7},
    {x:3, y:9}, {x:7,y:9}, {x:11,y:9}, {x:15,y:9}, {x:19, y:9}, {x:23,y:9},
    {x:1,y:11}, {x:5,y:11}, {x:9,y:11}, {x:13,y:11}, {x:17,y:11}, {x:21,y:11}, {x:25,y:11},
    {x:1,y:13}, {x:5,y:13}, {x:9,y:13}, {x:13,y:13}, {x:17,y:13}, {x:21,y:13}, {x:25,y:13},
    {x:3,y:15}, {x:7,y:15}, {x:11,y:15}, {x:15,y:15}, {x:19,y:15}, {x:23,y:15},
    {x:3,y:17}, {x:7,y:17}, {x:11,y:17}, {x:15,y: 17}, {x:19,y:17}, {x:23,y:17},
    {x:5,y:19}, {x:9,y:19}, {x:13,y:19}, {x:17,y:19}, {x:21,y:19}, 
    {x:5,y:21}, {x:9,y:21}, {x:13,y:21}, {x:17,y:21}, {x:21,y:21},
    {x:7,y:23}, {x:11,y:23}, {x:15,y:23}, {x:19,y:23}
  ]

  function vertAdjTiles(array, i){
    console.log(`initial item ${array[i].x},${array[i].y} `);
    const n1x = array[i].x - 2;
    const n1y = array[i].y - 1;
    const n2x = array[i].x + 2;
    const n2y = array[i].y - 1;
    const n3x = array[i].x;
    const n3y = array[i].y + 3;
    const n4x = array[i].x - 2;
    const n4y = array[i].y + 1;
    const n5x = array[i].x + 2;
    const n5y = array[i].y + 1;
    const n6x = array[i].x;
    const n6y = array[i].y - 3;
    hex.forEach(function(item){
       if(item.x === n1x && item.y ===n1y 
        || item.x === n2x && item.y ===n2y
        || item.x === n3x && item.y ===n3y
        || item.x === n4x && item.y ===n4y
        || item.x === n5x && item.y ===n5y
        || item.x === n6x && item.y ===n6y
    ){
        console.log("found it");
        console.log(item);
       }
    })
  }

  const edge = [
    {x:6,y:2}, {x:8,y:2}, {x:10,y:2}, {x:12,y:2}, {x:14,y:2}, {x:16,y:2}, {x:18,y:2}, {x:20,y:2},
    {x:5,y:4}, {x:9,y:4}, {x:13,y:4}, {x:17,y:4}, {x:21,y:4},
    {x:4,y:6}, {x:6,y:6}, {x:8,y:6},{x:10,y:6}, {x:12,y:6}, {x:14,y:6}, {x:16,y:6}, {x:18,y:6}, {x:20,y:6}, {x:22,y:6},
    {x:3,y:8}, {x:7,y:8}, {x:11,y:8}, {x:15,y:8}, {x:19,y:8}, {x:23,y:8},
    {x:2,y:10}, {x:4,y:10}, {x:6,y:10}, {x:8,y: 10}, {x:10,y:10}, {x:12,y:10}, {x:14,y:10}, {x:16,y:10}, {x:18,y:10}, {x:20,y:10}, {x:22,y:10}, {x:24,y:10},
    {x:1,y:12}, {x:5,y:12}, {x:9,y:12}, {x:13,y:12}, {x:17,y:12}, {x:21,y:12}, {x:25,y:12},
    {x:2,y:14}, {x:4,y:14}, {x:6,y:14}, {x:8,y:14}, {x:10,y:14}, {x:12,y:14}, {x:14,y:14}, {x:16,y:14}, {x:18,y:14}, {x:20,y:14}, {x:22,y:14}, {x:24,y:14},
    {x:16,y:3}, {x:16,y:7}, {x:16,y:11}, {x:16,y:15}, {x:16,y:19}, {x:16,y:23},
    {x:4,y:18}, {x:6,y:18},{x:8,y:18},{x:10,y:18}, {x:12,y:18}, {x:14,y:18}, {x:16,y:18}, {x:18,y:18}, {x:20,y:18}, {x:22,y:18},
    {x:5,y:20}, {x:9,y:20}, {x:13,y:20}, {x:17,y:20}, {x:21,y:20}, 
    {x:6,y:22}, {x:8,y:22}, {x:10,y:22}, {x:12,y:22}, {x:14,y:22}, {x:16,y:22}, {x:18,y:22}, {x:20,y:22}
  ]
  
  const initGame = () => ({
    vert: Array(vert.length),
    hex: Array(hex.length),
    edge: Array(edge.length)
})

const board = {
    tiles: [
        "Stone",
        "Wood",
        "Iron",
        "Cattle",
        "Hay",
        "Clay"
    ],
    numbers: [
        "3/11",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
    ]
}
const itemCount = (list) => list.map(
  (item) => {
      return {item, count: 0}
  }  
)

function* picker(counts, maxCount, count=0) {
    const index = Math.floor(Math.random()*counts.length)
    const guess = counts[index];
    if(guess.count <= maxCount){
        yield guess.item
        guess.count++
        counts[index] = guess
        count++
        if (count == 24) return 
    }
    yield* picker(counts, maxCount, count)
}


const calcBoard = () => {
    const res =  picker(itemCount(board.tiles), 4)
    const num =  picker(itemCount(board.numbers), 3)
    const both = [];
    for(let i = 0; i<24; i++){
        both.push({num: num.next().value, res: res.next().value})
    }
    return both;
}


const specialRolls = {
    "1/1": "Free army",
    "6/6": "Free Resource"
}

const nDiceRoll = n => new Array(n).fill(0).map(diceRoll);

const diceRoll = () => Math.floor(Math.random()*6)+1

const placeHouse = (prevBoard, {location, playerID}) => {
    prevBoard.vert[location] = {asset: "house", player: playerID}
    return prevBoard
}
const placeRoad = (prevBoard, {location, playerID}) => {
    prevBoard.edge[location] = {asset: "road", player: playerID}
    return prevBoard
}
const placeArmy = (prevBoard, {location, playerID}) => {
    prevBoard.hex[location] ? prevBoard.hex[location].quantity++ : prevBoard.hex[location] = {asset: "army", player: playerID, quantity: 1}
    return prevBoard
}
const moveArmy = (prevBoard, {initLocation, playerID, newLocation, numArmies}) => {
    prevBoard.hex[newLocation] 
        ? (prevBoard.hex[newLocation].quantity = (prevBoard.hex[newLocation].quantity + numArmies)) 
        : prevBoard.hex[newLocation] = {asset: "army", player: playerID, quantity: numArmies} 
    prevBoard.hex[initLocation].quantity = prevBoard.hex[initLocation].quantity - numArmies
    return prevBoard
}
const Attack = (prevBoard, {location1, playerID1, playerID2, location2, numArmies}) => {
    const [ attackerLoss, defenderLoss ] = calcAttack(prevBoard.hex[location1], prevBoard.hex[location2])
    if (defenderLoss >= prevBoard.hex[location2].quantity) {
        prevBoard.hex[location2] = undefined
        const remainingAttackArmies = prevBoard.hex[location1].quantity - attackerLoss
        return moveArmy(prevBoard, {location1, playerID1, location2, remainingAttackArmies})
    } else {
        prevBoard.hex[location1].quantity -= attackerLoss
        prevBoard.hex[location2].quantity -= defenderLoss
        return prevBoard
    }
}

