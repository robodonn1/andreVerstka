import styles from './Sizes.module.css';

function Sizes() {
    
    return (
        <>
            <div className={styles.sizes}>
                <h1>Размер, см</h1>
                <div>
                    <p>50*70</p>
                    <p>50*70</p>
                    <p>60*70</p>
                    <p>90*120</p>
                </div>
            </div>
        </>
    );
}

export default Sizes;