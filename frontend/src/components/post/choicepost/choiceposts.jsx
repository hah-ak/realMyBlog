import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './style.module.css';
const Choiceposts = (props) => {
    const {postIndex} = useParams()
    return (
            <Link className={styles.linktag}to={`/post/${postIndex}/${parseInt(props.postid)}`}>
            <p className={`${styles.choiceposts_wrapper} ${props.index%2 === 0 ? styles.j : styles.h}`}>
                <span className={styles.choiceposts_index}>{parseInt(props.index)+1}</span>
                <span className={styles.choiceposts_title}>{props.title}</span>
                <span className={styles.choiceposts_create}>{props.create.slice(0,10)}</span>   
            </p>
            </Link>
    )
};

export default Choiceposts;