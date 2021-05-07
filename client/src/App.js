import style from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
