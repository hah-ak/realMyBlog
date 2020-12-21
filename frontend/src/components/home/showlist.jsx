import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Showlist = (props) => {
    
    
    return(
        <>
           {props.posts.map(post => {
               return (
                <div className={styles.showpost} key={post.id}>
                   <Link className={styles.linktag} to='/post'>
                    <p
                        className={styles.posttitle}
                        onMouseOver={props.Handdlemouseover}
                        onMouseOut={props.Handdlemouseout}
                    >
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
        )
    };

export default Showlist;