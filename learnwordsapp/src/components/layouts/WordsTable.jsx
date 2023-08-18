import Word from './Word';
import WordsData from '../../wordsData.json';

import "./WordsTable.scss";

const data = JSON.parse(JSON.stringify(WordsData));



function WordsTable() {
    return (
        <div className='tableContainer'>
            <table className='table'>
                <thead >
                    <tr>
                        {/* <th className='table__number-column'>№</th>
                        <th className='table__word-column'>Слово</th>
                        <th className='table__word-column'>Транскрипция</th>
                        <th className='table__word-column'>Перевод</th>
                        <th className='table__edit-column'></th> */}

                        <th>№</th>
                        <th>Слово</th>
                        <th >Транскрипция</th>
                        <th>Перевод</th>
                        <th className='table__edit-column'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((word, i) => (
                        <Word
                            key={i}
                            count={i + 1}
                            {...word}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default WordsTable;