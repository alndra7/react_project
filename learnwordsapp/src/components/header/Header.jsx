import HeaderBtn from '../buttons/HeaderBtn';

import './Header.scss';



function Header() {
    return (
        <header className='header'>
            <h1>Заголовок</h1>
            <nav className='header__nav'>
                <HeaderBtn text={'Режим тренировки'}></HeaderBtn>
                <HeaderBtn text={'Список слов'}></HeaderBtn>
            </nav>
        </header>
    );

}

export default Header;