import React, { useState, useEffect } from 'react';

import WordCard from "./WordCard";
import TrainingBtn from "../buttons/TrainingBtn";
import Loader from '../utility/Loader';
import LoadError from '../layouts/LoadError';

import "./SetOfCards.scss";



function SetOfCards() {

    const [pressed, setPressed] = useState(0);
    const [translated, setTranslated] = useState(1);
    let [className, setClassName] = useState('wordCard__btn');

    //old
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


    const word = words[pressed];

    useEffect(() => {
        const timer = setTimeout(() => setFocusOnBtn(), 500);
        return () => clearTimeout(timer);
    }, [pressed,]);

    const handleClickNext = () => {
        setPressed(pressed === words.length - 1 ? 0 : pressed + 1);
    };

    const handleClickPrev = () => {
        setPressed(pressed < 1 ? words.length - 1 : pressed - 1);
    };

    const handleClickTranslate = () => {
        setTranslated(translated + 1);
        console.log(translated);
    };


    const setFocusOnBtn = () => {
        setClassName(className = 'wordCard__btn-on-load');
        const timer = setTimeout(() => setClassName(className = 'wordCard__btn'), 1000);
        return () => clearTimeout(timer);
    }

    return (
        <>  {error && <LoadError></LoadError>}
            {!loading ? <Loader></Loader> :

                <>
                    <TrainingBtn clb={handleClickPrev} className={'trainingBtn'} text={'← вернуться'}></TrainingBtn>

                    < WordCard
                        key={word.id}
                        rus={word.russian}
                        eng={word.english}
                        transc={word.transcription}
                        clb={handleClickTranslate}
                        className={className}
                    ></WordCard >

                    <TrainingBtn className={'trainingBtn'} clb={handleClickNext} text={'далее →'}></TrainingBtn>
                </>
            }
        </>
    );
};

export default SetOfCards;

