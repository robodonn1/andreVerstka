import styles from './Tovar.module.css';

function Tovar({ tovar, price }) {

    return (
        <>
            <div className={styles.tovar}>
                <img src={tovar.image} alt="" />
                <h1>{tovar.name}</h1>
                <h3>{
                    tovar.description && tovar.description.length > 150
                        ? tovar.description.substring(0, 100) + "..."
                        : tovar.description || "Описание отсутствует"
                }</h3>
                <h4>{(tovar.price) ? tovar.price : price}<span>руб</span></h4>
                <button>Купить</button>
            </div>
        </>
    );
}

export default Tovar;