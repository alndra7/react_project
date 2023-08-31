import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SetOfCards from './components/cards/SetOfCards';
import WordsTable from './components/layouts/WordsTable';
import NoMatch from './components/layouts/NoMatch';
import WordsContext from './components/utility/WordsContext.jsx';
import Loader from './components/utility/Loader';

import './App.css';


function App() {

  const [loading, setLoading] = useState();
  let [words, setWords] = useState([]);
  const [error, setError] = useState(false);

  function getAPI() {
    fetch('https://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((response) => setWords(words = response))
            .then(() => setLoading(!loading))
            .catch(error => setError(error))
  }

useEffect(() => {
  getAPI()
}, []);


  return (
    <WordsContext.Provider value={{getAPI, words, loading, error}}>
    <div className='wrapper'>
    <Router>
      <Header className='header'></Header>

      <main className='content'>
      <Routes>
          <Route path="/training" element={<SetOfCards/>} />
          <Route path="/" element={<WordsTable />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </main>

      <Footer className="footer"></Footer>
      </Router>
    </div>
    </WordsContext.Provider>
  );
}

export default App;
