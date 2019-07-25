/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*function GameObject (Attributes){
    this.createdAt = Attributes.createdAt;
    this.name = Attributes.name;
    this.dimensions = Attributes.dimensions;
  }*/

  class GameObject {
      constructor(Attributes){
          this.createdAt = Attributes.createdAt;
          this.name = Attributes.name;
          this.dimensions = Attributes.dimensions;
      }
      destroy(){
        return `${this.name} was removed from the game.`; 
      }
  }

  /*function CharacterStats (Attributes){
    this.healthPoints = Attributes.healthPoints;
    GameObject.call(this, Attributes);
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function(attacker){ return `${this.name} took ${attacker.damage} damage!` };*/

  class CharacterStats extends GameObject {
      constructor(Attributes){
          super(Attributes);
          this.healthPoints = Attributes.healthPoints;
      }
      takeDamage(attacker){
          return `${this.name} took ${attacker.damage} damage!`;
      }
  }

  /*function Humanoid (Attributes){
    this.team = Attributes.team;
    this.weapons = Attributes.weapons;
    this.language = Attributes.language;
    CharacterStats.call(this, Attributes);
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet = function(){ return `${this.name} offers a greeting in ${this.language}` };*/

  class Humanoid extends CharacterStats {
      constructor(Attributes){
          super(Attributes);
          this.team = Attributes.team;
          this.weapons = Attributes.weapons;
          this.language = Attributes.language;
      }
      greet(){
          return `${this.name} offers a greeting in ${this.language}.`;
      }
  }

  /*function Hero (Attributes){
    this.damage = Attributes.damage;
    this.race = Attributes.race;
    this.experience = Attributes.experience;
    this.gold = Attributes.gold;
    Humanoid.call(this, Attributes);
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);
  
  Hero.prototype.attacked = function(obj){
    console.log(`${obj.name} attacks ${this.name}!`);
    this.healthPoints = this.healthPoints - obj.damage;
  }*/

  class Hero extends Humanoid {
      constructor(Attributes){
          super(Attributes);
          this.damage = Attributes.damage;
          this.race = Attributes.race;
          this.experience = Attributes.experience;
          this.gold = Attributes.gold;
      }
      attacked(obj){
          console.log(`${obj.name} attacks ${this.name}!`);
          this.healthPoints = this.healthPoints - obj.damage;
      }
  }

  /*function Villain (Attributes){
    Hero.call(this,Attributes);
  }
  
  Villain.prototype = Object.create(Hero.prototype);*/

  class Villain extends Hero {
      constructor(Attributes){
          super(Attributes);
      }
  }

  /* Objects and method calls */

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 25,
    name: 'Hero',
    team: 'Self',
    weapons: [
      'Sword',
      'Axe',
    ],
    language: 'Common',
    damage: 5,
    race: 'Human',
    experience: 0,
    gold: 0,
  });

  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 5,
      height: 4,
    },
    healthPoints: 15,
    name: 'Troll',
    team: 'Bridge 22',
    weapons: [
      'Club',
      'Giant Fish',
    ],
    language: 'Troll',
    damage: 2,
    race: 'Troll',
    experience: 25,
    gold: 50,
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage(villain)); // Bruce took 2 damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  
  while (true){
    //Troll gets first strike!
    hero.attacked(villain); //Troll attacks Hero!
    console.log(hero.takeDamage(villain)); //Hero takes 2 damage!
    if (hero.healthPoints <= 0){
      //Hero has died!
      console.log(`${hero.name} has suffered lethal damage!`);
      console.log(hero.destroy());
      break;
    }
    //Hero counters!
    villain.attacked(hero); //Hero attacks Troll!
    console.log(villain.takeDamage(hero)); //Villain takes 5 damage!
    if (villain.healthPoints <= 0){
      //Troll has died! Yay!
      console.log(`${villain.name} has suffered lethal damage!`);
      console.log(villain.destroy());
      hero.experience += villain.experience;
      hero.gold += villain.gold;
      console.log(`Thou hast done well in slaying the ${villain.name}! Of experience thou hast gained ${villain.experience}. Of gold thou hast gained ${villain.gold}.`);
      break;
    }
  }
