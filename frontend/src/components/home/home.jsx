import React, { useEffect, useRef, useState } from 'react';
import Showlist from './showlist';
import styles from './style.module.css';
import {loading} from './animate';
const Home = (props) => {
    
    const [posts,setPost] = useState([])
    const loadele = useRef();
    const [child,setChild] = useState({num:1})
    useEffect(()=>{
        const requestOption = {
            method: 'GET'
        };
        fetch('http://localhost:8000/',requestOption)
        .then(response => response.json())
        .then(result => {setPost(result.post)})
        .catch(error => console.log('error :',error))
    },[])

    useEffect(()=>{
        const appcontainer = document.querySelector('.appcontainer')
        const numchild = appcontainer.childElementCount
        for (let index = 0; index < numchild; index++) {
            const divchild = appcontainer.querySelector(`div:nth-child(${index+1})`)
            // -표시 대신 카멜케이스로 작성
            divchild.style.zIndex = numchild - index
            divchild.style.bottom = '0vh'
        }
    },[])
    

    useEffect(()=>{
        loading(loadele.current)
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
    
    
    const HanddleWheel = (e) =>{
        const appcontainer = document.querySelector('.appcontainer')
        // zindex를 통한 페이지 전환 구현
        // const changeZ = (usechild) => {
        //     const getz = appcontainer.querySelector(`div:nth-child(${usechild})`).style.zIndex
        //     appcontainer.querySelector(`div:nth-child(${usechild})`).style.zIndex = -1 * getz
        // }
        // if (e.deltaY >= 100) {
        //     if (child.num < appcontainer.childElementCount) {
        //         changeZ(child.num);
        //         setChild({num:child.num + 1});
        //     }
        // } else if (e.deltaY <= -100){
        //     if (child.num > 1) {
        //         changeZ(child.num-1);
        //         setChild({num:child.num - 1});
        //     }
        // }
        const changeBottom = (paramchild) => {
            const nowchild = appcontainer.querySelector(`div:nth-child(${paramchild})`)
            const bottom = nowchild.style.bottom
            if (bottom === '-100vh') {
                nowchild.animate([
                    {transform:'translateY(-100vh)'}
                ],{duration:501})
                setTimeout(() => {
                    appcontainer.querySelector(`div:nth-child(${paramchild})`).style.bottom = '0vh'
                }, 500);
            } else {
                nowchild.animate([
                    {transform:'translateY(100vh)'}
                ],{duration:501})
                setTimeout(() => {
                    appcontainer.querySelector(`div:nth-child(${paramchild})`).style.bottom = '-100vh'
                }, 500);
            }
        }
        if (e.deltaY >=100 && child.num < appcontainer.childElementCount) {
                changeBottom(child.num);
                setChild({num:child.num + 1});
        } else if (e.deltaY <= -100 && child.num > 1) {
                changeBottom(child.num - 1);
                setChild({num:child.num - 1});
        }
    }
    
    
    return (
        
    <>    
            <section className={styles.loading} ref={loadele}>
                <span className={styles.loadingspan}>
                    <span className={styles.circleline}>
                        <span className={styles.circle}></span>
                    </span>
                </span>
                
            </section>
            <div className='appcontainer' onWheel={(e) => HanddleWheel(e)}>
                <div className={styles.items_wrapper}>
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
                    {/* <div className={styles.item}>
                        <span className={styles.title}>RecentPost</span>
                        <Showlist posts={posts}/>
                    </div> */}
                </div>
            </div>
        
    </>
    )
};

export default Home;