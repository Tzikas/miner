'use strict';
var map2 = [
  [ true,  true,  true,  true, false, false, false],
  [false, false, false,  true,  true,  true,  true],
  [false,  true, false,  true, false, false, false],
  [false,  true,  true,  true,  true,  true, false],
  [false,  true, false,  true, false, false, false],
  [false,  true, false,  true, false, false, false],
  [false,  true, false,  true,  true,  true, false],
  [false,  true,  true, false, false,  true, false],
  [false, false, false,  true, false,  true, false],
  [false,  true, false,  true, false,  true, false],
  [false,  true,  true,  true,  true,  true, false],
  [false, false,  true, false, false, false, false]
]
/*map2 = [
  [ true,  true,  true,  true, false, false, false],
  [false, false,  true, false, false, true,   true],
  [false,  true,  true,  true, false, false,  true],
  [false,  true,  false, false, false, false,  true],
  [false,  true, false,  true,  true,  true,  true],
  [false,  true, false,  true, false, false, false],
  [false,  true, false,  true,  true,  true,  true],
  [false,  true,  true, false, false,  true, false],
  [false, false,  true, false, false,  true,  true],
  [true,   true,  true, false, false,  true, false],
  [true,  false, false,  true, false,  true, false],
  [true,   true,  true,  true,  true,  true, false]
],

*/
/*
exit2   = {x: 1, y: 5},
miner   = {x: 0, y: 0},
exit    = {x: 9, y: 1},
stepsHistory   = [];
*/
//map2 =  [ [true, false, true], [true, false, true], [true, false, true], [true, true, true] ];


let arr = [ [true, false, true], [true, false, true], [true, false, true], [true, true, true] ];




arr =  [
  [ true,  true,  true,  true, false, false, false],
  [false, false, false,  true,  true,  true,  true],
  [false,  true, false,  true, false, false, false],
  [false,  true,  true,  true,  true,  true, false],
  [false,  true, false,  true, false, false, false],
  [false,  true, false,  true, false, false, false],
  [false,  true, false,  true,  true,  true, false],
  [false,  true,  true, false, false,  true, false],
  [false, false, false,  true, false,  true, false],
  [false,  true, false,  true, false,  true, false],
  [false,  true,  true,  true,  true,  true, false],
  [false, false,  true, false, false, false, false]
]

console.log('hi')
//miner = {x:0,y:0}
//
map2 = [[true, false],
    [true, true]];

arr = [[true, false],
    [true, true]];



  map2 = [[true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, true, true, true, true]];

  arr = [[true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, true, true, true, true]];



var exit2 = {x:4,y:4}


let miners = 0; 

class Miner { 
  constructor(x,y, direction, steps, opp){
      this.x = x || 0;
      this.y = y || 0;
      this.direction = direction || null;       
      this.steps = steps || [];
      this.opp = opp || null;
      miners++;       
  }

}


const directions = {
  up    : (x,y) => arr[x]   ? arr[x][y-1] : false,
  down  : (x,y) => arr[x]   ? arr[x][y+1] : false,
  left  : (x,y) => arr[x-1] ? arr[x-1][y] : false,
  right : (x,y) => arr[x+1] ? arr[x+1][y] : false
}
/*
function explore(miner){ //check to see if any open paths 
  for(let direction in directions){
    //console.log(direction) 
    let d = String(direction); 
    let open = directions[d](miner.x,miner.y);
    //console.log(open, miner, d) // null, "down" 


    if(open && miner.direction === d){ //found a new direction so spawn a new miner 
      //move(new Miner(miner.x,miner.y,d,[...miner.steps])) 
      move(miner) 
    } else if(open && miner.opp !== d){
      console.log(d, 'is open', new Miner( miner.x,miner.y,d,[...miner.steps]) )
      
      //explore(new Miner(miner.x,miner.y,d,[...miner.steps])) 
    } else {
      console.log(d, 'is a deadend') 
    }
    
  }
}*/



function explore(miner){ //check to see if any open paths 

  for(let direction in directions){
    
    //console.log(direction) 
    let d = String(direction); 
    let open = directions[d](miner.x,miner.y);
    //console.log(open, miner, d) // null, "down" 
    //console.log(miner.x, miner.y, exit2.x, exit2.y)
    //
    //
    if(open && miner.opp !== d){
      //console.log(d, 'is open', new Miner( miner.x,miner.y,d,[...miner.steps]) )
      move( new Miner( miner.x,miner.y,d,[...miner.steps] ) )
    } 
    
    else if(open && miner.direction === d){  
      //console.log('move miner ',miner, ' in ',d)
      //move(miner) 
    }

    else {
      //console.log(d, 'is a deadend') 
    }
    
  }


}
      
var steps          = [];


function move(miner){
  let step = miner.direction
  //console.log(step)
  //let steps = [...miner.steps]
   switch(step) {
      case 'right':
        miner.steps.push(step);
        miner.x++
        miner.opp = 'left' 
        break;
      case 'down':
        miner.steps.push(step);
        miner.y++
        miner.opp = 'up'         
        break;
      case 'left':
        miner.steps.push(step);
        miner.x--
        miner.opp = 'right'         
        break;
      case 'up':
        miner.steps.push(step);
        miner.y--
        miner.opp = 'down'         
        break;
    }
    console.log(miner, 'total miners',miners)
    if(exit2.x === miner.x && exit2.y === miner.y){
        console.log('game over');
        console.log(miner.steps);
        //steps = miner.steps
        return;
    }
    
    explore(miner)
} 


//  explore(new Miner(0,0,'up',[]))
  explore(new Miner(0,0,'left',[]))
  //explore(new Miner(3,0,'left',[], 'right'))
  
//  explore(new Miner(0,0,'right',[]))
//  explore(new Miner(0,0,'left',[]))








//ok it's got to check all of the directions and then after move into the right direciton 














//solve2(arr, miner, exit2);
//solve(arr, miner, exit2);


/*
function solve2 (map, miner, exit)  {
  for(let i =1; i<=4; i++){
      spawnMiner(map, miner, exit, i)
  }
}


function moveMiner(map, miner, exit, i){
       if ( i === 1) {miner.x++;} //right 
  else if ( i === 2) {miner.x--;} //left
  else if ( i === 3) {miner.y++;} //up
  else if ( i === 4) {miner.y--;} //down
  else {} 

  //check to see if miner has succeeded
  //check to see if miner is dead 
  //check if new spot has true spaces around it and if so spawn a newMiner in that direction.  the newminer must have the old miner's step history 
  if(miner.x > 10 || miner.y > 10 || miner.x  < -10 || miner.y < -10){
    return 
  }
  console.log(miner) 
  moveMiner(map, miner, exit, 1)
}

function spawnMiner (map, miner, exit, i) {
  console.log('span miner')
  //console.log(new Miner())
  moveMiner(map, new Miner(), exit, i)
}


*/ 

















function solve(map, miner, exit) {

  var x = miner.x,
      y = miner.y,
      exitFound      = false,
      trail          = [],
      steps          = [],
      lastOption     = 'up';

  function isTheExit(x,y) {
    return (x === exit.x && y === exit.y);
  }

  function offLimits(x,y) {
    return (x < 0 || y < 0 || x >= map.length || y >= map[0].length);
  }

  function blocked(x,y) {
    return !map[x][y];
  }

  function coordinatesVisited(x,y) {
    return trail[x][y];
  }

  function deadEnd(x,y) {
    if(coordinatesVisited(x,y)) {
      return trail[x][y].deadEnd;
    }
    else {
      return false;
    }
  }

  function stepBack(x,y) {
    if (trail[x][y]) {
      trail[x][y].deadEnd = true;
    }
    x = stepsHistory[stepsHistory.length-1].x
    y = stepsHistory[stepsHistory.length-1].y
    steps.pop();
    stepsHistory.pop();

    return true;
  }

  function updateMinerLocation(x,y,step){
    switch(step) {
      case 'right':
        steps.push(step);
        miner.x++
        break;
      case 'down':
        steps.push(step);
        miner.y++
        break;
      case 'left':
        steps.push(step);
        miner.x--
        break;
      case 'up':
        steps.push(step);
        miner.y--
        break;
    }
    trail[x][y] = {open: true, deadEnd: false};
    stepsHistory.push({x: x, y: y, open: true, deadEnd: false});
    return true;
  }


  function walk(x,y, step) {

    if (isTheExit(x,y)) {
      console.log('Finally! the exit is in (' + x + ',' + y + ')');
      exitFound = true;
      updateMinerLocation(x,y,step);
      return true;
    }

    else if(!exitFound && step === lastOption && blocked(x,y)){
      stepBack(x,y);
      return false;
    }

    else if (offLimits(x,y) || blocked(x,y) || deadEnd(x,y) || coordinatesVisited(x,y)) {
      return false;
    }

    else if (!exitFound && !coordinatesVisited(x,y)){
      updateMinerLocation(x,y,step);
      if (!exitFound) {var right = walk(x+1, y  , 'right');}
      if (!exitFound) {var down  = walk(x  , y+1, 'down');}
      if (!exitFound) {var left  = walk(x-1, y  , 'left');}
      if (!exitFound) {var up    = walk(x  , y-1, 'up');}
      return true;
    }
  }

  // columns = X, rows = Y
  var i;
  for(i = 0; i < map.length; i++) {
    trail.push(new Array(map[0].length)); // Create an empty bi-dimensional array ( same size as the map )
  }

  walk(x,y);
  console.log(steps);
  return steps;
}

//solve(map2, miner, exit2);


$(document).ready(function () {
  function createMap(map, exit) {
    var numberOfTiles   = map.length * map[0].length,
        tileWidth       = 40,
        mapWrapperWidth = map.length * tileWidth + 2;

    $('#mapWrapper').css({"width": mapWrapperWidth + 'px'});

    var k, m, coords;
    for(k = 0; k < map[0].length; k++) {
      for(m = 0; m < map.length; m++) {

        $('#mapWrapper').append('<div id="x' + m + 'y' + k + '" class="tile" />');

        if(map[m][k] === false) {
          coords = '#x' + m + 'y' + k;
          $(coords).addClass('falseTile');
        }
      }
    }

    $('.tile').css({"width": tileWidth + 'px', "height": tileWidth + 'px'});
    var exitCoords = '#x' + exit.x + 'y' + exit.y;
    $(exitCoords).addClass('exitTile');

    var animationInterval, p = 0;

    function animateMiner(){
      //let stepHistory = steps
      //console.log(steps, stepsHistory)
      
      if(p < stepsHistory.length) {
        $('.miner').css({
          "left": stepsHistory[p].x * tileWidth + 'px',
          "top" : stepsHistory[p].y * tileWidth + 'px'});
        p++
      }
      else {
        $('body').css({"background-color": "#82E0AA"});
        //$('#mapWrapper').css({"background-color": "#52BE80"});
        //$('.tile').css({"opacity": "0"});
        clearInterval(animationInterval);
      }
    }
    animationInterval = setInterval(animateMiner, 410);
  }
  createMap(map2, exit2);
});

