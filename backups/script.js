document.getElementById('submitname').onclick = getName();
function getName() {
    player.username = document.getElementById('entername').value;
}
let player = {
    username: getName(),
    class:getClass
};
//inner text
document.getElementById('name').innerHTML = player.username;
document.getElementById('lvltext').innerHTML = player.lvl;
document.getElementById('classtext').innerHTML = player.class;
document.getElementById('hpbar').innerHTML = player.hp + '/' + player.maxHP;
document.getElementById('manabar').innerHTML = player.mana + '/' + player.maxMANA;
document.getElementById('xpbar').innerHTML = player.xp + '/' + player.xpRequired;

//widths
document.getElementById('hpbar').style = math.floor(player.hp / player.maxHP);
document.getElementById('manabar').style = math.floor(player.mana / player.maxMANA);
document.getElementById('xpbar').style.width = math.floor(player.xp / player.xpReqired);

//enemy logic
function enemy(race, rank, lvl, hp, ATK, DEF, INT, reward) {
    this.race = races.indexOf(math.floor(math.random() * 9));
    this.hp = 75;
    this.lvl = 1;
    this.ATK = 25;
    this.DEF = 15;
    this.critical = this.ATK * 1.75;
    this.type = ranks.indexOf(math.floor(math.random() * 1));
    this.reward = 20;

    if (this.rank = 'Minion') {
        this.reward = math.floor(this.reward * 1);
        this.hp = math.floor(this.hp * 1)
        this.ATK = math.floor(this.ATK * 1)
        this.DEF = math.floor(this.DEF * 1)
    }
    if (this.rank = 'Fighter') {
        this.reward = math.floor(this.reward * 3);
        this.hp = math.floor(this.hp * 1.5)
        this.ATK = math.floor(this.ATK * 3)
        this.DEF = math.floor(this.DEF * 1.5)

    }
    if (this.rank = 'Defender') {
        this.reward = math.floor(this.reward * 3);
        this.hp = math.floor(this.hp * 3)
        this.ATK = math.floor(this.ATK * 1.5)
        this.DEF = math.floor(this.DEF * 3)
    }
    if (this.rank = 'Miniboss') {
        this.reward = math.floor(this.reward * 5);
        this.hp = math.floor(this.hp * 5)
        this.ATK = math.floor(this.ATK * 5)
        this.DEF = math.floor(this.DEF * 5)
    }
    if (this.rank = 'Boss') {
        this.reward = math.floor(this.reward * 10)
        this.hp = math.floor(this.hp * 10)
        this.ATK = math.floor(this.ATK * 10)
    }
}
//classes
const races = [
    'Goblins', 'Orcs', 'Elf',
    'Lizardfolk', 'Human', 'Dwarf',
    'Undead', 'Animal',
];

const classes = [
    'Swordsman', 'Mage', 'Bard',
    'Druid', 'Fighter', 'Archer',
    'Samurai', 'Monk', 'Defender', 
    'Paladin'
];
const ranks = [
    'Minion', 'Fighter', 'Defender', 'Miniboss', 'Boss'
];
const spellNames = [
    'Mana Beam', 'Mana Burst', 'Mana Rain'
];
document.getElementById('').onclick = function getClass() {
    document.getElementById('').class = 'buttonSelected';
}
