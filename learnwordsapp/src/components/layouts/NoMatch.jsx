import {
    Link,
} from "react-router-dom";

function NoMatch() {
    return (
        <>
            <h1>Ошибка 404 <br /> Поздравляем, <br />
                Вы нашли несуществующую страницу! <br />
                Вернуться <Link to="/">на главную?</Link> </h1 >
        </>
    );
};

export default NoMatch;