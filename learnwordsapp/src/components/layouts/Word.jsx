import React, { useState } from 'react';

function Word(props) {

    const [pressed, setPressed] = useState();

    const deleteWord = () => {
        console.log(props.id);
    };

    const handleChange = () => {
        setPressed(!pressed);
        console.log(props.id);
    };

    return (
        <>
            {/* <th className={stylesTable.wordId}>{id}</th>
            <th className={stylesTable.english}>{english}</th>
            <th className={stylesTable.transcription}>{transcription}</th>
            <th className={stylesTable.topic}>{tags}</th>
            <th className={stylesTable.translation}>{russian}</th> */}

            <tr id={props.id}>
                <th >{props.count}</th>
                <th >{props.english}</th>
                <th >{props.transcription}</th>
                {/* <th >{props.tags}</th> */}
                <th >{props.russian}</th>

                <th className="edit-buttons">
                    <div className="table-buttons">
                        {pressed && <button onClick={handleChange}>Сохранить</button>}
                        {pressed && <button onClick={handleChange}>Отменить</button>}

                        {!pressed &&
                            <button onClick={handleChange}>
                                {/* <img
                            src={editIcon}
                            className="edit icon"
                            alt="Edit"
                            title="Edit word"
                        /> */}
                                Редактировать
                            </button>}  {" "}
                        <button onClick={() => deleteWord(props.id)}>
                            {/* <img
                            src={deleteIcon}
                            className="delete icon"
                            alt="Delete"
                            title="Delete word"
                        /> */}
                            Удалить
                        </button>
                    </div>
                </th>
            </tr>
        </>
    );
};

export default Word;

//function 