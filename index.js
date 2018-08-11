/*


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
}*/
// Create a new ground with width = 15 & height = 9
//var ground = createGround(5, 5);
//map = createGround(5, 5);

////console.log(map)
//createMap(map, {x:4,y:4})



const solve = (map, start, end) => {
  //console.log('solve --- ',start,end)

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
          //console.log(miner.steps);
          createMap(map, end, miner.steps)
          return miner.steps;
      }

      return explore(miner, end)
  } 

   return explore(new Miner(start.x,start.y,null,[]), end)  || [] 
  
}


////console.log(solve(map, {x:0,y:0}, {x:4,y:4})) //Triggers entire event 
  //explore(new Miner(0,0,'left',[]))






















/*****/

//$(document).ready(function () {
  function createMap(map, exit,steps) {
    var numberOfTiles   = map.length * map[0].length,
        tileWidth       = 40,
        mapWrapperWidth = map.length * tileWidth + 2;
    //$('#mapWrapper:not(img)').html('')
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
        //
        clearInterval(animationInterval);
        setTimeout(function(){ 
                    $('.tile').remove()
            miner.style.left = ''
            miner.style.top = ''

          //window.location.reload()         
          //solve(map, {x:0,y:0}, {x:5,y:6}) 
            var map = maps[Math.floor(Math.random()*7)]
            solve(map, {x:0,y:0}, {x:6,y:6})
          //
        }
          ,1000)
        
      }
    }
    //console.log(map,exit,steps)
    animationInterval = setInterval(animateMiner, 410);
  }
//});

var map1 = [
    [true, true, true, false, true],
    [false, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, false],
    [false, true, true, true, true]
];



var map2 = [
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



var map3 = [
    [true, true, false, false, false, false, false],
    [false, true, false, false, false, true, false],
    [false, true, true, true, true, true, false],
    [false, true, false, true, false, false, false],
    [false, true, false, false, true, false, false],
    [false, true, false, false, true, false, false],
    [false, true, true, true, true, true, true],  
]



var map1 = [
    [true, false, false, false, true, true, true],
    [true, true, true, false, true, false, true],
    [false, false, true, false, true, false, true],
    [false, false, true, false, true, false, true],
    [false, false, true, false, true, false, true],
    [false, false, true, true, true, false, true],
    [false, false, false, false, false, false, true],  
]



var map4 = [
    [true, true, true, true, true, false, false],
    [true, false, false, false, true, false, false],
    [true, false, false, false, true, false, true],
    [false, false, false, true, true, false, true],
    [false, false, false, false, true, true, true],
    [false, false, false, false, false, false, true],
    [false, false, false, false, false, false, true],  
]


var map5 = [
    [true, true, false, true, true, true, false],
    [true, false, true, true, false, true, false],
    [true, true, true, false, false, true, false],
    [false, true, false, true, true, true, false],
    [false, true, false, false, false, true, false],
    [false, true, false, false, false, true, false],
    [false, true, true, true, false, true, true],  
]


var map6 = [
    [true, true, false, true, true, true, false],
    [false, true, false, true, false, true, true],
    [false, true, false, true, false, true, false],
    [false, true, true, true, false, true, false],
    [false, false, true, false, false, true, false],
    [false, true, true, false, false, true, false],
    [false, false, false, false, false, true, true],  
]




var map7 = [
    [true, false, false, false, true, true, true],
    [true, false, false, false, true, false, true],
    [true, true, true, true, true, false, true],
    [false, true, false, false, false, false, true],
    [false, true, false, false, true, true, true],
    [false, true, false, false, true, false, false],
    [false, true, false, false, true, true, true],  
]


var falses = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],  
]
/*
var i = 0
for(let f=0; f<falses.length; f++){
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  i  =  Math.min(Math.max(i + plusOrMinus, 0), falses.length)
  f2  =  Math.min(Math.max(f + plusOrMinus, 0), falses.length)
  

  falses[f][i] = true; 
  falses[f2][i] = true; 
  falses[f-1][i] = true; 
  
  
}*/


//console.log(falses)
var maps = [map1, map2, map3, map4, map5, map6, map7]
var map = maps[Math.floor(Math.random()*7)]
    
    
//createMap(falses, {x:4,y:4})

solve(map, {x:0,y:0}, {x:6,y:6})





$('button').click(()=>{$('pre').toggleClass('hide')})
