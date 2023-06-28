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
            <div className='wordCard__translation'>{pressed && `${props.rus}`}</div>
            <button className='wordCard__btn' onClick={handleChange}>Показать перевод</button>
        </div>
    );
}

export default WordCard;