import HeaderBlock from '../../Components/Header/HeaderBlock';
import PostForm from './Components/PostFrom/PostForm';
import styles from './CreativePage.module.css';

function CreativePage() {
    return (
        <>
            <div className={styles.creativePageBg}>
                <HeaderBlock />
                <div className={styles.creativePage}>
                    <h1>Страница для создания карточек товара</h1>
                    <PostForm/>
                </div>
            </div>
        </>
    );
}

export default CreativePage;