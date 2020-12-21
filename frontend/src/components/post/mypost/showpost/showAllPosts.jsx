import React from 'react';
import { useHistory } from 'react-router-dom';
import ShowPosts from './showPosts';
import styles from './style.module.css';

const ShowAllPosts = (props) => {
    // 동기적으로 일어나면 되기에 훅쓰지 않고 그냥 바로 값을 전달해준다.
    const history = useHistory()
    const get_choice_posts = (postindex) => {
        // Axios.get(`http://localhost:8000/post/${postindex}`)
        // .then(result => {
        //         history.push({
        //             pathname:`/post/${postindex}`,
        //             state:{  뒤로가기 앞으로가기 할시 읽어오질 못함
        //                 choice_posts:result.data.posts
        //             }
        //         })
        //     })
        history.push({
            pathname:`/post/${postindex}`
        })
    }
    return (
        <>
        {
        props.posts.map(postidx => {
            const post_index = Object.keys(postidx) //key 값을 불러올때 Object 객체를 불러서 메소드에 원하는 객체를 넣어줘야한다.
            return (
                <div key={post_index} className={styles.showpost_div}>
                        <p onClick={()=>get_choice_posts(post_index)}>{post_index}</p>
                    <ShowPosts 
                        postindex={post_index}
                        postContents={postidx[post_index]}
                    />
                </div>
            )
        })}
        </>
    )
};

export default ShowAllPosts;