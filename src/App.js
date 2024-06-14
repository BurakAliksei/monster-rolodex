import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=> this.setState(() => {
      return {monsters: users};
    }, 
  () => {
    console.log(this.state);
  }
)
    );
  } 
  render() {
    console.log('render');
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    //There is a mistake but i cannot see it
    const filteredMonsters = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });
    return (
      <div className='App'>
        <input
         className='search-box'
        type='search'
        placeholder='search monsters'
        onchange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>
          );
        })}
      </div>
    );
  }
}
    
    
export default App;
