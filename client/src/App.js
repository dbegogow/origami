import { Route, Switch } from 'react-router-dom';

import style from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <div className={style.app}>
            <Header />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/">
                    <Menu />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;