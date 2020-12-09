import React, { useEffect, useState } from 'react';
import ShowPosts from './showpost/showPosts';
// arrow function 사용시 함수가 문구 혹은 덩어리로 하나라면 소괄호가능 그렇지 않으면 중괄호 return필수
const Post = (props) => { 
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const requestOptions ={
            method : "GET"
        }
        fetch("http://localhost:8000/post/",requestOptions)
        .then(response => response.json())
        .then(result => setPosts(result.posts))
        .catch(error => alert('불러오기 실패',error))
    },[])
    return (
        <>
            <ShowPosts posts={posts}/>
        </>
    );
};

export default Post;