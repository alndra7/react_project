import './HeaderBtn.scss';

function HeaderBtn(props) {
    return (
        <button className='headerBtn'>{props.text}</button>
    );
}

export default HeaderBtn;