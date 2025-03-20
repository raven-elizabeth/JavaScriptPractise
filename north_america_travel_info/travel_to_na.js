// Use interpolation?
// Research and use alert or Math.random()?

// Bugs I have had
// CURRENT: Prompts repeating themselves, need to add setTimeout() or use a different approach then alerts, make code more reusable, I could use an API or two like I have done in a similar Python project.

//1: My prompts and alerts kept showing before console.log. Both of these automatically appear first, but it seems this could be fixed with extra methods like setTimeout(). I haven't had time to add this in yet, so I altered the official opening line 'So you want to visit North America?' from console.log to an alert so that the program is clearer. The rest of the console.log parts are shown in the console together at the end.
//2: Cannot declare a variable within a function and then use it after, so I let variables = null prior to the function being called.
//3: I was getting an error with a null answer to the first prompt as it couldn't convert to lowercase, I solved this by changing the value of answer from a const to let.

// My idea: travel planner for specific continent - North America
// Intro
alert("So you want to visit North America?");
let answer = prompt(
"Which country would you like to go to? - If you're not sure, type 'anywhere'"
);

// convert answer to lower case to allow for differences in capitalisation
const result = answer.toLowerCase();

// set up math.random in case of 'anywhere' choice
const anywhere = Math.floor(Math.random() * 41);

// phrases to be used throughout
const budget = "How much would you like to spend whilst there? (GBP)";
const card = "Card payments are widely available in this country.";
const cash = "Cash may still be helpful to have in this country.";
const accuracy = "This information is accurate as of September 2024.";

//exchange rate function with scope
let exchange = null;
let gbp = null;
function exchangeRate(rate) {
let gbp = prompt(budget);
if (isNaN(gbp)) {
    alert("Please retry and enter a number.")
} else {
alert(accuracy);
  let exchange = gbp * rate;
}}

//usd funciton
function usd() {
console.log("You will need" + " $" + exchange + " USD");
}

//xcd function
function xcd() {
console.log("You will need" + " EC$" + exchange + " XCD");
}

//eur function
function eur() {
console.log("You will need" + " €" + exchange + " EUR");
}

// provide options for countries in NA (https://en.wikipedia.org/wiki/List_of_North_American_countries_by_area) using booleans and if else
if (result === "canada" || (result === "anywhere" && anywhere === 0)) {
  // short description of country and if contactless is widely available
console.log(
    `${"Canada. Canada is known for its wintery landscapes and natural beauty. The official languages are English and French."} ${card}`
);
exchangeRate(1.77);
console.log("You will need" + " $" + exchange + " CAD");
} else if (
result === "united states" ||
result === "us" ||
result === "usa" ||
result === "united states of america" ||
(result === "anywhere" && anywhere === 1)
) {
console.log(
    `${"The USA is known for its diverse scenery, as well as its sports and entertainment industries. The primary language is English, although Spanish is also widely spoken."} ${card}`
);
exchangeRate(1.31);
usd();
} else if (
result === "greenland" ||
(result === "anywhere" && anywhere === 2)
) {
console.log(
    `${"Greenland is known for its glaciers and arctic lifestyle. The official language is Greenlandic, although Danish and English are common too."} ${card}`
);
exchangeRate(8.83);
console.log("You will need" + " " + exchange + " kr DDK");
} else if (result === "mexico" || (result === "anywhere" && anywhere === 3)) {
console.log(
    `${"Mexico is known for its history, beaches, and food. The official language is Spanish."} ${cash}`
);
exchangeRate(25.88);
console.log("You will need" + " $" + exchange + " MXN");
} else if (
result === "nicaragua" ||
(result === "anywhere" && anywhere === 4)
) {
console.log(
    `${"Nicaragua is known for its volcanoes and lakes. The official language is Spanish, although there are indigeneous languages too."} ${cash}`
);
exchangeRate(48.09);
console.log("You will need" + " C$" + exchange + " NIO");
} else if (result === "honduras" || (result === "anywhere" && anywhere === 5)) {
console.log(
    `${"Honduras is known for its tropical climate and archaeological sites. The official language is Spanish."} ${cash}`
);
exchangeRate(32.34);
console.log("You will need" + " L" + exchange + " HNL");
} else if (result === "cuba" || (result === "anywhere" && anywhere === 6)) {
console.log(
    `${"Cuba is known for its architecture and diverse culture. The official language is Spanish."} ${cash}`
);
exchangeRate(31.32);
console.log("You will need" + " $" + exchange + " CUP");
} else if (
result === "guatemala" ||
(result === "anywhere" && anywhere === 7)
) {
console.log(
    `${"Guatemala is known for its rainforest, volcanoes and Mayan history. The official language is Spanish, although Mayan languages and some indigenous languages are popular too."} ${cash}`
);
exchangeRate(10.11);
console.log("You will need" + " Q" + exchange + " GTQ");
} else if (result === "panama" || (result === "anywhere" && anywhere === 8)) {
console.log(
    `${"Panama is known for its cities and its wildlife, including rainforests. The official language is Spanish."} ${cash}`
);
exchangeRate(1.31);
console.log("You will need" + " ฿" + pab + " PAB or $" + exchange + " USD");
} else if (
result === "costa rica" ||
(result === "anywhere" && anywhere === 9)
) {
console.log(
    `${"Costa Rica is known for its biodiversity and national parks. The official language is Spanish."} ${cash}`
);
exchangeRate(675.94);
console.log("You will need" + " ₡" + exchange + " CRC");
} else if (
result === "dominican republic" ||
(result === "anywhere" && anywhere === 10)
) {
console.log(
    `${"The Dominican Republic is known for its beaches, nature, and production of rum. The official language is Spanish"} ${cash}`
);
exchangeRate(78.09);
console.log("You will need" + " $" + exchange + " DOP");
} else if (result === "haiti" || (result === "anywhere" && anywhere === 11)) {
console.log(
    `${"Haiti is known for its folklore traditions and is warm all year round. The official languages are French and Haitian Creole."} ${cash}`
);
exchangeRate(172.11);
console.log("You will need" + " G" + exchange + " HTG");
} else if (result === "belize" || (result === "anywhere" && anywhere === 12)) {
console.log(
    `${"Belize is known for its jungles, art, and for having the second largest barrier reef in the world. The official language is English, although Spanish and Belizean Creole are widely spoken too."} ${cash}`
);
exchangeRate(2.63);
console.log("You will need" + " $" + exchange + " BZD");
} else if (
result === "el salvador" ||
(result === "anywhere" && anywhere === 13)
) {
console.log(
    `${"El Salvador is known for its earthquakes and volcanoes. The official language is Spanish."} ${cash}`
);
exchangeRate(1.31);
usd();
} else if (
result === "bahamas" ||
result === "the bahamas" ||
result === "commonwealth of the bahamas" ||
(result === "anywhere" && anywhere === 14)
) {
console.log(
    `${"The Bahamas are known for their white sand beaches, swimming pigs and pirate history. The official language is English, although Bahamaian Creole is very popular too."} ${cash}`
);
exchangeRate(1.31);
console.log("You will need" + " $" + exchange + " BSD or USD");
} else if (result === "jamaica" || (result === "anywhere" && anywhere === 15)) {
console.log(
    `${"Jamaica is known for its cuisine, waterfalls, reggae. The official language is English, although Jamaican Patois is more often spoken."} ${cash}`
);
exchangeRate(205.04);
console.log("You will need" + " $" + exchange + " JMD");
} else if (
result === "puerto rico" ||
(result === "anywhere" && anywhere === 16)
) {
console.log(
    `${"Puerto Rico is known for its tropical rainforest, nightlife, dance, and architecture. The official languages are Spanish and English."} ${cash}`
);
exchangeRate(1.31);
usd();
} else if (
result === "trinidad and tobago" ||
result === "trinidad" ||
result === "tobago" ||
(result === "anywhere" && anywhere === 17)
) {
console.log(
    `${"Trinidad and Toabgo are two islands known for their wildlife (especially birds), festivals, and steelpan music. The official language is English, although Trinidadian English Creole and Tobagonian Creole are commonly spoken."} ${cash}`
);
exchangeRate(8.85);
console.log("You will need" + " $" + exchange + " TTD");
} else if (
result === "guadeloupe" ||
result === "basse-terre" ||
result === "grande-terre" ||
result === "marie-galante" ||
result === "la désirade" ||
result === "la desirade" ||
result === "îles des saintes" ||
result === "iles des saintes" ||
(result === "anywhere" && anywhere === 18)
) {
console.log(
    `${"Guadeloupe is a group of six islands, known for its white, pink, and black beaches. It has an active volcano and a variety of fruit/crops. The official language is French, although Les Saintes Creole and Antillean Creole are widely spoken."} ${card}`
);
exchangeRate(1.18);
eur();
} else if (
result === "martinique" ||
(result === "anywhere" && anywhere === 19)
) {
console.log(
    `${"Martinique is known for its flower species, wildlife and scenery. The official language is French, with most of the population speaking Martinican Creole."} ${card}`
);
exchangeRate(1.18);
eur();
} else if (
result === "turks and caicos islands" ||
result === "turks and caicos" ||
result === "turks islands" ||
result === "caicos islands" ||
(result === "anywhere" && anywhere === 20)
) {
console.log(
    `${"The Turks and Caicos Islands are known for its preserved bidodiversity, watersports, and whale watching. The official language is English, with Turks and Caicos Creole being widely spoken."} ${cash}`
);
exchangeRate(1.31);
usd();
} else if (
result === "dominica" ||
(result === "anywhere" && anywhere === 21)
) {
console.log(
    `${"Dominica is known for its coral reefs, hot springs, and the rainforest which dominates the island. The official language is English, with Dominican Creole and Antillean Creole spoken by many."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "saint lucia" ||
(result === "anywhere" && anywhere === 22)
) {
console.log(
    `${"Saint Lucia is known for its mountains, nightlife, and a drive-in volcano. The official language is English, with Saint Lucian French Creole spoken by most."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "curaçao" ||
result === "curacao" ||
(result === "anywhere" && anywhere === 23)
) {
console.log(
    `${"Curaçao is known for its colourful cities, scuba diving, and the liquor made from an orange variety that grows on the island. The official languages are Dutch, Papiamentu, and English, although Spanish is popular too."} ${cash}`
);
exchangeRate(2.35);
console.log("You will need" + " ƒ" + exchange + "ANG");
} else if (
result === "antigua and barbuda" ||
result === "antigua" ||
result === "barbuda" ||
(result === "anywhere" && anywhere === 24)
) {
console.log(
    `${"Antigua and Barbuda are known for sailing, white beaches, and birdwatching. The official language is English, but Antiguan and Barbudan Creole is common."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "barbados" ||
(result === "anywhere" && anywhere === 25)
) {
console.log(
    `${"Bardbados is known for beautiful beaches, caves, surfing, and green monkeys. The official language is English, although Bajan Creole is spoken by most."} ${cash}`
);
exchangeRate(2.64);
console.log("You will need" + " $" + exchange + "BBD");
} else if (
result === "saint vincent and the grenadines" ||
result === "saint vincent" ||
result === "the grenadines" ||
(result === "anywhere" && anywhere === 26)
) {
console.log(
    `${"Saint Vincent and the Grenadines are known for black sand beaches and snorkeling opportunities. The official language is English, although Vincentian Creole is widely spoken."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "united states virgin islands" ||
result === "us virgin islands" ||
(result === "anywhere" && anywhere === 27)
) {
console.log(
    `${"The U.S. Virgin Islands are known for their biodiversity, rainforests, and mountainous landscapes with ample hiking trails. The official language is English."} ${cash}`
);
exchangeRate(1.31);
usd();
} else if (result === "grenada" || (result === "anywhere" && anywhere === 28)) {
console.log(
    `${"Grenada is known for its chocolate and spice production. It is also home to an underwater sculpture park. The official language is English, although there are two different Grenadian Creoles (English/French-based) that are predominately spoken."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "carribean netherlands" ||
result === "bes islands" ||
result === "bonaire" ||
result === "sint eustatius" ||
result === "saba" ||
(result === "anywhere" && anywhere === 29)
) {
console.log(
    `${"The Carribbean Netherlands consist of three islands: Bonaire, Sint Eustatius, and Saba (BES). Bonaire is home to multiple shipwrecks, whilst Sint Eustatius and Saba are each dominated by a dormant volcano. The official language is Dutch, although English and Papiamento are popular too."} ${cash}`
);
exchangeRate(1.31);
usd();
} else if (
result === "cayman islands" ||
(result === "anywhere" && anywhere === 30)
) {
console.log(
    `${"The Cayman Islands are known for scuba diving, cusine, and their beaches. The official language is English, although Cayman Islands English is spoken too."} ${cash}`
);
exchangeRate(1.09);
console.log("You will need" + " $" + exchange + "KYD");
} else if (
result === "saint kitts and nevis" ||
result === "federation of saint christopher and nevis" ||
result === "saint kitts" ||
result === "nevis" ||
(result === "anywhere" && anywhere === 31)
) {
console.log(
    `${"Saint Kitts and Nevis are known for their ruins, mountains, and rainforests. The official language is English, although Saint Kitts Creole is also spoken."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "saint pierre and miquelon" ||
result === "saint pierre" ||
result === "miquelon" ||
(result === "anywhere" && anywhere === 32)
) {
console.log(
    `${"Saint Pierre and Miquelon consists of eight islands. The area is known for fishing and whale watching. The official language is French"} ${cash}`
);
exchangeRate(1.18);
eur();
} else if (result === "aruba" || (result === "anywhere" && anywhere === 33)) {
console.log(
    `${"Aruba is known for its nightlife, white beaches, and rock formations. The official languages are Dutch and Papiamento, but most residents speak at least four languages."} ${cash}`
);
exchangeRate(2.35);
console.log("You will need" + " ƒ" + exchange + "AWG");
} else if (
result === "british virgin islands" ||
result === "tortola" ||
result === "virgin gorda" ||
result === "anegada" ||
result === "jost van dyke" ||
(result === "anywhere" && anywhere === 34)
) {
console.log(
    `${"The British Virgin Islands are known for watersports, fishing, and the landmark 'The Baths'. The official language is English."} ${cash}`
);
exchangeRate(1.31);
usd();
} else if (
result === "montserrat" ||
(result === "anywhere" && anywhere === 35)
) {
console.log(
    `${"Monsterrat is known for its caves and coral reefs. It is also where many notable musical icons recorded albums in the 80s. The official language is English, but Montserrat Creole is spoken too."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (
result === "anguilla" ||
(result === "anywhere" && anywhere === 36)
) {
console.log(
    `${"Anguilla is known for its coral reefs, caves, and seafood. The official language is English."} ${cash}`
);
exchangeRate(3.53);
xcd();
} else if (result === "bermuda" || (result === "anywhere" && anywhere === 37)) {
console.log(
    `${"Bermuda is known for its caves, pink sand beaches, and forts. The official language is English."} ${cash}`
);
exchangeRate(1.31);
console.log("You will need" + " $" + exchange + "BMD or USD");
} else if (
result === "saint martin" ||
result === "collectivity of saint martin" ||
(result === "anywhere" && anywhere === 38)
) {
console.log(
    `${"Saint Martin (French side) is known for its shopping, nude beaches, and cuisine. The official language is French, but Virgin Islands Creole and English are also spoken."} ${cash}`
);
exchangeRate(1.18);
eur();
} else if (
result === "sint maarten" ||
(result === "anywhere" && anywhere === 39)
) {
console.log(
    `${"Sint Maarten (Dutch side) is known for its cusine, nightlife, and Guavaberry rum. The official languages are Dutch and English."} ${cash}`
);
exchangeRate(2.35);
console.log("You will need" + " ƒ" + exchange + "ANG");
} else if (
result === "saint barthélemy" ||
result === "saint barthelemy" ||
(result === "anywhere" && anywhere === 40)
) {
console.log(
    `${"Saint Barthélemy is known for its music, luxury shopping, and fine dining. The official language is French."} ${cash}`
);
exchangeRate(1.18);
eur();
} else if (result === "clipperton island") {
console.log(
    "This is an uninhabited island under the authority of France. It is primarily used for scientific purposes."
);
} else {
  // in case of an error, show the following message as an alert
alert(
    "Make sure you have typed a country in North America or 'anywhere'. Check for grammar or try rephrasing."
);
}

//ending with switch case
const ending = prompt(
"Would you like to know an interesting fact about North America?"
);
end = ending.toLowerCase();
switch (end) {
case "yes":
    const fact = Math.floor(Math.random() * 5);
    if (fact === 1) {
console.log(
        "North America is the 3rd largest continent but the 4th most populated. Europe has a higher population."
);
    } else if (fact === 2) {
console.log(
        "North America has been a key source of information for geological history - the U.S.A. has evidence of the most different types of dinosaurs found in the world."
);
    } else if (fact === 3) {
console.log(
        "Different parts of the world view continents differently. In Latin America, both North and South America are generally considered as one continent - America."
);
    } else if (fact === 4) {
console.log(
        "The largest country in North America is Canada, but the largest city is Mexico City, Mexico."
);
    } else {
console.log(
        "North America is home to the largest dormant volcano, 'Mauna Kea', and the largest active volcano, 'Mauna Loa'. They are both in Hawaii and could be considered taller than Mt Everest if measured from their bases below sea level."
);
    }
default:
    console.log("Thank you for using my program!😊");
}
