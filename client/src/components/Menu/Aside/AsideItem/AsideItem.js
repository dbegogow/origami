import style from "./AsideItem.module.css";

const AsideItem = (props) => {
    return (
        <li className={style.listItem}>
            <a href="#" className={style.asideListItem}>{props.children}</a>
        </li>
    );
};

export default AsideItem;