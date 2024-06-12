import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '122e21f',
        },
        {
          name: 'Frank',
          id: '21egwef',
        },
        {
          name: 'Jacky',
          id: 'e32fewqf',
        },
      ],
    };
  }
  render() {
    return (
    <div className="App">
      {this.state.monsters.map((monster) => {
      return(
        <div key={monster.id}>
      <h1>{monster.name}</h1>;
      </div>
      );
    })}
    </div>
  );
}
}

export default App;
