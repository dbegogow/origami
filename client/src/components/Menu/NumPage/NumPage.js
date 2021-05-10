import menuStyle from '../Menu.module.css';

const NumPage = ({ match }) => {
    return (
        <main className={menuStyle.main}>
            <h1 className={menuStyle.heading}>You are at page numbeerrrr {match.params.pageNum}</h1>
        </main>
    );
};

export default NumPage;