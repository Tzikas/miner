var map = [[true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, true, true, true, true]];



map = [
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
]



function createGround(width, height){
    var result = [];
    for (var i = 0 ; i < width; i++) {
        result[i] = [];
        for (var j = 0; j < height; j++) {
            //if()
            result[i][j] =  Math.random() >= 0.5;
        }
    }
    return result;
}
// Create a new ground with width = 15 & height = 9
//var ground = createGround(5, 5);
//map = createGround(5, 5);

//console.log(map)
//createMap(map, {x:4,y:4})



const solve = (map, start, end) => {

  const directions = {
    up    : (x,y) => map[x]   ? map[x][y-1] : false,
    down  : (x,y) => map[x]   ? map[x][y+1] : false,
    left  : (x,y) => map[x-1] ? map[x-1][y] : false,
    right : (x,y) => map[x+1] ? map[x+1][y] : false
  }

  class Miner { //miner constructor 
    constructor(x,y, direction, steps, opp){
        this.x = x || 0;
        this.y = y || 0;
        this.direction = direction || null;       
        this.steps = steps || [];
        this.opp = opp || null;
    }

  }

  const explore = (miner, end) => { //check to see if any open paths 
    let m; 
    for(let direction in directions){
      let d = String(direction); 
      let open = directions[d](miner.x,miner.y);
      if(open && miner.opp !== d){ //Create new miner and move him in that direction
          m =  move( new Miner( miner.x,miner.y,d,[...miner.steps] ), end )
      } 
    }
    return m;
  }

  const move = (miner, end) => {

    let step = miner.direction
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
      if(end.x === miner.x && end.y === miner.y){
          console.log(miner.steps);
          createMap(map, end, miner.steps)
          return miner.steps;
      }

      return explore(miner, end)
  } 

   return explore(new Miner(start.x,start.y,null,[]), end)  || [] 
  
}


console.log(solve(map, {x:0,y:0}, {x:4,y:5})) //Triggers entire event 
  //explore(new Miner(0,0,'left',[]))






















/*****/

//$(document).ready(function () {
  function createMap(map, exit,steps) {
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
    let miner = document.getElementById('miner'); 

    function animateMiner(){
      
      if(p < steps.length) {

      switch(steps[p]) {
        case 'right':
          miner.style.left = ( parseInt(miner.style.left, 10) || 0 ) + 40 + "px"
          
          break
        case 'left':
          miner.style.left = ( parseInt(miner.style.left, 10) || 0 ) - 40 + "px"
          
          break
        case 'down':
          miner.style.top = ( parseInt(miner.style.top, 10) || 0 ) + 40 + "px"

          
          break
        case 'up':
          miner.style.top = ( parseInt(miner.style.top, 10) || 0 ) - 40 + "px"
          
          break

      }
        p++
      }
      else {
        $('body').css({"background-color": "#82E0AA"});
        //$('#mapWrapper').css({"background-color": "#52BE80"});
        //$('.tile').css({"opacity": "0"});
        clearInterval(animationInterval);
      }
    }
    console.log(map,exit,steps)
    animationInterval = setInterval(animateMiner, 410);
  }
//});

