'use strict';

//have all find functions return results
//Add choice made by find functions into trip -- How to add something into an array at a specific place?
// When rechoosing, make sure new choice ends up at correct place in trip
//After everything is done, print the completed trip


var destination = ['Narnia', 'Bikini Bottom', 'Middle Earth', 'Flavortown', 'The Shire', 'New Asgard', 'Wakanda', 'Geonosis'];
var resturaunt  = ['Chum Bucket', 'Bobs Burger Shack', 'The Crusty Crab', 'The Hawthorne Grille', 'Shalom Grill'];
var transportation  = ['Plane', 'Train', 'Automobile'];
var entertainment  = ['Movie', 'Bar Crawl', 'Tour', 'Art Museum', 'Jelly Fishing', 'Museum', 'Art Gallary', 'Worlds Most Famous Whatever'];
var friend = ['Dr Strange', 'Spongebob', 'Voldomort' , 'Buster Douglas', 'Mike Tyson ', 'Guy Fieri']
var trip = [];
let result;

function findDestination(){
   let result = Math.floor(Math.random() * destination.length);
   let chosenDestination = destination[result];
    console.log(chosenDestination);
   return chosenDestination;
}


//

function findResturaunt (){
  let result = Math.floor(Math.random() * resturaunt.length);
  let chosenResturaunt = resturaunt[result];
  console.log(chosenResturaunt);
  return chosenResturaunt;
}


// 

function findTransportation(){
   let result = Math.floor(Math.random() * transportation.length);
  let chosenTransportation = transportation[result];
  console.log(chosenTransportation);
  return chosenTransportation;
}


//

function findEntertainment(){
   let result = Math.floor(Math.random() * entertainment.length);
let chosenEntertainment = entertainment[result];
   console.log(chosenEntertainment);
   return chosenEntertainment;
}
function findFriend(){
   let result = Math.floor(Math.random() * friend.length);
let chosenfriend = friend[result];
   console.log(chosenfriend);
   return chosenfriend;
}

//

function reSelectOption(){
   console.log(trip);
  let  user = prompt('If everything is to your liking Type: 6 If you would like to change anything else Type:1, for new destination. Type: 2, for new resturaunt. Type: 3, for new mode of transportation. Type: 5, for new entertainment options.').toLowerCase();
  switch (user){
      
     case '1':
         trip[0]=findDestination();
        console.log(trip);
        reSelectOption();
       break;
     case '2':
         trip[1]=findResturaunt();
        console.log(trip);
        reSelectOption();
      break;
      case '3':
         trip[2]=findTransportation();
         console.log(trip);
         reSelectOption();
          break;
      case '4':
         trip[3]=findEntertainment();
          console.log(trip);
          reSelectOption();
       break;
       case '5':
          trip[4]=findFriend;
         console.log(trip);
         reSelectOption();
         break;
      case '6':
         console.log(trip,'complete');
         break;
      default:
         reSelectOption(); // restart app
      break;
   }
  }


function confirmResults(){
   let  user = prompt('If everything is to your liking Type: Excelcior!  if you would like to change another option, please Type: Yes').toLowerCase();
   switch (user){
       
      case 'yes':
         reSelectOption();
     break;
       case 'excelcior':
          console.log('complete');
          return trip,'complete';
        break;
       default:
         confirmResults(); // restart app
       break;
    }
   }



let chosenDestination = findDestination();
trip[0] = (chosenDestination);//push()
let chosenResturaunt = findResturaunt();
trip[1] = (chosenResturaunt);
let chosenTransportation = findTransportation();
trip[2] = (chosenTransportation);
let chosenEntertainment = findEntertainment();
trip[3] = (chosenEntertainment);
let chosenFriend = findFriend();
trip[4] = (chosenFriend);
reSelectOption();

confirmResults();