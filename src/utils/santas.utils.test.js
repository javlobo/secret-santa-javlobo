import { getShuffledMembers, getNewYear, getPastSantas } from "./santas.utils";

describe('Santas Utils are working', () => {
  it('getShuffledMembers is working', () => {
    const membersIds = ['1', '2', '3', '4', '5', '6', '7'];
    const shuffledMembers = getShuffledMembers(membersIds);
    expect(shuffledMembers).toHaveLength(membersIds.length);
    expect(membersIds).not.toEqual(expect.not.arrayContaining(shuffledMembers));
  });

  it('getNewYear is working', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-02-01'));
    expect(getNewYear(['2020', '2021'])).toEqual('2022');
    expect(getNewYear([])).toEqual('2024');
    jest.useRealTimers();
  });

  it('getPastSantas is working', () => {
    const pastSantas = new Set(['2', '3']);
    expect(getPastSantas(pastSantas, 3)).toEqual(pastSantas);
    const fullPastSantas = new Set(['2', '3', '4']);
    expect(getPastSantas(fullPastSantas, 3)).toEqual(new Set(['3', '4']));
  });
})