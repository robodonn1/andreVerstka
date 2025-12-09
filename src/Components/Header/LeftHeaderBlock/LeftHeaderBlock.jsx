import styles from './LeftHeaderBlock.module.css';
import { Link } from 'react-router-dom';

function LeftHeaderBlock() {
    return (
        <>
            <nav className={styles.leftHeaderBlock}>
                <Link to='/'>
                    <img src="/images/Fill 3.svg" alt="" />
                </Link>
                <Link className={styles.textCatalog}>КАТАЛОГ</Link>
        </nav>
        </>
    );
}

export default LeftHeaderBlock;