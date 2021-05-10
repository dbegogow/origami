import { Link } from 'react-router-dom';
import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    console.log(props);
    return (
        <li className={style.navigationItem}>
            <Link to={props.route} className={style.linkNavigationItem}>{props.title}</Link>
        </li>
    );
};

export default NavigationItem;