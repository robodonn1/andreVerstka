import styles from "./Category.module.css";

function Category() {

    return (
        <>
            <div className={styles.categorys}>
                <div className={styles.category}>
                    <h2>Наволочки</h2>
                </div>
                <div className={styles.category}>
                    <h2>Простыни</h2>
                </div>
                <div className={styles.category}>
                    <h2>Пододеяльники</h2>
                </div>
            </div>
        </>
    )
}

export default Category;