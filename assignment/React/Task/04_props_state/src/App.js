import Counter from "./Component/Counter";
import UserCard from "./Component/UserCard";



function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My React App</h1>

      <UserCard name='Malek' age="21" location="Ahmedabad" />


      <Counter />
    </div>
  );
}

export default App;
