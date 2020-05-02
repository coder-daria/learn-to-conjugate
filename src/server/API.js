export function fetchTense(selectedText) {
  return fetch(
    `http://pi.hole:8080/tense/${selectedText}`
  ).then(data => data.json());
}
