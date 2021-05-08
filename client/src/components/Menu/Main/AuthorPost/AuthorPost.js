import style from './AuthorPost.module.css';

const AuthorPost = () => {
    return (
        <div className={style.post}>
            <img src="/blue-origami-bird.png" alt="Blue origami bird" className={style.image} />
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos, dolorum nam odio magni reprehenderit repellat ad, nemo culpa sed vitae soluta recusandae saepe quidem. Perferendis vel tempore eveniet et!</p>
            <div className={style.authorWrapper}>
                <span className={style.author}>
                    <small>Author:</small>
                    Some anonymous
                </span>
            </div>
        </div>
    );
};

export default AuthorPost;