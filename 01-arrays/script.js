const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers.at(3);
console.log(fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick"

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = "Luca";
const lastTeacherRemoved = teachers.pop()
console.log(teachers, lastTeacherRemoved)


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = "Nathan";
const firstTeacherRemoved = teachers.shift()
console.log(teachers, firstTeacherRemoved)

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
const newLastTeacher = "Vanessa"
const addNewLastTeacher = teachers.push(newLastTeacher)
console.log(teachers)


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
const newFirstTeacher = "Sarah"
const addNewFirstTeacher = teachers.unshift(newFirstTeacher)
console.log(teachers)

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = "true";
const findFabio = teachers.includes("Fabio")
console.log(findFabio)

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = 5;
const lewis = teachers.indexOf("Lewis")
console.log(lewis)
 

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = "Sarah,Ed,Fabio,Phil,Carlo,Lewis,Vanessa";
console.log(teachers.join())

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = nteachers.length === 0;
console.log(isTeachersEmpty)
