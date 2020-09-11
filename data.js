'use strict';

//have all find functions return results
//Add choice made by find functions into trip -- How to add something into an array at a specific place?
// When rechoosing, make sure new choice ends up at correct place in trip
//After everything is done, print the completed trip


var destination = ['Narnia', 'Bikini Bottom', 'Middle Earth', 'The Shire', 'New Asgard', 'Wakanda', 'Geonosis'];
var resturaunt  = ['Chum Bucket', 'Bobs Burger Shack', 'The Crusty Crab', 'The Hawthorne Grille', 'Shalom Grill'];
var transportation  = ['Plane', 'Train', 'Automobile'];
var entertainment  = ['Movie', 'Bar Crawl', 'Tour', 'Art Museum', 'Jelly Fishing', 'Museum', 'Art Gallary', 'Worlds Most Famous Whatever'];
var trip = [];
let result;

function findDestination(){
   let result = Math.floor(Math.random() * destination.length);
   let chosenDestination = destination[result];
    console.log(chosenDestination);
   return chosenDestination;
}
let chosenDestination = findDestination();
trip[0] = (chosenDestination);

//

function findResturaunt (){
  let result = Math.floor(Math.random() * resturaunt.length);
  let chosenResturaunt = resturaunt[result];
  console.log(chosenResturaunt);
  return chosenResturaunt;
}
let chosenResturaunt = findResturaunt();
trip[1] = (chosenResturaunt);

// 

function findTransportation(){
   let result = Math.floor(Math.random() * transportation.length);
  let chosenTransportation = transportation[result];
  console.log(chosenTransportation);
  return chosenTransportation;
}
let chosenTransportation = findTransportation();
trip[2] = (chosenTransportation);

//

function findEntertainment(){
   let result = Math.floor(Math.random() * entertainment.length);
let chosenEntertainment = entertainment[result];
   console.log(chosenEntertainment);
   return chosenEntertainment;
}
let chosenEntertainment = findEntertainment();
trip[3] = (chosenEntertainment);

//

function reSelectOption(){
  let  user = prompt('If everything is to your liking select 5,  If you would like to change anything else, select 1 for new destination. select 2 for new resturaunt. Select, 3 for new mode of transportation. Select, 4 for new entertainment options.');
  switch (user){
      
     case 1:
        choice = "Destination";
        let chosenDestination = findDestination();
        trip[0](chosenDestination);
        console.log(trip);
        reSelectOption();
      break;
     case 2:
        choice = "resturaunt";
        let chosenResturaunt = findResturaunt();
        trip[1](chosenResturaunt);
        console.log(trip);
        reSelectOption();
       break;
      case 3:
         choice = "transportation";
         let chosenTransportation = findTransportation();
         trip[2](chosenTransportation);
         console.log(trip);
         reSelectOption();
       break;
      case 4:
          choice = "entertainment";
          let chosenEntertainment =  findEntertainment();
          trip[3](chosenEntertainment);
          console.log(trip);
          reSelectOption();
       break;
      case 5:
         choice = "This sounds Fun. Im all complete here.";
         console.log(trip);
         console.log('complete');
       break;
  }
  
}
reSelectOption();
