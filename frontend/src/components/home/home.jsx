import React, { useEffect, useRef, useState } from 'react';
import Showlist from './showlist';
import styles from './style.module.css';
import Loading from './loading';
import {loading} from './animate';
import Path from './path';
import down from './img/down.ico';
const Home = (props) => {
    
    const [posts,setPost] = useState([])
    const loadele = useRef();
    const [prevent, setPrevent] = useState(true)
    const [child,setChild] = useState({num:1})
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
        const appcontainer = document.querySelector('.appcontainer')
        const numchild = appcontainer.childElementCount
        for (let index = 0; index < numchild; index++) {
            const divchild = appcontainer.querySelector(`div:nth-child(${index+1})`)
            // -표시 대신 카멜케이스로 작성
            divchild.style.zIndex = numchild - index
        }
    },[])
    

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
    // fill-mode를 이용해 값의 변화없이 깔끔한 변화주기
    const transfn = (nowchild, translate) => {
        document.querySelector(`.appcontainer div:nth-child(${nowchild})`).animate([
            {transform:translate}
        ],{duration:500,fill:'forwards'})
    }
    
    const HanddleWheel = (e) =>{
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
        
        if (prevent === true) {
            setPrevent(false)
            if (e.deltaY >=100 && child.num < document.querySelector('.appcontainer').childElementCount) {
                transfn(child.num, 'translateY(100vh)')
                setChild({num:child.num + 1});
            } else if (e.deltaY <= -100 && child.num > 1) {
                transfn(child.num-1, 'translateY(0vh)')
                setChild({num:child.num - 1});
            }
            
            setTimeout(() => {
                setPrevent(true)
            }, 500);
        }
        
    }
    const HanddleClick = (string) => {
        if (string === 'down') {
            transfn(child.num,'translateY(100vh)')
            setChild({num:child.num + 1})
        } else {
            transfn(child.num - 1, 'translateY(0vh)')
            setChild({num:child.num - 1})
        }
        console.log(string)
    }
    const HanddleKeydown = (e) => {
        
        console.log(e)
    }
    
    return (
        
    <>    
            <section className={styles.loading} ref={loadele}>
                <span className={styles.backspan}>
                    {/* <span className={styles.frontspan}></span>
                    <span className={styles.frontspan}></span> */}
                </span>
                <span className={`${styles.loadingspan} loadingspan`}>
                    <svg className={`${styles.svgtag} svgtag`}>
                        {radius_angle.map((factor,index)=>(
                            <Path
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
                <span className={`${styles.numbering} numbering`}></span>
            </section>
            <div 
            className={`${styles.appcontainer} appcontainer`} 
            onWheel={(e) => HanddleWheel(e)}
            >
                <div className={styles.items_wrapper}>
                    <div className={styles.homedeco}>
                        <h1>HahAk's<br/>
                            Blog</h1>
                    </div>
                    <img
                            className={styles.upDown}
                            src={down}
                            alt="Click or wheel" 
                            onClick={()=>HanddleClick('down')}
                            onKeyDown={(e) => HanddleKeydown(e)}
                        />
                    
                </div>
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