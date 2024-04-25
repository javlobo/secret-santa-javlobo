import { useState, useRef } from "react";

import { members } from "../../services/members.api";
import { getShuffledMembers, getNewYear, getPastSantas } from "../../utils/santas.utils";

// This is the limit of years to choose again a past santa.
const LIMIT_YEARS = 3;

export const useSantas = () => {
  const membersRef = useRef(members);
  const [santasPerYear, setSantas] = useState({
    ids: [],
    entities: {}
  });

  /**
   * Returns a new list of Santas for a new year.
   * For each member, it checks if another member is available.
   * Available means a member that is not assigned before,
   * is not a familiar of the current member,
   * and has not been selected in the last years for the current member.
   * @param {Array<string>} shuffledMembers 
   * @param {Array<string>} availableMembers 
   * @param {string} newYear 
   * @returns 
   */
  const getNewEntity = (shuffledMembers, availableMembers, newYear) => {
    const newEntity = { id: newYear, list: [] };

    for (let member of shuffledMembers) {
      for (let i = 0; i < availableMembers.length; i++) {
        const available = availableMembers[i];
        if (member !== available) {
          const avbEntity = membersRef.current.entities[available];
          const newPastSantas = getPastSantas(avbEntity.pastSantas, LIMIT_YEARS);
          if (!avbEntity.family.has(member) && !newPastSantas.has(member)) {
            const newList = [...newEntity.list];

            newPastSantas.add(member);
            newList.push([member, available]);

            membersRef.current.entities[available].pastSantas = newPastSantas;
            newEntity.list = newList;

            availableMembers.splice(i, 1);
            break;
          }
        }
      }
    }

    return newEntity;
  };

  const assignSantas = () => {
    const newYear = getNewYear(santasPerYear.ids);
    const shuffledMembers = getShuffledMembers(membersRef.current.ids);
    const availableMembers = getShuffledMembers(membersRef.current.ids);
    const newEntity = getNewEntity(shuffledMembers, availableMembers, newYear);

    setSantas(prevSantas => {
      const newSantas = {...prevSantas};
      newSantas.ids = [...santasPerYear.ids, newYear];
      newSantas.entities[newYear] = newEntity;
      return newSantas;
    });
  }

  return { santasPerYear, members: membersRef.current.entities, assignSantas };
};
