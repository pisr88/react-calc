import React from 'react';
import Operation from './Operation';
import Score from './Score';

function Header (props) {
    return (
    <div>
        <Operation />
        <Score />
    </div>
    );
}

export default Header;