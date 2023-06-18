import './WordCard.scss';

function WordCard(props) {
    return (
        <div className='wordCard'>
            <div className='wordCard__text'>{props.text}</div>
        </div>
    );
}

export default WordCard;