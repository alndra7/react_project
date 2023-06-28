//import React, { useState } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WordCard from './components/cards/WordCard';
import WordsTable from './components/layouts/WordsTable';

import WordsData from './wordsData.json';

import './App.css';

const data = JSON.parse(JSON.stringify(WordsData));

function App() {
  
  return (
    <>
      <Header></Header>
      <main className='content'>
      
        {/* {
          data.map((word) =>
              <WordCard text={word.text}
                  key={word.id}
              ></WordCard>

          )
        } */}
        <WordCard rus={'rus'} eng={'eng'} transc={'transcription'}></WordCard>

        
        {/* <WordsTable></WordsTable> */}
        </main>
      <Footer></Footer>
    </>
  );
}

export default App;
