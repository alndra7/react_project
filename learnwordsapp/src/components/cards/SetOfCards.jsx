import React, { useState, useEffect } from 'react';

import WordCard from "./WordCard";
import TrainingBtn from "../buttons/TrainingBtn";

import WordsData from "./../../wordsData.json";

import "./SetOfCards.scss";


const data = JSON.parse(JSON.stringify(WordsData));


function SetOfCards() {

    const [pressed, setPressed] = useState(0);
    const [translated, setTranslated] = useState(1);
    let [className, setClassName] = useState('wordCard__btn');

    useEffect(() => {
        const timer = setTimeout(() => setFocusOnBtn(), 500);
        return () => clearTimeout(timer);
    }, [pressed,]);

    const handleClickNext = () => {
        setPressed(pressed === data.length - 1 ? 0 : pressed + 1);
    };

    const handleClickPrev = () => {
        setPressed(pressed < 1 ? data.length - 1 : pressed - 1);
    };

    const handleClickTranslate = () => {
        setTranslated(translated + 1);
        console.log(translated);
    };

    const word = data[pressed];

    const setFocusOnBtn = () => {
        setClassName(className = 'wordCard__btn-on-load');
        const timer = setTimeout(() => setClassName(className = 'wordCard__btn'), 1000);
        return () => clearTimeout(timer);
    }

    return (
        <>
            <TrainingBtn clb={handleClickPrev} text={'← вернуться'}></TrainingBtn>

            <WordCard

                key={word.id}
                rus={word.russian}
                eng={word.english}
                transc={word.transcription}
                clb={handleClickTranslate}
                className={className}
            ></WordCard>

            <TrainingBtn clb={handleClickNext} text={'далее →'}></TrainingBtn>
        </>
    );
};

export default SetOfCards;

