import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    valueCounter: 0
  };

  componentDidMount() {
    //Au chargement du composant 🚨
    // Faire la requete pour avoir la valeur de mon counter🚨
    //    une fois qu'on a capté la valeur🚨
    //    changer le state avec la bonne valeur🚨

    axios.get('http://localhost:3001/valueCounter').then(response => {
      // handle success

      this.setState({ valueCounter: response.data.value });
    });
  }

  increment = () => {
    //Faire la requete pour incrémenter🚨
    //  une fois qu'on a réussi, il faut capter la nouvelle valeur🚨
    //  changer le state🚨

    axios.post('http://localhost:3001/increment').then(response => {
      // handle success

      this.setState({ valueCounter: response.data.value });
    });
  };

  decrement = () => {
    axios.post('http://localhost:3001/decrement').then(response => {
      // handle success

      this.setState({ valueCounter: response.data.value });
    });
  };
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px'
          }}
        >
          <div style={{ fontSize: '40px', fontWeight: 'bold' }}>
            {this.state.valueCounter}
          </div>
          <div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
