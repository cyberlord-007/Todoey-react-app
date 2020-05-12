import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return(
        <div className='header'>
            <FontAwesomeIcon icon='check-square' size='2x'/>
            <h1>Todoey</h1>
        </div>
    )
}
export default Header
