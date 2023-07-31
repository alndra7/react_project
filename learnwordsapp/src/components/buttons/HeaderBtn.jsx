//import React, { useState, useEffect } from 'react';

import './HeaderBtn.scss';

// const handleChange1 = () => {
//     handleChange();
// };

function HeaderBtn(props) {
    return (
        <button className='headerBtn' >{props.text}</button>
    );
}

export default HeaderBtn;