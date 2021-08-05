export const synonyms = ['marvelous', 'delightful', 'dreamy', 'wicked', 'brilliant', 'smashing', 'fine', 'galactic', 'grand']

export function randomWord(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function dayName(day) {
  return day[new Date().getDay()];
}