import styles from './Colors.module.css';

function Colors() {
    const someColors = [{ color: 'black' }, { color: 'wheat' }, { color: 'blue' }, { color: 'red' }, { color: 'pink' }, { color: 'purple' }];

    return (
        <>
            <div className={styles.colors}>
                <h1>Цвета</h1>
                <div>
                    {someColors.map(color => (
                        <div className={styles.color1} style={{ backgroundColor: color.color }}>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Colors;