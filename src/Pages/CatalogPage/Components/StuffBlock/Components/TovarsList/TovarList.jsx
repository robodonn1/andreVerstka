import { useEffect, useState } from 'react';
import styles from './TovarList.module.css';
import axios from 'axios';
import Tovar from './Tovar/Tovar';

function TovarList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [curPage, setCurPage] = useState(0);

    useEffect(() => {
        const getTovars = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://torguisam.ru/api/product/oksei-all-products');

                let datam = [];
                if (res.data.length > 12) {
                    for (let i = 0; i < res.data.length; i += 12) {
                        datam.push(res.data.slice(i, i + 12));
                    }
                }

                setData(datam);
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
                {data[curPage].map(tovar => (
                    <Tovar tovar={tovar} price={Math.round(Math.random() * 100000)} />
                ))}
            </div>
            <div className={styles.pageButtons}>
                {data.map((tovar, index) => (
                    <div onClick={() => setCurPage(index)}>
                        <h1>{index}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TovarList;