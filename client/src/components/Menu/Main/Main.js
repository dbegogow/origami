import { useState, useEffect } from 'react';
import style from './Main.module.css';
import AuthorPost from './AuthorPost';

const Main = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(res => setState(res));
    }, []);

    return (
        <main className={style.main}>
            <h1 className={style.heading}>Sooooooooome Heading</h1>
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