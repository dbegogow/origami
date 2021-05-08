import style from './Main.module.css';
import AuthorPost from './AuthorPost';

const Main = () => {
    return (
        <main className={style.main}>
            <h1 className={style.heading}>Sooooooooome Heading</h1>
            <div className={style.posts}>
                <AuthorPost />
            </div>
        </main>
    );
};

export default Main;