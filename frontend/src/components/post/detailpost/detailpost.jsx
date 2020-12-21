import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';

// function getdata(postIndex, postid) {
//     const fetchdata = async (postIndex, postid) => {
//         try {
//             const getdata = await Axios.get(`http://localhost:8000/post/${postIndex}/${parseInt(postid)}`)
//             const result =  await getdata.data
//             return result.detailpost
//         } catch (error) {
//             alert(error)
//             return null
//         }
//     }
//     return fetchdata(postIndex,postid);
// }
// async function getdata(postIndex,postid) {
//     //항상 promise를 리턴한다. 이걸 어떡한담
//     let senddata = {}
//     const fetchdata = await Axios.get(`http://localhost:8000/post/${postIndex}/${parseInt(postid)}`)
//     const getdata = await fetchdata.data
//     senddata = getdata.detailpost
//     return senddata
// }

const Detailpost = (props) => {
    const { postIndex, postid } = useParams() // id값이 스트링으로 넘어감.
    // const location = useLocation()
    // const post = location.state.post
    // async를 밖으로로 빼서 해볼경우 dependency로 fetchdata를 넣으라함
    // 랜더링 이후에 발생하는 것임에도 불구하고
    // This is why async-await can only be used on functions and thus isn't applicable on the top level.
    // const [post, setPost] = useState({},()=>{
    //     Axios.get(`http://localhost:8000/post/${postIndex}/${parseInt(postid)}`)
    //     .then(result => setPost(result.data.detailpost))
    //     .catch(error => alert(error))
    // })
    const [post, setPost] = useState({})
    useEffect(()=>{
        const fetchdata = async () => {
            try {
                const getdata = await Axios.get(`http://localhost:8000/post/${postIndex}/${parseInt(postid)}`)
                const result = await getdata.data
                setPost(result.detailpost)
            } catch (error){
                alert(error)
            }
        }
        fetchdata();
    },[postIndex,postid])
    console.log(post)
    return (
        <div className={styles.detailpost}>
            <p className={styles.post_title}>
                {post.title}
            </p>
            <span className={styles.post_create}>{post.create !== undefined ? post.create.slice(0,10) : null}</span>
            {/* <span className={styles.post_create}>{post.create.slice(0,10)}</span> */}
            <div className={styles.post_content}>
                {post.content}
            </div>
        </div>
        )       
    };

export default Detailpost;