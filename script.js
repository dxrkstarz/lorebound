const player = {
  username: "Ryu",
  level: 1,
  race: "Human",
  class: "Swordsman",
  maxhealth: 100,
  maxmana: 100,
  maxstamina: 40,
  xpRequired: 30,
  hp: this.maxhealth,
  mp: this.maxmana,
  stm: this.maxstamina,
  stats:{
    atk:10,
    def:10,
    dex:10,
    int:10,
    faith:10,
    luck:10,
    charisma:10,
  }
};
switch (player.race) {
  case "Human":
    player.maxhealth = 100;
    player.maxmana = 50;
    player.atk = 20;
    player.def = 10;
    player.int = 8;
    break;
  case "Lizardman":
    player.maxhealth = 125;
    player.maxmana = 40;
    player.atk = 40;
    player.def = 20;
    player.int = 4
    break

}
switch (player.class) {
  case "Swordsman":
    player.maxhealth = math.floor(player.maxhealth * 1.285);
    player.maxmana = math.floor(player.maxmana * 0.75);
    player.atk = math.floor(player.maxhealth * 2.5);
    player.def = math.floor(player.def * 1.2);
    player.int = math.floor(player.int * 0.5);
    break;
  case "Mage":
    player.maxhealth = math.floor(player.maxhealth * 1.25);
    player.maxmana = math.floor(player.maxmana * 2);
    player.atk = math.floor(player.maxhealth * 1.2);
    player.def = math.floor(player.def * 0.875);
    player.int = math.floor(player.int * 2.5);
    break;
};

var item1 = {
  name: "HP Pot",
  class: "Consumeable",
};
const healthbar = document.getElementById("hpbar");
const manabar = document.getElementById("mpbar");
const stmbar = document.getElementById("stmbar");
const xpbar = document.getElementById("xpbar");

hpbar.innerHTML = player.hp + "/" + player.maxhealth;
manabar.innerHTML = player.mp + "/" + player.maxmana;

xpbar.innerHTML = player.xp + "/" + player.xpRequired;

hpbar.style.width = math.floor(player.hp / player.maxhealth);
manabar.style.width = math.floor(player.mp / player.maxmana);
xpbar.style.width = math.floor(player.xp / player.xpRequired);

document.getElementById("racedisplay").innerHTML = player.race + " " + player.class;
document.getElementById("leveldisplay").innerHTML = "Level " + player.level;
document.getElementById("namedisplay").innerHTML = player.username;

document.getElementById("item1").onmouseover = function () {
  document.getElementById("iteminfo").style.display = "block";
  document.getElementById("itemname").innerHTML = item1.name;
  document.getElementById("itemclass").innerHTML = item1.class;
};
var fightBtn = document.getElementById("fightButton");