import { useEffect, useState } from 'react';
import styles from './TovarList.module.css';
import axios from 'axios';
import Tovar from './Tovar/Tovar';

function TovarList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getTovars = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://torguisam.ru/api/product/oksei-all-products');
                setData(res.data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        getTovars();
    }, []);

    if (loading) return (<><h1>Загрузку...</h1></>);   

    if (error) return (<><h1>{error}</h1></>);

    return (
        <>
            <div className={styles.tovarList}>
                {data.map(tovar => (
                    <Tovar tovar={tovar} price={ Math.floor(Math.random() * 1000) } />
                ))}
            </div>
        </>
    );
}

export default TovarList;