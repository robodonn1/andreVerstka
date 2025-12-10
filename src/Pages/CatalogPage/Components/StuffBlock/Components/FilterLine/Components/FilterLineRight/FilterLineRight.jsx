import styles from './FilterLineRight.module.css';

function FilterLineRight() {
    return (
        <>
            <div className={styles.filterLineRight}>
                <div className={styles.filterElement}>
                    <input type="radio" name="filterVibor" id="" placeholder='В наличии' />
                    <p>В наличии</p>
                </div>
                <div className={styles.filterElement}>
                    <input type="radio" name="filterVibor" id="" placeholder='Спецпредложения' />
                    <p>Спецпредложения</p>
                </div>
            </div>
        </>
    );
};

export default FilterLineRight;