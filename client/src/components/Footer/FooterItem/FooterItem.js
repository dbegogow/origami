import style from './FooterItem.module.css'

const FooterItem = (props) => {
    return (
        <li className={style.footerItem}>
            <a href="#" className={style.linkFooterItem}>{props.children}</a>
        </li>
    );
};

export default FooterItem;