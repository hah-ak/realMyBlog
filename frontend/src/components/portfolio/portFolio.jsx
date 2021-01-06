import React from 'react';
import styles from './style.module.css';
import javascript from '../img/javascript.ico';
import django from '../img/django.ico';
import git from '../img/git.ico';
import python from '../img/python.ico';
import react from '../img/react.ico';

const portFolio = (props) => {

    return (
        <>
            <div className={styles.items-wrapper}>
            나날이 만들어가는것에 성취감을 느끼는 개발자가 되고싶은 김용철입니다.
            </div>
            <div className={styles.items-wrapper}>
                <p className={styles.title}>학력사항</p>
                <ul className={styles.list-box}>
                    <li><span>대학교 : </span>전남대학교</li>
                    <li><span>전공 : </span>응용화학공학부</li>
                    <li><span>교육이력 : </span>2019.08 ~ 2019.12 스마트미디어인재개발원
                    2020.07 ~ 2020.11 광주AI사관학교
                    </li>
                </ul>
            </div>
            <div className={styles.items-wrapper}>
                <p className={styles.title}>Skill</p>
                <ul className={styles.image-box}>
                    <li><img src={python} alt="python"/> <img src={javascript} alt="javascript"/></li>
                    <li><img src={git} alt="git"/> <img src={react} alt="react"/></li>
                    <li><img src={django} alt="django"/> </li>
                </ul>
            </div>
        </>
        
    )
};

export default portFolio;