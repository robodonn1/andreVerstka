import Categories from './Categories/Categories';
import Colors from './Colors/Colors';
import styles from './FiltersBlock.module.css';
import Prints from './Prints/Prints';
import Sizes from './Sizes/Sizes';

function FiltersBlock() {

    return (
        <>
            <div className={styles.filters}>
                <Categories />
                <Sizes />
                <Prints />
                <Colors />
            </div>
        </>
    );
}

export default FiltersBlock;