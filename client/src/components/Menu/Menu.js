import style from './Menu.module.css';
import Aside from './Aside';
import Main from './Main';

const Menu = () => {
    return (
        <div className={style.container}>
            <Aside />
            <Main />
        </div>
    );
}

export default Menu;
