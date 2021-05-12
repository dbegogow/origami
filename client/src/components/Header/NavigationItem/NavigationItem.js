import { Link } from 'react-router-dom';
import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <Link to={props.route} className={style.navigationItem}>
            <span>{props.title}</span>
        </Link>
    );
};

export default NavigationItem;