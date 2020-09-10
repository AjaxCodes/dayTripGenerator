'use strict'
var destination = ['milwaukee', 'chicago', 'dallas', 'tampa', 'orlando', 'miami', 'los Angelas'];
var resturaunt  = ['cracker Barrel', 'bob Evans', 'hardees', 'fancy Steakhouse', 'sushi Bar'];
var transportation  = ['plane', 'train', 'automobile'];
var entertainment  = ['movie', 'barCrawl', 'tour', 'art Museum', 'museum', 'art Gallary', 'worlds Most Famous Whatever']
let result;

function findDestination(){
   let result = Math.floor(Math.random() * destination.length);
   result = destination[result];
    console.log(result);
}
findDestination();

function findResturaunt (){
   let result = Math.floor(Math.random() * resturaunt.length);
   result = resturaunt[result];
   console.log(result);
}
findResturaunt();

function findTransportation(){
   let result = Math.floor(Math.random() *transportation.length);
   result = transportation[result];
   console.log(result);
}
findTransportation();
//function findEntertainment(){
   // for (i = 0; entertainment.length; i++)
    //entertainment.Math.random  + 1();
   // console.log();
//}