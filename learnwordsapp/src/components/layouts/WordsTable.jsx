import { useState, useEffect, useContext } from 'react';


import LoadError from './LoadError';
import Loader from '../utility/Loader';
import Word from './Word';
import TrainingBtn from '../buttons/TrainingBtn';
import AddNewWordForm from '../utility/AddNewWordForm';
import WordsContext from '../utility/WordsContext';

import "./WordsTable.scss";




function WordsTable() {

    const { words, loading, error } = useContext(WordsContext);
    const [pressed, setPressed] = useState();


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

export default WordsTable;

