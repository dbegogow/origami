import { Route, Switch } from 'react-router-dom';
import style from './Menu.module.css';
import Aside from './Aside';
import Main from './Main';
import About from './About';
import ContactUs from './ContactUs';
import NumPage from './NumPage';

const Menu = () => {
    return (
        <div className={style.container}>
            <Aside />
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/about/:pageNum" component={NumPage} />
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route>
                    <h1>Error</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Menu;
