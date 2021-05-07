import style from './Menu.module.css';
import Aside from './Aside';

const Menu = () => {
    return (
        <div className={style.container}>
            <Aside />
        </div>
    );
}

export default Menu;
