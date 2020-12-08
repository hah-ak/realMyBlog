import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Showlist = (props) => (
        <>
           {props.posts.map(post => {
               return (
                <div className={styles.showpost} key={post.id}>
                   <Link className={styles.linktag} to='/post'>
                    <p className={styles.posttitle} >
                        {post.title}
                    </p>
                    <p className={styles.postcontent}>
                        {post.content}
                    </p>
                    </Link>
                </div>
               )
           })}
        </>
    );

export default Showlist;