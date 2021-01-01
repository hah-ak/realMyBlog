import React from 'react';
import styles from './style.module.css';
const Footer = (props) => {
    return (
        <footer>
            <p>
                <span className={styles.title}>만든이 : </span>
                흐아악
            </p>
            <p>
                <span className={styles.title}>이메일 : </span>
                skekdnl12@gmail.com
            </p>
            <p>
                <span className={styles.title}>작업환경 : </span>
                Python 3.8.5, javascript, css, html
            </p>
            <p>
                <span className={styles.title}>라이브러리/프레임워크 : </span>
                react 17.0.1, django 3.1.1, djangorestframwork 3.12.1
            </p>
            <div className={styles.icons}>
                <a href="https://github.com/hah-ak/" target='_blank' rel='noreferrer'><img src={'/img/github.ico'} alt=""/></a>
            </div>
        </footer>
    );

};

export default Footer;