import React from 'react';

const Showlist = (props) => (
       <div>
           {props.posts.map(post => {
               return (
               <p key={post.id}>
                   {post.title}
                   {post.content}
                   {post.create}
               </p>
               )
           })}
       </div>
    );

export default Showlist;