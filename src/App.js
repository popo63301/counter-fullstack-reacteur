import React, { Component } from 'react';

class App extends Component {
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
          <div style={{ fontSize: '40px', fontWeight: 'bold' }}> 0</div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
