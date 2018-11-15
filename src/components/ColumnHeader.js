import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ColumnHeader = (props) => {
    const {name, targetKey, sort} = props;
    const arrowUp =  <FontAwesomeIcon  icon="arrow-up" onClick={e => sort(targetKey,'A')}/>;
    const arrowDown =  <FontAwesomeIcon  icon="arrow-down" onClick={e => sort(targetKey,'D')}/>;
    return (    
        <div className="detail">{name} {arrowUp} {arrowDown}</div>
    );        
}

export default ColumnHeader;