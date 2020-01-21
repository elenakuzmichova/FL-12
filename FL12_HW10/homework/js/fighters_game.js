function Fighter({name, damage, strength, agility, hp}) {
    let totalHealth = hp;
    let winsNumber = 0;
    let lossesNumber = 0;
    return {
        getName: function() {
            return name;
        },
        getDamage: function() { 
            return damage;
        },
        getStrength: function() {
            return strength;
        },
        getAgility: function() {
            return agility;
        },
        getHealth: function() {
            return hp;
        },
        attack: function(defender) {
            const maxAttackCoef = 100;
            let randomNumber = Math.random();
            let a = randomNumber * maxAttackCoef;
            let b = defender.getStrength() + defender.getAgility();
            if (a < b) {
                console.log(`${name} attack missed`);
            } else {
                defender.dealDamage(damage);
                console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
            }
        },

        logCombatHistory: function() {
            console.log(`Name: ${name}, Wins: ${winsNumber}, Losses: ${lossesNumber}`);
        },
        heal: function(growth) {
            const addHealth = hp + growth;
            hp = addHealth > totalHealth ? totalHealth : addHealth;
        },
        dealDamage: function(decrease) {
            const damHealth = hp - decrease;
            hp = damHealth < 0 ? 0 : damHealth;
        },
        addWin: function() {
            winsNumber++;
        },
        addLoss: function() {
            lossesNumber++;
        }
    }
}

function battle(fighter1, fighter2) {
        const dead = isDead(fighter1, fighter2);
        if (dead) {
            console.log(`${dead.getName()} is dead and can't fight`);
            return;
        }
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if (fighter1.getHealth() > fighter2.getHealth()) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} has won!`);    
        } else {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(`${fighter2.getName()} has won!`);
        }
    } 


function isDead(fighter1, fighter2) {
    if (fighter1.getHealth() <= 0) {
        let dead = fighter1;
        return dead;
    } else if (fighter2.getHealth() <= 0) {
        let dead = fighter2;
        return dead;
    }
  }

const fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
const fighter2 = new Fighter({ name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90 });
battle(fighter1, fighter2);