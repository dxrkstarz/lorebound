//player
let player = {
    username:'dxrk',
    level:1,
    xpReqired:20,
    xp:0,
    class:'Mage',
    race:'Human'
}
//enemy logic
class Enemy {
    constructor() {
        this.race = races[math.floor(math.random() * 9)];
        this.hp = 75;
        this.level = 1;
        this.ATK = 25;
        this.DEF = 15;
        this.critical = this.ATK * 1.75;
        this.type = ranks[math.floor(math.random() * 1)];
        this.reward = 20;

        switch (this.rank) {
            case 'Minion':
                this.reward = math.floor(this.reward * 1);
                this.hp = math.floor(this.hp * 1)
                this.ATK = math.floor(this.ATK * 1)
                this.DEF = math.floor(this.DEF * 1)
                break;
            case 'Fighter':
                this.reward = math.floor(this.reward * 3);
                this.hp = math.floor(this.hp * 1.5)
                this.ATK = math.floor(this.ATK * 3)
                this.DEF = math.floor(this.DEF * 1.5)
                break;
            case 'Defender':
                this.reward = math.floor(this.reward * 3);
                this.hp = math.floor(this.hp * 3);
                this.ATK = math.floor(this.ATK * 1.5);
                this.DEF = math.floor(this.DEF * 3);
                break;
            case 'Miniboss':
                this.reward = math.floor(this.reward * 5);
                this.hp = math.floor(this.hp * 5);
                this.ATK = math.floor(this.ATK * 5);
                this.DEF = math.floor(this.DEF * 5);
                break
            case 'Boss':
                this.reward = math.floor(this.reward * 10);
                this.hp = math.floor(this.hp * 10);
                this.ATK = math.floor(this.ATK * 10);
                break

        }
    }
}


//inner text
document.getElementById('name').innerHTML = player.username;
document.getElementById('leveltext').innerHTML = player.level;
document.getElementById('classtext').innerHTML = player.class;
document.getElementById('hpbar').innerHTML = player.hp + '/' + player.maxHP;
document.getElementById('manabar').innerHTML = player.mana + '/' + player.maxMANA;
document.getElementById('xpbar').innerHTML = player.xp + '/' + player.xpRequired;

//widths
document.getElementById('hpbar').style = math.floor(player.hp / player.maxHP);
document.getElementById('manabar').style = math.floor(player.mana / player.maxMANA);
document.getElementById('xpbar').style.width = math.floor(player.xp / player.xpReqired);

//enemy logic

//classes
const races = [
    'Goblins', 'Orcs', 'Lizardman',
    'Elf', 'Human', 'Dwarf',
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


if (xp > xpReqired) {
    xp = 0;
}