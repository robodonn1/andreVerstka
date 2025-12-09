import styles from './Banner.module.css';

function Banner({ text, imageUrl, buttonText }) {
    
    return (
        <>
            <div>
                <h1>{text}</h1>
                <img src={imageUrl} alt="" />
                <button>{ buttonText }</button>
            </div>
        </>
    );
};

export default Banner