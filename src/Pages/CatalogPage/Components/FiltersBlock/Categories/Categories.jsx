import styles from './Categories.module.css';

function Categories() {
    return (
        <>
            <div className={styles.catogories}>
                <h1>Категории</h1>
                <form>
                    <div>
                        <input type="radio" name="category" id="" placeholder='Постельное билье'/>
                        <p>Постельное билье</p>
                    </div>
                    <div>
                        <input type="radio" name="category" id="" placeholder='Одежда' />
                        <p>Одежда</p>
                    </div>
                    <div>
                        <input type="radio" name="category" id="" placeholder='Ароматы' />
                        <p>Ароматы</p>
                    </div>
                    <div>
                        <input type="radio" name="category" id="" placeholder='Аксессуары' />
                        <p>Аксессуары</p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Categories;