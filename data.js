'use strict';

//have all find functions return results
//Add choice made by find functions into trip -- How to add something into an array at a specific place?
// When rechoosing, make sure new choice ends up at correct place in trip
//After everything is done, print the completed trip


var destination = ['Narnia', 'Bikini Bottom', 'Middle Earth', 'The Shire', 'New Asgard', 'Wakanda', 'Geonosis'];
var resturaunt  = ['Chum Bucket', 'Bobs Burger Shack', 'The Crusty Crab', 'The Hawthorne Grille', 'Shalom Grill'];
var transportation  = ['Plane', 'Train', 'Automobile'];
var entertainment  = ['Movie', 'Bar Crawl', 'Tour', 'Art Museum', 'Museum', 'Art Gallary', 'Worlds Most Famous Whatever'];
var trip =[];
let result;

function findDestination(){
   let result = Math.floor(Math.random() * destination.length);
   let chosenDestination = destination[result];
    console.log(chosenDestination);
   return chosenDestination;
}
let chosenDestination = findDestination();

function findResturaunt (){
   let result = Math.floor(Math.random() * resturaunt.length);
   chosenResturaunt = resturaunt[result];
   console.log(chosenResturaunt);
   return chosenResturaunt;
}
let chosenResturaunt = findResturaunt();

function findTransportation(){
   let result = Math.floor(Math.random() * transportation.length);
   chosenTransportation = transportation[result];
   console.log(chosenTransportation);
   return chosenTransportation;
}
let chosenTransportation = findTransportation();

function findEntertainment(){
   let result = Math.floor(Math.random() * entertainment.length);
   chosenEntertainment = entertainment[result];
   console.log(chosenEntertainment);
   return chosenEntertainment;
}
let chosenEntertainment = findEntertainment();

function reSelectOption(){
   switch () {
      
      case 1:
        choice = "Destination";
        chosenDestination = findDestination();
        break;
      case 2:
        choice = "resturaunt";
        chosenresturaunt = findResturaunt();
        break;
      case 3:
         choice = "transportation";
         chosentransportation = findTransportation();
        break;
      case 4:
         choice = "entertainment";
         chosenentertainment =  findEntertainment();
        break;
      case 5:
         choice = "This sounds Fun. Im all complete here.";
         console.log('Complete');
        break;
      

}


