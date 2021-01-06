import React, { useEffect, useRef, useState } from 'react';
import Showlist from './showlist';
import styles from './style.module.css';
import Loading from './loading';
import {loading} from './animate';
import Pathtag from './pathtag';

import FastAccess from '../base/fastAccess/fastAccess';

const Home = ({width,height}) => {
    
    const childRen = useRef([[],[],[]]);
    const loadele = useRef();
    const [posts,setPost] = useState([])
    
    const circlearray = [0,1,2,3,4,5,6,7,8,9,10]
    const radius_angle = [[110,30],[120,-40],[130,-60],[140,20],[150,75]]
    
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
        
        width < 768 ?
        document.querySelector(`.${styles.homedeco} h1`).style.fontSize = `${25*width/768}vh` :
        document.querySelector(`.${styles.homedeco} h1`).style.fontSize = `150px`
        // footer는 제외
        
        
        
        
    

    },[width])

    useEffect(()=>{
        const makespan = () => {
            var num = 100
            var spanarray = []
            while (num >= 0) {
                const spanHeight = 3 + Math.random()*4
                spanarray.push(spanHeight)
                num -= spanHeight
            };
            return spanarray
        }
        const percentage = [1,11,23,36,45,52,68,72,88,92,100]
        const count = 2
        const spanarray = makespan()
        
        loading(loadele.current, percentage, count, spanarray)
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
    {console.log(11111)}
        <FastAccess 
            childRen={childRen}
        />
        <section className={styles.loading} ref={loadele}>
            <span className={styles.backspan}>
                {/* <span className={styles.frontspan}></span>
                <span className={styles.frontspan}></span> */}
            </span>
            <span className={`${styles.loadingspan} loadingspan`}>
                <svg className={`${styles.svgtag} svgtag`}>
                    {radius_angle.map((factor,index)=>(
                        <Pathtag
                            key={index}
                            index={index}
                            radius={factor[0]}
                            angle={factor[1]}
                        />
                        ))}
                </svg>
                {circlearray.map((i) => (
                    <Loading
                        key={i}
                        i={i}
                        arraylength={circlearray.length}
                        count={2}
                    />  
                ))}
            </span>
            <span className={`${styles.numbering} numbering`} ></span>
        </section>
        <div className={styles.appcontainer}>
            <div className={styles.items_wrapper} ref={el=>childRen.current[0]=[el,'main']}>
                <div className={styles.homedeco}>
        
                    <h1>HahAk's<br/>
                        Blog</h1>
                    
        
                </div>
                
                
            </div>
            <div className={styles.items_wrapper} ref={el=>childRen.current[1]=[el,'intro']}>
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
            <div className={styles.items_wrapper} ref={el=>childRen.current[2]=[el,'today']}>
                <div className={styles.item}>
                    <span className={styles.title}>Today</span>
                    <Showlist
                        posts={posts}
                        Handdlemouseover={Handdlemouseover}
                        Handdlemouseout={Handdlemouseout}
                    />
                </div>
            </div>
        </div>
    </>
    )
};



export default Home;

// const [prevent, setPrevent] = useState(true)
// const nextPage = () => {
//     if (prevent === true && child.num < totalchild) {
//         setPrevent(false)
//         // div:nth-child(${child.num})
//         appcontainers.current.animate([
//             {transform:'translateY(100vh)'}
//         ],{duration:500,fill:'forwards'})
//         setChild({num:child.num + 1});
//         setTimeout(() => {
//             setPrevent(true)
//         }, 500);
//     }
// }
// const priorPage = () => {
//     if (prevent === true && child.num > 1) {
//         setPrevent(false)
//         // div:nth-child(${child.num-1})
//         document.querySelector(`.appcontainer`).animate([
//             {transform:'translateY(0vh)'}
//         ],{duration:500,fill:'forwards'})
//         setChild({num:child.num - 1});
//         setTimeout(() => {
//             setPrevent(true)
//         }, 500);
//     }
// }
// fill-mode를 이용해 값의 변화없이 깔끔한 변화주기
// const transfn = (nowchild, translate) => {
//     document.querySelector(`.appcontainer div:nth-child(${nowchild})`).animate([
//         {transform:translate}
//     ],{duration:500,fill:'forwards'})
// }
// const HanddleWheel = (e) =>{
    // const appcontainer = document.querySelector('.appcontainer')
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

        // const changeBottom = (paramchild) => {
        //     const nowchild = appcontainer.querySelector(`div:nth-child(${paramchild})`)
        //     const bottom = nowchild.style.bottom
        //     if (bottom === '-100vh') {
        //         nowchild.animate([
        //             {transform:'translateY(-100vh)'}
        //         ],{duration:500,fill:'forwards'})
        //         setTimeout(() => {
        //             // appcontainer.querySelector(`div:nth-child(${paramchild})`).style.bottom = '0vh'
        //             setPrevent(true)
        //         }, 500);
        //     } else {
        //         nowchild.animate([
        //             {transform:'translateY(100vh)'}
        //         ],{duration:500,fill:'forwards'})
        //         setTimeout(() => {
        //             // appcontainer.querySelector(`div:nth-child(${paramchild})`).style.bottom = '-100vh'
        //             setPrevent(true)
        //         }, 500);
        //     }
        // }
    //글자확대축소할 경우 휠 움직임 막아둠.
//     if (e.ctrlKey === false) {
        
//         const div = document.querySelector(`.appcontainer div:nth-child(${child.num})`)
//         if (div.scrollHeight > height) {
//             if ((div.scrollTop) === (div.scrollHeight - height) && e.deltaY >= 100) {
//                 nextPage()     
//             } else if (div.scrollTop === 0 && e.deltaY <= -100) {
//                 priorPage()
//             }
//         } else {
//             e.deltaY >= 100 ? nextPage() : priorPage()
//         }
//     }
    
// }