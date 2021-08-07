export const synonyms = ['marvelous', 'delightful', 'dreamy', 'wicked', 'brilliant', 'smashing', 'fine', 'galactic', 'grand']

export function randomWord(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function dayName(day) {
  return day[new Date().getDay()];
}

export function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}