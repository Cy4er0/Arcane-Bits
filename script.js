let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting; 
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const trapStats = document.querySelector("#trapStats");
const trapName = document.querySelector("#trapName");
//const monsterHealthText = document.querySelector("#monsterHealth");

//change monsters with traps
  const traps=[
    {
    name:'broken glass shards',
    "button text":["return back","defend"],
    "button functions":[returnBack,defend],
    text:"You stepped on glass shards you receive 5 damage"


},
{
    name: "sharp arrows",
    "button text":["returnBack","dodge"],
    "button functions":{returnBack,dodge},
    text:"You have been hit by an arrow you receive 10 damage"

},
{
    name: "throwing knives",
    "button text":["returnBack","dodge"],
    "button functions":[returnBack,dodge],
    text:"you got hit by a knife you receive 20 damage"
}
]

const locations =[{
  name:"square",
  "button text" :["Go left","Go to store","Go right"],
  "button functions":[goLeft,goStore,goRight],
  text:"You awaken in the ruins with no mwmory drawn toward a glowing fragment.As touch it whispers flood your mind a deep voice awaken from the cold piece "

},
{
  name: "store",
  "button text":["Buy 20 health(10gold)","Buy protective rune","Go to the square"],
  "button funtions":[buyHealth, buyRune, goSquare],
  text:"You eter store"
},
{
  name:"Right",
  "button text":["return to the previous room","Go to the store","Use the protective rune"],
  "button functions":[goBack,goStore,useRune],
  text:" You enter the right door"
},
{
  name:"left",
  "button text":{"return to the previous room","Go to the store","Use the protective rune"},
  "button functions":
}]