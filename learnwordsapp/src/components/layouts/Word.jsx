import React, { useState } from 'react';

import editIcon from './../../assets/icons/pen-solid.svg'
import deleteIcon from './../../assets/icons/trash-solid.svg'
import saveIcon from './../../assets/icons/check-solid.svg'
import cancelIcon from './../../assets/icons/xmark-solid.svg'

function Word(props) {

    const [pressed, setPressed] = useState();
    let [warning, setWarning] = useState("");
    let [warning2, setWarning2] = useState("");
    let [warning3, setWarning3] = useState("");
    let [english, setEnglish] = useState(props.english);
    let [transcription, setTranscription] = useState(props.transcription);
    let [russian, setRussian] = useState(props.russian);

    const editedWord = {
        "english": `${english}`,
        "transcription": `${transcription}`,
        "russian": `${russian}`,
        "tags": '',
        "tags_json": "[]"
    }

    const handleChange = () => {
        setPressed(!pressed);
    };

    const handleSavedWord = () => {

        const checkEmptyInput = () => {
            if (english === "") {
                setPressed(pressed);
                setWarning(warning = "warning-input");
            }
        }

        const checkEmptyInput2 = () => {
            if (transcription === "") {
                setPressed(pressed);
                setWarning2(warning2 = "warning-input");
            }
        }

        const checkEmptyInput3 = () => {
            if (russian === "") {
                setPressed(pressed);
                setWarning3(warning3 = "warning-input");
            }
        }

        if (english && transcription && russian !== "") {
            updateWord();
        }
        else {
            checkEmptyInput();
            checkEmptyInput2();
            checkEmptyInput3();

        }

    }


    const handleEditEnglish = (e) => {
        setEnglish(english = e.target.value);
        setWarning(warning = "");
    };

    const handleEditTranscription = (e) => {
        setTranscription(transcription = e.target.value);
        setWarning2(warning2 = "");
    };

    const handleEditRussian = (e) => {
        setRussian(russian = e.target.value);
        setWarning3(warning3 = "");
    };


    const updateWord = () => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${props.id}/update`, {
            method: 'POST',
            body: JSON.stringify(editedWord),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(editedWord => {
                console.log('Updated', editedWord);
            })
            .catch(error => console.log(`Ошибка отправки слова на сервер: ${error}`));
    }

    const deleteWord = () => {
        fetch(` http://itgirlschool.justmakeit.ru/api/words/${props.id}/delete`, {
            method: 'POST',
        })
            .catch(error => console.log(`Ошибка удаления слова на сервере: ${error}`))
    };

    return (
        <>
            <tr id={props.id}>
                <th >{props.count}</th>
                {!pressed ?
                    <>
                        <th >{english}</th>
                        <th >{transcription}</th>
                        <th >{russian}</th>
                    </>
                    :
                    <>
                        <th > <input className={warning} type="text" value={english} name={"english"} onChange={handleEditEnglish} /> </th>
                        <th > <input className={warning2} type="text" value={transcription} name={"transcription"} onChange={handleEditTranscription} /> </th>
                        <th > <input className={warning3} type="text" value={russian} name={"russian"} onChange={handleEditRussian} /> </th>
                    </>
                }

                <th className="edit-buttons">
                    <div className="table-buttons">
                        {pressed && <img onClick={() => { handleChange(); handleSavedWord() }}
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