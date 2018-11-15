import React from 'react';

const Header = (props) =>{
    return (
            <header>
                <div className="left">
                    <h3>Crypto Currency</h3>                    
                </div> 
                <div className="right">
                    <input placeholder="search" onChange={props.search}/>
                </div>   
            </header>
    );
}

export default Header;