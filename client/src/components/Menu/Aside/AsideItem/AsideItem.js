import style from "./AsideItem.module.css";

const AsideItem = (props) => {
    return (
        <li className={style.asideItem}>
            <a href="#" className={style.linkAsideItem}>{props.children}</a>
        </li>
    );
};

export default AsideItem;