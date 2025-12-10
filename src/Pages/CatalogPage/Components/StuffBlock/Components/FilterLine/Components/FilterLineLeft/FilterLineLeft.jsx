import styles from './FilterLineLeft.module.css';

function FilterLineLeft() {
    return (
        <>
            <div className={styles.filterLineLeft}>
                <div className={styles.filterElement}>
                    <p>По популярности</p>
                    <img src="/images/strelkaV.svg" alt="strelka" />
                </div>
                <div className={styles.filterElement}>
                    <p>По цене</p>
                    <img src="/images/strelkaV.svg" alt="strelka" />
                </div>
            </div>
        </>
    );
};

export default FilterLineLeft;