import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'mobx-react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SetOfCards from './components/cards/SetOfCards';
import WordsTable from './components/layouts/WordsTable';
import NoMatch from './components/layouts/NoMatch';
import WordsStore from './components/stores/WordsStore';

import './App.css';

const wordsStore = new WordsStore();


function App() {

  return (
  
     <Provider {... wordsStore}>
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
     </Provider> 
  );
}

export default App;
