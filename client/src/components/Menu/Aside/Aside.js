import style from './Aside.module.css'
import AsideItem from './AsideItem/AsideItem';

const Aside = () => {
    return (
        <aside className={style.aside}>
            <ul>
                <AsideItem>Going to 1</AsideItem>
                <AsideItem>Going to 2</AsideItem>
                <AsideItem>Going to 3</AsideItem>
                <AsideItem>Going to 4</AsideItem>
                <AsideItem>Going to 5</AsideItem>
                <AsideItem>Going to 6</AsideItem>
                <AsideItem>Going to 7</AsideItem>
                <AsideItem>Going to 8</AsideItem>
                <AsideItem>Going to 9</AsideItem>
                <AsideItem>Going to 10</AsideItem>
                <AsideItem>Going to 11</AsideItem>
            </ul>
        </aside>
    );
}

export default Aside;
