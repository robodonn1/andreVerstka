
import Category from './Components/Category/Category';
import FilterLine from './Components/FilterLine/FilterLine';
import styles from './StuffBlock.module.css';

function StuffBlock() {
    return (
        <>
            <div className={styles.stuffBlock}>
                <h1>ПОСТЕЛЬНОЕ БЕЛЬЕ</h1>
                <Category/>
                <FilterLine />
                <div className={styles.tovarList}>
                    

                </div>
            </div>
        </>
    );
};

export default StuffBlock;