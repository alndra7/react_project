import { useState, useEffect } from 'react';

import { inject, observer } from 'mobx-react';


import LoadError from './LoadError';
import Loader from '../utility/Loader';
import Word from './Word';
import TrainingBtn from '../buttons/TrainingBtn';
import AddNewWordForm from '../utility/AddNewWordForm';

import "./WordsTable.scss";



function WordsTable({ test }) {

    const [pressed, setPressed] = useState();

    //old
    const [loading, setLoading] = useState();
    let [words, setWords] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((response) => setWords(words = response))
            .then(() => setLoading(!loading))
            .catch(error => setError(error))
    }, []);
    //

    useEffect(() => {
        console.log(test);
    }, []);

    const handleClick = () => {
        setPressed(!pressed);
    }

    const closeForm = () => {
        setPressed(!pressed);
    }


    return (
        <> {error && <LoadError></LoadError>}
            {!loading ? <Loader></Loader> :
                <div className='tableContainer'>
                    <table className='table'>
                        <thead >
                            <tr>
                                <th>№</th>
                                <th>Слово</th>
                                <th >Транскрипция</th>
                                <th>Перевод</th>
                                <th className='table__edit-column'><TrainingBtn className='trainingBtn__add-mode' text={'Новое слово'} clb={handleClick}></TrainingBtn></th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((word, i) => (
                                <Word
                                    key={i}
                                    count={i + 1}
                                    {...word}
                                />
                            ))}
                        </tbody>
                    </table>
                    {!pressed ? '' : <AddNewWordForm clb={closeForm}></AddNewWordForm>}
                </div>
            }
        </>
    );
};

// export default WordsTable;

export default inject(({ wordsStore }) => {
    const { test } = wordsStore;
    return (
        test
    );
})(observer(WordsTable));

