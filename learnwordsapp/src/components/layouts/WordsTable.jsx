import DataTable from 'react-data-table-component';
import WordsData from '../../WordsData.json';

const data = JSON.parse(JSON.stringify(WordsData));

const columns = [
    {
        name: 'Слово',
        selector: row => row.english,
        sortable: true,
    },
    {
        name: 'Перевод',
        selector: row => row.russian,
        sortable: true,
    },
    {
        name: 'Транскрипция',
        selector: row => row.transcription,
        sortable: true,
    },
    {
        name: 'Уровень',
        selector: row => row.tags,
        sortable: true,
    },
];



function WordsTable() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

export default WordsTable;