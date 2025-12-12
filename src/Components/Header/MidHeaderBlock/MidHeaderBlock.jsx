import { Link } from 'react-router-dom';
import styles from './MidHeaderBlock.module.css';
import SearchComponent from './Search/SearchComponent';

function MidHeaderBlock() {
    
    return (
        <>
            <div className={ styles.midHeaderBlock }>
                <SearchComponent/>
                <Link to='/creative' className={styles.link}>
                    <img src="/images/divan.svg" alt="constructor" />
                    <p>КОНСТРУКТОР</p>
                </Link>
            </div>
        </>
    );
}

export default MidHeaderBlock;