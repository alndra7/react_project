import React, { useState } from 'react';

import './WordCard.scss';


function WordCard(props) {

    const [pressed, setPressed] = useState();

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className='wordCard'>
            <div className='wordCard__text'>{props.eng}</div>
            <div className='wordCard__transcription'>{props.transc}</div>
            {pressed && <div className='wordCard__translation'>{props.rus}</div>}
            {!pressed && <button className={props.className} onClick={() => { props.clb(); handleChange(); }} >Показать перевод</button>}
        </div >
    );
}

export default WordCard;