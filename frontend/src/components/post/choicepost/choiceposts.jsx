import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Choiceposts = (props) => {
    const {postIndex} = useParams()
    return (
        <Link to={`/post/${postIndex}/${props.postid}`}>
            <div>
                <p>{props.title}</p>
                <p>{props.content}</p>   
            </div>
        </Link>
    )
};

export default Choiceposts;