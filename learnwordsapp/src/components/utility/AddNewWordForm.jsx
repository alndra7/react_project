import { useState } from 'react';

import './AddNewWordForm.scss';

function AddNewWordForm(props) {

    let [english, setEnglish] = useState("");
    let [transcription, setTranscription] = useState("");
    let [russian, setRussian] = useState("");

    const post = {
        "english": `${english}`,
        "transcription": `${transcription}`,
        "russian": `${russian}`,
        "tags": '',
        "tags_json": "[]"
    }

    const addNewWord = () => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(post => console.log(post))
            .catch(error => console.log(`Ошибка отправки слова на сервер: ${error}`))
    }


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
        <div className='form' >
            <input name={"russian"} type="text" placeholder={'Русский'} onChange={handleEditRussian} />
            <input name={"english"} type="text" placeholder={'Английский'} onChange={handleEditEnglish} />
            <input name={"transcription"} type="text" placeholder={'Транскрипция'} onChange={handleEditTranscription} />
            <button className='form__button' onClick={addNewWord}>Сохранить</button>
            <button onClick={() => props.clb()} className='form__button'>Закрыть</button>
        </div >
    )
}

export default AddNewWordForm;