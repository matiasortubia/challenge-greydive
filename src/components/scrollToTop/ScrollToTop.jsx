import { useEffect, useState } from 'react';
import styles from './scrollToTop.module.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={ styles.scrollToTop }>
            <button type="button" 
                    onClick={ scrollToTop } 
                    className={ `${styles.scrollToTopButton} ${isVisible ? styles.show : styles.notShow}` } >
                Top
            </button>
        </div>
    );
};

export { ScrollToTop };