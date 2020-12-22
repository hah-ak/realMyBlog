import React from 'react';
import { useHistory } from 'react-router-dom';
import ShowPost from './showPost';

const ShowPosts = (props) => {
    const history = useHistory()
    const getpost = (postindex, postid) => {
        history.push({
            pathname:`/post/${postindex}/${parseInt(postid)}`,
        })
    }
    return (
        <>
            {props.postContents.map(content => 
                <ShowPost
                    key={content.id}
                    postindex={props.postindex}
                    postid={content.id}
                    posttitle={content.title}
                    postcontent={content.content}
                    //화살표 함수를 쓰지 않으면 함수가 호출되어 버린다
                    getpost={() => getpost(props.postindex, content.id)}
                />
            )}
        </>
    )
};

export default ShowPosts;