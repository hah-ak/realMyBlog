import React from 'react';
import styles from './style.module.css';

const ShowPost = (props) => {
    
    return (
            <ul onClick={props.getpost}>
                <li className={styles.content_title}>{props.posttitle}</li>
                <li className={styles.content_content}>{props.postcontent}</li>
            </ul>
    )
};

export default ShowPost;