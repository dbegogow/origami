import menuStyle from '../Menu.module.css';

const NumPage = ({ match }) => {
    const pageNum = match.url.substring(7);

    return (
        <main className={menuStyle.main}>
            <h1 className={menuStyle.heading}>You are at page numbeerrrr {pageNum}</h1>
        </main>
    );
};

export default NumPage;