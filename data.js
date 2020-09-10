'use strict'
var destination = ['milwaukee', 'chicago', 'dallas', 'tampa', 'orlando', 'miami', 'los Angelas'];
var resturaunt  = ['cracker Barrel', 'bobEvans', 'hardees', 'fancySteakhouse', 'sushiBar'];
var transportation  = ['plane', 'train', 'automobile'];
var entertainment  = ['movie', 'barCrawl', 'tour', 'artMuseum', 'museum', 'artGallary', 'worldMostFamousWhatever']
let result;

function findDestination(){
   let result = Math.floor(Math.random() * destination.length);
   result = destination[result];
    console.log(result);
}
findDestination();

//function findResturaunt (){
   // for (i = 0; resturaunt.length; i++)
   // resturaunt.Math.random + 1();

   // console.log();
//}

//function findTransportation(){
   // for (i = 0; transportation.length; i++)
//transportatiopn.Math.random + 1();
   // console.log();
//}

//function findEntertainment(){
   // for (i = 0; entertainment.length; i++)
    //entertainment.Math.random  + 1();
   // console.log();
//}