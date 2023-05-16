/*
Queremos mejorar nuestro creador de personajes. Necesitamos que los personajes sean capaces de saludar, atacar y recibir daño. Considere los siguientes métodos.
MÉTODOS:
talk: Recibe un nombre por parámetro y saluda a dicho nombre.
attack:Recibe un valor por parámetro, muestra un mensaje con el poder del ataque, y aumenta su experiencia en 10.
takeDamage: Recibe un valor por parámetro, sufre el daño recibido en sus puntos de vida, y muestra la vida restante.
*/

class Hero {
  constructor(name = "Héroe") {
    this.name = name,
    this.ranking = "00",
    this.health = 100,
    this.damage = 5,
    this.experience = 0;
  }

  talk(name) {
    console.log(`Hola ${name}!`);
  }

  attack(power) {
    console.log(`Poder: ${power}`);
    this.experience += 10;
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`Vida: ${this.health}`);
  }
}

const aNewHero = ({ name }) => new Hero(name);

const myNewHero = aNewHero({ name: "Iron Man" });
console.log(myNewHero.name);
myNewHero.talk("Steve");
myNewHero.attack(8);
myNewHero.takeDamage(5);
