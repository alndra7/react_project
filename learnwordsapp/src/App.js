import React from 'react';
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

import './App.css';

function App() {


  return (
    <Router>
    <div className='wrapper'>
      <Header className='header'></Header>

      <main className='content'>
      <Routes>
          <Route path="/training" element={<SetOfCards/>} />
          <Route path="/" element={<WordsTable />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </main>

      <Footer className="footer"></Footer>
    </div>
    </Router>
  );
}

export default App;
