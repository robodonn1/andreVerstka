import styles from './HeaderBlock.module.css'
import LeftHeaderBlock from './LeftHeaderBlock/LeftHeaderBlock';

function HeaderBlock() {
    
    return (
        <>
            <div className={ styles.headerBlock }>
                <LeftHeaderBlock />
                <div className={ styles.pravCont }>
                    <img src="/images/korzina.svg" alt="sos" />
                </div>
            </div>
        </>
    );
}

export default HeaderBlock;