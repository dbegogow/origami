import { Route, Switch } from 'react-router-dom';
import style from './Menu.module.css';
import Aside from './Aside';
import Main from './Main';
import About from './About';
import ContactUs from './ContactUs';

const Menu = () => {
    return (
        <div className={style.container}>
            <Aside />
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route render={() => <h1>Error Page</h1>} />
            </Switch>
        </div>
    );
}

export default Menu;
