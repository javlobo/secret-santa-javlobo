import './App.css';
import SantasList from '../SantasList/SantasList.component';
import MembersList from '../MembersList/MembersList.component';

const App = () => {
  return (
    <div className="App">
      <MembersList />
      <SantasList />
    </div>
  );
}

export default App;
