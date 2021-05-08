import style from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
    return (
        <div className={style.app}>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;