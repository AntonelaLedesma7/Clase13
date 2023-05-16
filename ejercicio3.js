/*
Ahora queremos hacer una simulación de batalla Jugador vs Jugador. Necesitamos una propiedad que diga si el héroe está vivo o no. Modificar el método attack para hacer daño a otro héroe. Controlar cuando uno de los héroes es derrotado y mostrar un mensaje acorde a la situación.
 isAlive = true
 attack = Recibe un héroe objetivo por parámetro, muestra un mensaje con el poder del ataque, realiza daño a su objetivo según el ataque del héroe y aumenta su experiencia en 10 solo si derrota al objetivo.
*/

class Hero {
  constructor(name = "Héroe") {
    this.name = name,
    this.ranking = "00",
    this.health = 100,
    this.damage = 5,
    this.experience = 0,
    this.isAlive = true;
  }

  talk(name) {
    return `Hola ${name}!`;
  }

  attack(power, enemyHero) {
    console.log(`Poder de ${this.name}: ${power}`);
    enemyHero.takeDamage(power);
    if (enemyHero.isAlive === false) {
      this.experience += 10;
    }
  }

  takeDamage(damage) {
    this.health -= damage;
    this.health = Math.max(this.health, 0);
    if (this.health === 0) {
      this.isAlive = false;
    }
    console.log(`Vida de ${this.name}: ${this.health}`);
  }
}

const aNewHero = ({ name }) => new Hero(name);

const myNewHero = aNewHero({ name: "Iron Man" });
const myHero2 = aNewHero({ name: "Capitán América" });

// simulación de batalla

while (myNewHero.isAlive && myHero2.isAlive) {
  myNewHero.attack(17, myHero2);
  myHero2.attack(15, myNewHero);
}

if (myNewHero.isAlive) {
  console.log(`Iron Man ganó!`);
} else {
  console.log(`Capitán América ganó`);
}
