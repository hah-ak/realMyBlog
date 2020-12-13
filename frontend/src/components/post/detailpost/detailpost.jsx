import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';

const Detailpost = (props) => {
    const { postIndex, postid } = useParams() // id값이 스트링으로 넘어감.
    const [post, setPost] = useState()
    useEffect(()=> {
        const fetchdata = async () => {
            try {
                const getdata = await Axios.get(`http://localhost:8000/post/${postIndex}/${parseInt(postid)}`)
                const reuslt =  await getdata.data
                setPost(reuslt.detailpost)
            } catch (error) {
                alert(error)
            }
        }
        fetchdata();
    },[postIndex,postid])
    console.log(post)
    return (
        <div className={styles.detailpost}>
            <p className={styles.title}>
                {post.title}
                <span className={styles.create}>{post.create}</span>
            </p>
            <div className={styles.content}>
                {post.content}
            </div>
        </div>
        )       
    };

export default Detailpost;