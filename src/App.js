import User from './components/user/User';
import UsersDisplay from './components/ui/UsersDisplay';
import './App.css';

function App() {

  const CurrentUsers = [
    {
      id: 1,
      username: 'James',
      age: 25
    },
    {
      id: 2,
      username: 'Ellen',
      age: 32
    },
  ]

  return (
    <div>
      <User />
      <UsersDisplay items={CurrentUsers}/>
    </div>
  );
}

export default App;
