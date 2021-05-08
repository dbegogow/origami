import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className={style.navigationItem}>
            <a href="" className={style.linkNavigationItem}>{props.children}</a>
        </li>
    );
};

export default NavigationItem;