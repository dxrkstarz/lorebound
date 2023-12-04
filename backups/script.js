const player = {
    username: "Ryu",
    level: 1,
    race: "Human",
    class: "Swordsman",
    maxhp: 100,
    maxmp: 100,
    maxstm: 40,
    xpRequired: 30,
    hp: this.maxhp,
    mp: this.maxmp,
    stm: this.maxstm,
    xp: 0,
    atk: 50,
    int: 8,
    attacks: {
      attack1: {
        name: "Sword Slash",
        damage: math.floor(player.atk * 1),
        cd: 1,
        mpcost: 0,
        stmcost: 4,
      },
      attack2: {
        name: "Sword Burst",
        damage: math.floor(player.atk * 1.25),
        cd: 3,
        mpcost: 0,
        stmcost: 6,
      },
      attack3: {
        name: "Sword Dance",
        damage: math.floor(player.atk * 2.5),
        cd: 12,
        mpcost: 12,
        stmcost: 4,
      },
    },
  };
  switch (player.race) {
    case "Human":
      player.maxhp = 100;
      player.maxmp = 50;
      player.atk = 20;
      player.def = 10;
      player.int = 8;
      break;
  }
  switch (player.class) {
    case "Swordsman":
      player.maxhp = math.floor(player.maxhp * 1.285);
      player.maxmp = math.floor(player.maxmp * 0.75);
      player.atk = math.floor(player.maxhp * 2.5);
      player.def = math.floor(player.def * 1.2);
      player.int = math.floor(player.int * 0.5);
      break;
    case "Mage":
      player.maxhp = math.floor(player.maxhp * 1.25);
      player.maxmp = math.floor(player.maxmp * 2);
      player.atk = math.floor(player.maxhp * 1.2);
      player.def = math.floor(player.def * 0.875);
      player.int = math.floor(player.int * 2.5);
      break;
  }
  var item1 = {
      name:'HP Pot',
      class:'Consumeable',
  }
  document.getElementById("hpbar").innerHTML = player.hp + "/" + player.maxhp;
  document.getElementById("mpbar").innerHTML = player.mp + "/" + player.maxmp;
  document.getElementById("xpbar").innerHTML =
    player.hp + "/" + player.xpRequired;
  document.getElementById("racedisplay").innerHTML =
    player.race + " " + player.class;
  document.getElementById("leveldisplay").innerHTML = "Level " + player.level;
  document.getElementById("namedisplay").innerHTML = player.username;
  
  document.getElementById("item1").onmouseover = function () {
    document.getElementById("itemname").innerHTML = item1.name
    document.getElementById("itemclass").innerHTML = item1.class
  };
  