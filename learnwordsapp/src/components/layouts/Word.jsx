import React, { useState } from 'react';

import editIcon from './../../assets/icons/pen-solid.svg'
import deleteIcon from './../../assets/icons/trash-solid.svg'
import saveIcon from './../../assets/icons/check-solid.svg'
import cancelIcon from './../../assets/icons/xmark-solid.svg'

function Word(props) {

    const [pressed, setPressed] = useState();
    let [english, setEnglish] = useState(props.english);
    let [transcription, setTranscription] = useState(props.transcription);
    let [russian, setRussian] = useState(props.russian);

    const deleteWord = () => {
        console.log(props.id);
    };

    const handleChange = () => {
        setPressed(!pressed);
        console.log(props.id);
    };

    const handleEditEnglish = (e) => {
        setEnglish(english = e.target.value);
    };

    const handleEditTranscription = (e) => {
        setTranscription(transcription = e.target.value);
    };

    const handleEditRussian = (e) => {
        setRussian(russian = e.target.value);
    };

    return (
        <>

            <tr id={props.id}>

                <th >{props.count}</th>
                {!pressed ?
                    <>
                        <th >{props.english}</th>
                        <th >{props.transcription}</th>
                        <th >{props.russian}</th>
                    </>
                    :
                    <>
                        <th > <input type="text" value={english} name={"english"} onChange={handleEditEnglish} /> </th>
                        <th > <input type="text" value={transcription} name={"transcription"} onChange={handleEditTranscription} /> </th>
                        <th > <input type="text" value={russian} name={"russian"} onChange={handleEditRussian} /> </th>
                    </>
                }


                <th className="edit-buttons">
                    <div className="table-buttons">
                        {pressed && <img onClick={handleChange}
                            src={saveIcon}
                            alt="Кнопка сохранить"
                            title="Сохранить"
                        />}
                        {pressed && <img onClick={handleChange}
                            src={cancelIcon}
                            alt="Кнопка отменить"
                            title="Отменить"
                        />}

                        {!pressed &&
                            <img onClick={handleChange}
                                src={editIcon}
                                alt="Кнопка редактировать"
                                title="Редактировать"
                            />
                        }

                        <img onClick={() => deleteWord(props.id)}
                            src={deleteIcon}
                            alt="Кнопка удалить"
                            title="Удалить"
                        />
                    </div>
                </th>
            </tr>
        </>
    );
};

export default Word;