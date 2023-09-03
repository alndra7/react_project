import {makeAutoObservable, runInAction} from 'mobx';

class WordsStore {

    test = [];
    loading = true;
    error = false;

    constructor() {
        makeAutoObservable(this)
    }

    add = (word) => {
        this.test.push(word)
    }
    
    getAPI = () => {
        const data = fetch('https://itgirlschool.justmakeit.ru/api/words');
        this.test = data;
    }
}

export default WordsStore;