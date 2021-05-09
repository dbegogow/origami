import { useState, useEffect } from 'react';
import style from './Main.module.css';
import menuStyle from '../Menu.module.css';
import AuthorPost from './AuthorPost';

const Main = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(res => setState(res));
    }, []);

    return (
        <main className={menuStyle.main}>
            <h1 className={menuStyle.heading}>Sooooooooome Heading</h1>
            <div className={style.posts}>
                {state.map(x => (
                    <AuthorPost
                        key={x.id}
                        content={x.content}
                        author={x.author}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;