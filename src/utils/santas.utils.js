/**
 * Returns a shuffled array of members ids.
 * @param {Array<string>} members
 * s@returns {Array<string>}
*/
export const getShuffledMembers = (members) => {
  const shuffledMembers = [...members];
  for (let i = shuffledMembers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
  }
  return shuffledMembers;
};

/**
 * Returns a new year based on a list of past years.
 * If the list is empty, it returns the current year,
 * otherwise, returns the last year of the list plus one.
 * @param {Array<string>} yearsIds
 * @returns {string}
*/
export const getNewYear = (yearsIds) => {
  if (yearsIds.length === 0) {
    return new Date().getFullYear().toString();
  }
  const currYear = Number(yearsIds[yearsIds.length - 1]) + 1;
  return currYear.toString();
};

/**
 * Returns the santas that were assigned before for a member in the last N years.
 * If the list exceeds the limit of years, it removes the first santa to be available again for the member.
 * @param {Set<string>} avbPastSantas
 * @param {number} limitYears
 * @returns {Set<string>}
*/
export const getPastSantas = (avbPastSantas, limitYears) => {
  if (avbPastSantas.size < limitYears) return new Set(avbPastSantas);
  const arraySantas = Array.from(avbPastSantas);
  arraySantas.shift();
  return new Set(arraySantas);
};