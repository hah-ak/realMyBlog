import React, { useEffect, useState } from 'react';
import Showlist from './showlist';
import styles from './style.module.css';
const Home = (props) => {
    const [posts,setPost] = useState([])

    useEffect(()=>{
        const requestOption = {
            method: 'GET'
        };
        fetch('http://localhost:8000/',requestOption)
        .then(response => response.json())
        .then(result => {setPost(result.post)})
        .catch(error => console.log('error :',error))
    },[])
    
    const Handdlemouseover = (e) => {
        e.preventDefault()
        const ct = e.currentTarget
        setTimeout(()=>{
            ct.setAttribute('style','background:white; overflow:visible;')
        },1000)
        
    }
    const Handdlemouseout = (e) => {
        e.preventDefault()
        const ct = e.currentTarget
        setTimeout(() => {
            ct.setAttribute('style','background:none; overflow:hidden;')    
        }, 1000);
        
    }
    return (
        
    <>    
        
            
            <div className={styles.intro}>
                <h1>
                    취업해보자
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tenetur ipsa quia dicta dolor libero a facilis molestiae est nisi nostrum facere, cum iure! Animi ea alias placeat ullam aspernatur.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ratione! Culpa error, nam distinctio quas similique sed, eaque cum, voluptatem eveniet eligendi nemo ex natus doloremque consequuntur fuga aperiam. Optio.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi maxime cum reprehenderit beatae vel libero mollitia, ducimus nulla blanditiis hic. Nostrum autem nemo totam vero excepturi obcaecati perferendis, pariatur quo.
                </p>
            </div>
            <div className={styles.items_wrapper}>
                <div className={styles.item}>
                    <span className={styles.title}>Today</span>
                    <Showlist
                        posts={posts}
                        Handdlemouseover={Handdlemouseover}
                        Handdlemouseout={Handdlemouseout}
                    />
                </div>
                <div className={styles.item}>
                    <span className={styles.title}>RecentPost</span>
                    <Showlist posts={posts}/>
                </div>
            </div>
        
    </>
    )
};

export default Home;