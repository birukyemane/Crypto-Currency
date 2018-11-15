import React from 'react';

const Coin = (props) => {
    const {name, rank, price_usd, available_supply, percent_change_24h} = props.coin;
    const changeClass = (percent_change_24h>0? 'green':'red');
    const detail = 'detail ';
    return (    
          <div className="coinInfo"> 
            <div className="detail">{rank}</div>
            <div className="detail">{name}</div>
            <div className="detail">{price_usd}</div>
            <div className="detail">{available_supply}</div>
            <div className= {detail.concat(changeClass)}>{percent_change_24h} %</div>
         </div> 
    );        
}

export default Coin;