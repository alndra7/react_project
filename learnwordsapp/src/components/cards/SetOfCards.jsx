import React, { useState } from 'react';

import WordCard from "./WordCard";
import TrainingBtn from "../buttons/TrainingBtn";

import WordsData from "./../../wordsData.json";

import "./SetOfCards.scss";


const data = JSON.parse(JSON.stringify(WordsData));


function SetOfCards() {

    const [pressed, setPressed] = useState(0);
    const [translated, setTranslated] = useState(1);

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

    return (
        <>
            <TrainingBtn clb={handleClickPrev} text={'← вернуться'}></TrainingBtn>

            <WordCard
                key={word.id}
                rus={word.russian}
                eng={word.english}
                transc={word.transcription}
                clb={handleClickTranslate}
            ></WordCard>

            <TrainingBtn clb={handleClickNext} text={'далее →'}></TrainingBtn>
        </>
    );
};

export default SetOfCards;

