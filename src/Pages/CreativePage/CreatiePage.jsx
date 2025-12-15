import HeaderBlock from '../../Components/Header/HeaderBlock';
import PostForm from './Components/PostFrom/PostForm';
import styles from './CreativePage.module.css';
import { motion, AnimatePresence, hover } from 'framer-motion';


const customTransition = {
    duration: 1,
    ease: [0.000, 0.50, 1, 3.5],
};

const fadeIn = {
    hidden: { scale: 0, y: -120 },
    visible: { scale: 1, y: 0, transition: customTransition, type: "spring", stiffness: -1000 },
    hover: {
        scale: 1.1,
        rotate: 10,
        x: 500,
        textShadow: "0px 20px 30px rgba(201, 201, 201, 1)",
        transition: { ease: [0, 0.5, 0.2, 2] },
    },
};

function CreativePage() {

    return (
        <>
            <div className={styles.creativePageBg}>
                <HeaderBlock />
                <div className={styles.creativePage}>
                    <motion.h1 variants={fadeIn} initial="hidden" animate="visible" whileHover="hover" >Страница для создания карточек товара</motion.h1>
                    <PostForm />
                </div>
            </div>
        </>
    );
}

export default CreativePage;