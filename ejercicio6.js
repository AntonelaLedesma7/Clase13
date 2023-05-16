/* Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una función que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo:




return ('Ruby') ==> true

*/

const findLanguage = (listOfParticipants, language) => { 
    return listOfParticipants.some( (participants) => participants.language === language)
}

const list = [
  { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 28, language: 'Javascript' },
  { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

console.log(findLanguage(list, "Ruby"))