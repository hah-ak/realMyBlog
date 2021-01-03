import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Showlist from './showlist';
import styles from './style.module.css';
import Loading from './loading';
import {loading} from './animate';
import Pathtag from './pathtag';
import down from './img/down.ico';
import Footer from '../base/footer/footer';
import ContentNumber from './contentNumber';

// window창 크기의 변화에 따라 높이와 변화를 인식하는 state의 역할을 해준다.
const useWindowSize = () => {
    const [size, setSize] = useState([window.innerHeight,window.innerWidth])
    useLayoutEffect(()=> {
        const updateSize = () => {
            setSize([window.innerHeight,window.innerWidth])
        }
        window.addEventListener('resize',updateSize);
        updateSize();
        return () => window.removeEventListener('resize',updateSize)
    },[])
    return size
}

const Home = (props) => {
    
    
    const loadele = useRef();
    const appcontainers = useRef()


    const [posts,setPost] = useState([])
    const [TotalChild, setTotalChild] = useState(0)
    const [child,setChild] = useState({num:1})
    const [ScrollPosition, setScrollPosition] = useState([])
    const [Prevent, setPrevent] = useState(false)
    const [height,width] = useWindowSize();
    
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
        const numchild = appcontainers.current.childElementCount
        const updatePosition = () =>{
            const newarray = []
            for (let i = 1; i < numchild; i++) {
                newarray.push(appcontainers.current.querySelector(`div:nth-child(${i})`).offsetTop)
            }
            newarray.push(appcontainers.current.scrollHeight)
            return newarray
        }
        const getdata = updatePosition();
        console.log(getdata,appcontainers.current.scrollHeight)
        setScrollPosition(getdata)
        setTotalChild(numchild)
    },[width,height])

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
    const scrollMove = (number) => {
        
        if (number >= 1 && number < TotalChild){
            appcontainers.current.querySelector(`div:nth-child(${number})`).scrollIntoView({behavior:'smooth'})
        }  
            
        
    }
    
    const ScrollActive = (e) => {
        //footer는 제외할것이다
        e.preventDefault()
        if (Prevent===false) {
            setPrevent(true)
            setTimeout(() => {
                const nowScrollPosition = appcontainers.current.scrollTop
                for (let index = 1; index < TotalChild; index++) {
                    if (nowScrollPosition >=ScrollPosition[index-1]-200 && nowScrollPosition < ScrollPosition[index]-200){
                        document.querySelector(`.${styles.contentnumbers} span:nth-child(${index})`).classList.add(styles.active)
                        setChild({num:index})
                    } else {
                        document.querySelector(`.${styles.contentnumbers} span:nth-child(${index})`).classList.remove(styles.active)
                    }
                }
                setPrevent(false)
            }, 200);
        } 
        
        
    }
    const HanddleClick = (e, string) => {
        e.preventDefault()
        string === 'down' ? scrollMove(child.num+1) : scrollMove(child.num-1)
    }
    const HanddleKeydown = (e) => {
        // tapindex를 설정해주면 onkeydown이 작동하게된다.
        // e.code는 3항연산자에서 왜 문제가 발생하나
        e.preventDefault()
        if (e.code === "ArrowDown") {
            scrollMove(child.num + 1)
        } else if (e.code === "ArrowUp") {
            scrollMove(child.num - 1)
        }
    }
    const clickScrollNum = (e,number) => {
        e.preventDefault()
        scrollMove(number+1)
        
    }
    return (
        
    <>  
            <div className={styles.contentnumbers}>
                {
                    <ContentNumber 
                        ScrollPosition={ScrollPosition}
                        clickScrollNum={clickScrollNum}
                        TotalChild={TotalChild}
                    />   
                }
            </div>
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
            <div 
            className={`${styles.appcontainer} appcontainer`}
            ref={appcontainers}
            onKeyDown={(e) => HanddleKeydown(e)}
            tabIndex="0"
            onScroll={(e) => ScrollActive(e)}
            >
                <div className={styles.items_wrapper}>
                    <div className={styles.homedeco}>
            
                        <h1>HahAk's<br/>
                            Blog</h1>
                        <img
                            className={styles.upDown}
                            src={down}
                            alt="Click or wheel" 
                            onClick={(e)=>HanddleClick(e,'down')}
                        />
            
                    </div>
                    
                    
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
                </div>
                <Footer />
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