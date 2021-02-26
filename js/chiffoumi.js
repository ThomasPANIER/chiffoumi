//Code js pour le lancement d'un jeu du style chiffoumi.

//pop-up d'affichage "bonjour"
alert("Bonjour noble guerrier !");

//pop-up fenetre pour entrer le nom, puis pop-up merci + nom entré
var playerName = prompt("Avant de pouvoir combattre,\n           entre ton nom: ");
         //var name = prompt();

alert("Merci " + playerName + "!");

//Stokage des valeures pierre, feuille et ciseau.
var choices = [
            "Pierre",
            "Feuille",
            "Ciseau"
];


//Choix du joueur entre les 3 valeures.
var playeurChoice = prompt("Choisis une de ces trois armes:\nPierre   ou   Feuille   ou   Ciseau");

//Choix de l'ordinateur entre les 3 valeures de façon aléatoire.
var ia = getRandomInt(3);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
        //console.log(getRandomInt(2));

console.log(ia);

var computerChoice = alert("L'ennemie a choisi l'arme: " + "\n" + "                 " + choices[ia]);

console.log(computerChoice);