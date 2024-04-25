import { useSantas } from './useSantas.hook';

const SantasList = () => {
  const { santasPerYear, members, assignSantas } = useSantas();

  return (
    <div>
      <button onClick={assignSantas}>Sort Santas</button>
      <div>
        {santasPerYear.ids.map((yearId) => {
          return (
            <div key={yearId}>
              <h3>Year {yearId}</h3>
              <ul>
                {santasPerYear.entities[yearId].list.map((santas, i) => {
                  return (
                    <li key={`${yearId}-${i}`}>
                      {`${members[santas[0]].name} is the Secret Santa for ${members[santas[1]].name}`}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SantasList;