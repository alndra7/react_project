import './LoadError.scss';

import Xmark from './../../assets/icons/xmark-red.svg';

function LoadError(props) {
    return (
        <div className='error__wrapper'>
            <img className='error__img' src={Xmark} alt="изображение крестика" />
            <div className='error__text'>Ошибка загрузки</div>
        </div>
    )
}

export default LoadError;