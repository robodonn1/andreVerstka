import styles from './HeaderBlock.module.css'
import LeftHeaderBlock from './LeftHeaderBlock/LeftHeaderBlock';
import MidHeaderBlock from './MidHeaderBlock/MidHeaderBlock';

function HeaderBlock() {

    return (
        <>
            <div className={styles.headerBlockBg}>
                <div className={styles.headerBlock}>
                    <LeftHeaderBlock />
                    <MidHeaderBlock />
                    <div className={styles.pravCont}>
                        <img src="/images/korzina.svg" alt="sos" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderBlock;