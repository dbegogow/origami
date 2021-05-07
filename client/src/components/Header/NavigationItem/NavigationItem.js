import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li class={style.listItem}>
            <a href="#" className={style.navListItem}>{props.children}</a>
        </li>
    );
};

export default NavigationItem;