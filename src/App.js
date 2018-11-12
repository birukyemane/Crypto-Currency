import React, { Component } from 'react';

const API = 'https://api.coinmarketcap.com/v1/ticker/?limit=';
const DEFAULT_QUERY = '20';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const { hits } = this.state;
    const displayCoins = hits.map(hit => <div key={hit.id}>{hit.name}</div>);
    return (
     <div>
       {displayCoins}
     </div>
    );
  }
}

export default App;
