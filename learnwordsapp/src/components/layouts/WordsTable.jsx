import Word from './Word';
import WordsData from '../../wordsData.json';

import "./WordsTable.scss";

const data = JSON.parse(JSON.stringify(WordsData));



function WordsTable() {
    return (
        <div className='tableContainer'>
            <table>
                <thead >
                    <tr>
                        <th>№</th>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        {/* <th>Topic</th> */}
                        <th>Перевод</th>
                        <th>Редактировать</th>
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