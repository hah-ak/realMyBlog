import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const ShowPosts = (props) => {
    return (
        <>
        {
        props.posts.map(postidx => {
            const post_index = Object.keys(postidx) //key 값을 불러올때 Object 객체를 불러서 메소드에 원하는 객체를 넣어줘야한다.
            return (
                <div key={post_index} className={styles.showpost_div}>
                    <Link to={`/post/${post_index}`}>
                        <p>{post_index}</p>
                    </Link>
                    {postidx[post_index].map(contents => {
                        return(
                                <ul key={contents.id}>
                                    <li className={styles.content_title}>{contents.title}</li>
                                    <li className={styles.content_content}>{contents.content}</li>
                                </ul>
                        )
                    })}
                </div>
            )
        })}
        </>
    )
};

export default ShowPosts;