/*Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje para cada persona que asista al evento la próxima vez. Para eso, nuestra tarea es tener una función que devuelva un array donde cada posición tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.

return ==>
[
  { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
 */

const addGreeting = (listOfParticipants) => {
  return listOfParticipants.map((participant) => {
    const greeting = `Hi ${participant.firstName}, what do you like the most abaut ${participant.language}?`
    return{
        ...participant,
        greeting : greeting
    }
  });
};

const listOfParticipants = [
  {
    firstName: "Sofia",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];
console.log(addGreeting(listOfParticipants));
