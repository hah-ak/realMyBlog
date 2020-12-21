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
                    getpost={() => getpost(props.postindex, content.id)}
                />
            )}
        </>
    )
};

export default ShowPosts;