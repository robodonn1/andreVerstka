import styles from './Tovar.module.css';

function Tovar({ imgUrl, name, description, price }) {

    return (
        <>
            <div className={styles.tovar}>
                <img src={imgUrl[0]} alt="" />
                <h1>{name}</h1>
                <h3>{
                    description && description.length > 150
                        ? description.substring(0, 100) + "..."
                        : description || "Описание отсутствует"
                }</h3>
                <h4>{price}<span>руб</span></h4>
                <button>Купить</button>
            </div>
        </>
    );
}

export default Tovar;