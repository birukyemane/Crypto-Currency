import React, { Component } from 'react';
import Header from './components/Header.js';
import Coin from './components/Coin';
import ColumnHeader from './components/ColumnHeader.js';
import './App.css';
import {sortString,sortNumber} from './utilities/functions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faArrowDown);

const API = 'https://api.coinmarketcap.com/v1/ticker/?limit=';
const DEFAULT_QUERY = '20';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      result: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ coins: data, result:data }));
  }

  search = (e) => {
    const searchResult = this.state.coins.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({result: searchResult});
  }

  sort = (key,option) => {
    let array = [...this.state.result];
    if (key === 'name') {
      sortString(key, option,array);
    } else {
      sortNumber(key,option,array);
    }   
    this.setState({result: array});
  }

  render() {
    const {result} = this.state;
    const displayCoins = result.map(coin => <Coin key={coin.id} coin={coin}/>);
    return (
     <div className="app">
       <Header numOfResults= {this.state.countries} search={this.search}/>
       <div className="content">
       <div className="title"> 
          <ColumnHeader name='Rank' targetKey= 'rank' sort={this.sort}></ColumnHeader> 
          <ColumnHeader name='Name' targetKey= 'name' sort={this.sort}></ColumnHeader>  
          <ColumnHeader name='Price' targetKey= 'price_usd' sort={this.sort}></ColumnHeader>  
          <ColumnHeader name='Circulating supply' targetKey= 'available_supply' sort={this.sort}></ColumnHeader>  
          <ColumnHeader name='Change (24h)' targetKey= 'percent_change_24h' sort={this.sort}></ColumnHeader>  
        </div> 
       {displayCoins}
       </div>       
     </div>
    );
  }
}

export default App;
