const btc1= document.getElementsByClassName("btn1");
const btn2=document.getElementsByClassName("btn2");
const btn3=document.getElementsByClassName("btn3");
const text=document.getElementById("text");

const actions=[{
    name: "go right",
    "button text":["return back","go to the store","use the potion"],
    "button functions":[returnBack,goStore,usePotion],
    text: " you fell into a trap, your health is reduced"

},
{
    name: "go left",
    "button text":["go left","go to the store","go right"],
    "button functions":[goLeft,goStore,goRight],
    text:"you found the first piece"
},
{
    name: "go to store",
    "button text":["return back","buy health","buy the potion"],
    "button functions":[returnBack,buyHealth,buyPotion],
    text:"you entered the store , choose what you want to buy"
}
];

const update=(action)=>{
    btn1.innerText=action["button text"][0];
    btn2.innerText=action["button text"][1];
    btn3.innerText=action["button text"][2];
    btn1.onclick=action["button functions"][0];
    btn2.onclick=action["button functions"][1];
    btn3.onclick=action["button functions"][2];
    text.innerHTML=action.text;

}

const goLeft=()=>{
    update(actions[0]);
}

const goStore=()=>{
    update(actions[1]);
}

const goRight=()=>{
    update(actions[2]);
}

btn1.onclick=goLeft();
btn2.onclick=goStore();
btn3.onclick=goRight();

btn1.addEventListener("click",goLeft);
btn2.addEventListener("click",goStore);
btn3.addEventListener("click",goRight);