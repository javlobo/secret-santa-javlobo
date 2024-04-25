import { useRef } from 'react';

import { members } from "../../services/members.api";

const MembersList = () => {
  const membersRef = useRef(members);

  const renderFamily = (family) => {
    if (family.size === 0) return <div>{`Doesn't have family`}</div>;

    const arrayFamily = Array.from(family);
    return (
      <div>
        <h4>Is familiar of:</h4>
        <p>
          {arrayFamily.map((familiarId) => {
            return (
              <span>{` ${membersRef.current.entities[familiarId].name}`}</span>
            );
          })}
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2>Members:</h2>
      <div>
        {membersRef.current.ids.map((memberId) => {
          const member = membersRef.current.entities[memberId];
          return (
            <div>
              <h3>{member.name}</h3>
              {renderFamily(member.family)}
            </div>
          );
        })}
      </div>  
    </div>
  )
}

export default MembersList;