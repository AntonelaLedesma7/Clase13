/*Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego. Haga una función que utilice una clase para crear nuestro objeto “héroe”
Debe tener las siguientes propiedades y valores.
*/

class Hero {
  constructor(name = "Héroe") {
    this.name = name,
    this.ranking = "00",
    this.health = 100,
    this.damage = 5,
    this.experience = 0;
  }
}

const aNewHero = ({ name }) => new Hero(name);

const myNewHero = aNewHero({ name: "Iron Man" });
console.log(myNewHero.name);
