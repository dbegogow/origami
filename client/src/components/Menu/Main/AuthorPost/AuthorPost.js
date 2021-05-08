import style from './AuthorPost.module.css';

const AuthorPost = (props) => {
    return (
        <div className={style.post}>
            <img src="/blue-origami-bird.png" alt="Blue origami bird" className={style.image} />
            <p className={style.description}>{props.content}</p>
            <div className={style.authorWrapper}>
                <span className={style.author}>
                    <small>Author: </small>
                    {props.author}
                </span>
            </div>
        </div>
    );
};

export default AuthorPost;