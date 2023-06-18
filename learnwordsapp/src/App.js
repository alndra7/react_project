import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WordCard from './components/cards/WordCard';

import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main className='content'>
        <WordCard text={'the word'}></WordCard>
        </main>
      <Footer></Footer>
    </>
  );
}

export default App;
