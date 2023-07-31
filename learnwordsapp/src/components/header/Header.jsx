import React from 'react';

import {
    Link,
} from "react-router-dom";

import HeaderBtn from '../buttons/HeaderBtn';

import './Header.scss';



function Header() {


    return (
        <header className='header'>
            <Link to="/" className='header__logo'>
                <h1>LearnWords</h1>
            </Link>
            <nav className='header__nav'>

                <Link to="/training">
                    <HeaderBtn text={'Режим тренировки'}></HeaderBtn>
                </Link>

                <Link to="/">
                    <HeaderBtn text={'Список слов'}></HeaderBtn>
                </Link>
            </nav>
        </header>
    );

}

export default Header;