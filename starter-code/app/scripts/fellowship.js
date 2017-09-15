console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 1 --WOO DONE!

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var map = document.createElement("section");
  map.id = "middle-earth";
    //console.log(map);

  // inside, add each land as an article tag
  for (var i = 0; i < lands.length; i++) {
    var landArticles = document.createElement("article");
    landArticles.id = lands[i];
    map.appendChild(landArticles);

    // inside each article tag include an h1 with the name of the land
    var landH1 = document.createElement("h1");
    landArticles.appendChild(landH1);
    landH1.innerText = lands[i];
      //console.log(landArticles);
  }
      //console.log(map);

  // append middle-earth to your document body
  body.appendChild(map);

}

makeMiddleEarth();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 2 --WOO DONE!

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var listOfHobbits = document.createElement("ul");
    //console.log(listOfHobbits);
  
  for (var i = 0; i < hobbits.length; i++) {
    var listItemHTML = document.createElement("li");
     listOfHobbits.appendChild(listItemHTML);
     listItemHTML.innerText = hobbits[i];
     listItemHTML.id = hobbits[i];

     // give each hobbit a class of hobbit
     listItemHTML.className = "hobbit";
  }
  
    //console.log(listOfHobbits);

  var shireArticle = document.getElementById(lands[0]);
  shireArticle.appendChild(listOfHobbits);

  //console.log(shireArticle);

}

makeHobbits();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 3 --WOO DONE!

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.id = "the-ring";
  
  // give the div a class of 'magic-imbued-jewelry'
  ring.className = "magic-imbued-jewelry";
    //console.log(ring);

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click", nazgulScreech);

  // add the ring as a child of Frodo
  var frodo = document.querySelector(".hobbit");
    //console.log(frodo);
  frodo.appendChild(ring);

}

//console.log(body);

keepItSecretKeepItSafe();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 4 --WOO DONE!

function makeBuddies() {
  // create an aside tag
  var asideHTML = document.createElement("aside");
    //console.log(asideHTML);
  
  var listOfBuddies = document.createElement("ul");
  listOfBuddies.id = "buddies-list";

  for (var i = 0; i < buddies.length; i++) {
    //console.log(buddies[i]);
    var listItemBuddy = document.createElement("li");
    listItemBuddy.id = buddies[i];
    listItemBuddy.className = "buddies";
    listItemBuddy.innerText = buddies[i];
    listOfBuddies.appendChild(listItemBuddy);
  }

    //console.log(listOfBuddies);

  // attach an unordered list of the 'buddies' in the aside
  asideHTML.appendChild(listOfBuddies);

    //console.log(asideHTML);
  
  // insert your aside as a child element of rivendell
  var rivendell = document.getElementById(lands[1]);
    //console.log(rivendell);
    //console.log(asideHTML);
  rivendell.appendChild(asideHTML);

}

makeBuddies();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 5 --WOO DONE!

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementById('Strider');
    //console.log(strider); 
  strider.innerText = "Aragorn";
  strider.id = "Aragorn";
    //console.log(strider);
}

beautifulStranger();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 6 --WOO DONE!

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.querySelectorAll(".hobbit");
    //console.log(hobbits);
  //how to grab rivendell ul?
  var rivendell = document.getElementById("buddies-list");
    //console.log(rivendell);
  //append hobbit lis to rivendell ul? using a for loop
  for (var i = 0; i < hobbits.length; i++) {
      //console.log(hobbits[i]);
    rivendell.appendChild(hobbits[i]);
  }
}

leaveTheShire();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 7 --WOO DONE!

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement("div");
  fellowship.id = "the-fellowship";
    //console.log(fellowship);
  var rivendell = document.getElementById(lands[1]);
  rivendell.appendChild(fellowship);
    //console.log(rivendell);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var listOfTheFellowship = document.querySelectorAll("li"); //getElementById("buddies-list");

  for (var i = 0; i < listOfTheFellowship.length; i++) {
      //console.log(character);
      fellowship.appendChild(listOfTheFellowship[i]);

    var character = listOfTheFellowship[i].textContent;

    // after each character is added make an alert that they have joined your party
    alert(character + " has joined the Fellowship of the Rings!");
  }
    
   //console.log(fellowship);
}

forgeTheFellowShip();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 8 --WOO DONE!

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.getElementById("Gandalf the Grey");
  gandalf.innerText = "Gandalf the White";

  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "thin solid grey";
}

theBalrog();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 9 --WOO DONE!

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown!");

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromir = document.getElementById("Boromir");
  boromir.style.textDecoration = "line-through";

  // Remove Boromir from the Fellowship
  var fellowship = document.getElementById("the-fellowship");
  fellowship.removeChild(boromir);
  //console.log(fellowship);
}

hornOfGondor();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 10 --WOO DONE!

function itsDangerousToGoAlone(){
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  var mordor = document.getElementById(lands[2]);
  mordor.appendChild(mountDoom);

  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.getElementById("Frodo Baggins");
  var sam = document.getElementById("Samwise 'Sam' Gamgee");
    // console.log(frodo);
    // console.log(sam);
  mordor.appendChild(frodo); 
  mordor.appendChild(sam); 
}

itsDangerousToGoAlone();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 11 --WOO DONE!

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  var mordor = document.getElementById(lands[2]);
  mordor.appendChild(gollum);
    //console.log(mordor);

  // Remove the ring from Frodo and give it to Gollum
  var frodo = document.getElementById("Frodo Baggins");
    //console.log(frodo);
  var ring = document.getElementById("the-ring");
  gollum.appendChild(ring);

  // Move Gollum into Mount Doom
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollum);
}

weWantsIt();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollum = document.getElementById("gollum");
  var theRing = document.getElementById("the-ring");
  gollum.removeChild(theRing);

  var mountDoom = document.getElementById("mount-doom");
  mountDoom.removeChild(gollum); 

  // remove all the buddies from the document
  var buddiesQuery = document.querySelectorAll(".buddies");
  var theFellowship = document.getElementById("the-fellowship");

   for (var i = 0; i < buddiesQuery.length; i++) {
     theFellowship.removeChild(buddiesQuery[i]);
   }
  
  // Move all the hobbits back to the shire
  var allOfTheHobbits = document.querySelectorAll(".hobbits");
  var theShire = document.getElementById(lands[0]);
    console.log(allOfTheHobbits);
    console.log(theShire);

  // for (var i = 0; i < allOfTheHobbits.length; i++) {

  // }

  /*// add each hobbit and buddy one at a time to 'the-fellowship'
  var listOfTheFellowship = document.querySelectorAll("li"); //getElementById("buddies-list");

  for (var i = 0; i < listOfTheFellowship.length; i++) {
      //console.log(character);
      fellowship.appendChild(listOfTheFellowship[i]);

    var character = listOfTheFellowship[i].textContent;

    // after each character is added make an alert that they have joined your party
    alert(character + " has joined the Fellowship of the Rings!");
  }*/
}

thereAndBackAgain();
