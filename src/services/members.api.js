/**
 * This could be a parsed response for a fake API request.
 * IDs are for rendering each member in the list inside of the UI.
 * Each member entity contains:
 * 1. Member's name.
 * 2. Member's family IDs list.
 * 3. A list of members that were assigned as secret santas before for that member.
 * 
 * Family and PastSantas are Sets for searching faster at the moment of assigning secret santas.
 * 
 * TODO: Set this inside of a Redux store.
 */
export const members = {
  ids: ['1', '2', '3', '4', '5', '6'],
  entities: {
    "1": {
      id: '1',
      name: 'Anna',
      family: new Set(['2', '3']),
      pastSantas: new Set([]),
    },
    "2": {
      id: '2',
      name: 'Bianca',
      family: new Set(['1', '3']),
      pastSantas: new Set([]),
    },
    "3": {
      id: '3',
      name: 'Charly',
      family: new Set(['1', '2']),
      pastSantas: new Set([]),
    },
    "4": {
      id: '4',
      name: 'Dario',
      family: new Set([]),
      pastSantas: new Set([]),
    },
    "5": {
      id: '5',
      name: 'Estella',
      family: new Set(['6']),
      pastSantas: new Set([]),
    },
    "6": {
      id: '6',
      name: 'Fernand',
      family: new Set(['5']),
      pastSantas: new Set([]),
    },
  }
};