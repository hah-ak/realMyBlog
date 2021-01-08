import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
// import javascript from '../img/javascript.ico';
// import django from '../img/django.ico';
// import git from '../img/git.ico';
// import python from '../img/python.ico';
// import react from '../img/react.ico';
// import jquery from '../img/jquery.ico';
// import mysql from '../img/mysql.ico';
import portBG from '../img/BG.png';
import bolloon from '../img/bolloon.png';
import skillBG from '../img/skillBG.png';
const PortFolio = (props) => {
    const width = props.width
    const [prevent, setPrevent] = useState(false);
    const explainRef = useRef([0,1]);
    const containerRef=  useRef();
    const introRef = useRef([0,0,0]);
    useEffect(()=>{
        const backColors = [portBG,'#F67280',skillBG,'#6C5B7B','#355C7D']

        backColors.forEach((element,index) => {
            element.indexOf('#',0) === -1 ?
            containerRef.current.querySelector(`div:nth-child(${index+1})`).style.backgroundImage = `url(${element})`:
            containerRef.current.querySelector(`div:nth-child(${index+1})`).style.background = element    
        });
    },[])
    useEffect(()=>{
        const text1 = '생각하고 만들어가며'
        const text2 = '나날이 발전하는 개발자가'
        const text3 = '되고싶은 김용철입니다.'
        const textDivider = (text,index) => {
            for (let i = 0; i < text.length; i++) {
                if (text[i] === " ") {
                    introRef.current[index].querySelector(`span:last-child`).append(' ')
                } else {
                    const span = document.createElement('span')
                    span.style.display = 'inline'
                    span.style.position = 'relative'
                    span.innerText = text[i]
                    span.style.fontSize = '4.8vh'
                    span.style.opacity = '0%'
                    span.style.color = '#ac7059'
                    text[i] === '김' || text[i] === '용' || text[i]==='철'?
                    span.style.fontFamily='koreaB':
                    span.style.fontFamily='korea'
                    let delay = i % 4 * 700
                    span.animate({opacity:['100%']},{delay:delay,duration:1000,fill:'forwards'})
                    introRef.current[index].appendChild(span)
                }
            }
        }
        textDivider(text1,0)
        textDivider(text2,1)
        textDivider(text3,2)
        
    },[])
    const handdleClickLang = (e,number) => {
        e.preventDefault()
        explainRef.current[number].querySelector('div:nth-child(2)').style.display = 'flex'
        explainRef.current[number].querySelector('div:nth-child(3)').style.display = 'none'
    }
    const handdleClickExp = (e,number) => {
        e.preventDefault()
        explainRef.current[number].querySelector('div:nth-child(3)').style.display = 'flex'
        explainRef.current[number].querySelector('div:nth-child(2)').style.display = 'none'
    }
    const handdleWheel = (e) => {
        // e.preventDefault()를 하면 페시브 이벤트는 막을수 없다고 뜸, passive를 false로 만들어줘야하나
        // 휠 이벤트를 쓰긴 쓸거라 하지 않음
        if (prevent === false) {
            setPrevent(true)
            e.deltaY > 0 ?
            containerRef.current.scrollBy({top:props.height, behavior:'smooth'}) :
            containerRef.current.scrollBy({top:-props.height, behavior:'smooth'})
            setTimeout(() => {
                setPrevent(false)
            }, 500);
        }
    }
    const linkClick = (e) => {
        window.open(e.currentTarget.innerText,'_blank')
    }
    const handdleTouch = (e) => {
        console.log(e)
    }
    return (
        <div className={styles.appcontainer} ref={containerRef} onWheel={(e) => handdleWheel(e)} onTouchMove={(e)=>handdleTouch(e)}>
            <div className={styles.items_wrapper}>
                <div className={styles.intro} style={{backgroundImage:`url(${bolloon})`,zIndex:2,backgroundSize:'100% 100%'}}>
                    <pre className={styles.textbox} ref={el=>introRef.current[0]=el}></pre>
                    <pre className={styles.textbox} ref={el=>introRef.current[1]=el}></pre>
                    <pre className={styles.textbox} ref={el=>introRef.current[2]=el}></pre>
                </div>
            
            </div>
            <div className={styles.items_wrapper}>
                <p className={styles.title}>Educational History</p>
                <ul className={styles.list_box}>
                    <li>
                        <span className={styles.order}>최종학력</span>
                        <span className={styles.content}>전남대학교 졸업 <br/> 2011.02~2018.02</span>
                    </li>
                    <li>
                        <span className={styles.order}>전공</span>
                        <span className={styles.content}>응용화학공학부</span>
                    </li>
                    <li>
                        <span className={styles.order}>교육이력</span>
                        <span className={styles.content}>2019.08 ~ 2019.12 스마트미디어인재개발원 <br/>
                        2020.07 ~ 2020.11 광주AI사관학교</span>
                    </li>
                </ul>
            </div>
            <div className={styles.items_wrapper}>
                <p className={styles.title}>Skill</p>
                <div className={styles.item_box}></div>
                {/* <ul className={styles.image_box}>
                    <li>
                        <img src={python} alt="python"/>
                        <img src={django} alt="django"/>
                    </li>
                    <li>
                        <img src={git} alt="git"/>
                        <img src={mysql} alt="mysql"/>
                    </li>
                    <li>
                        <img src={javascript} alt="javascript"/>
                        <img src={react} alt="react"/>
                        <img src={jquery} alt="jquery"/>
                    </li>
                </ul> */}
            </div>
            <div className={styles.items_wrapper}>
                <p className={styles.title}>Personal Project</p>
                <p className={styles.project_title}>MyBlog</p>
                <div className={styles.item_box}>
                    <div className={styles.project_img}>
                        <img src="" alt=""/>
                    </div>
                    
                    <div className={styles.project_explainbox} ref={el=>(explainRef.current[0]=el)}>
                        <div className={styles.click_box}>
                            <span
                                className={styles.click_explain}
                                onClick={(e)=>handdleClickLang(e,0)}
                                style={{backgroundColor:'#ee0e47'}}
                            >
                                사용언어
                            </span>
                            <span
                                className={styles.click_explain}
                                onClick={(e)=>handdleClickExp(e,0)}
                                style={{backgroundColor:'#ee0e47'}}
                            >
                                상세설명
                            </span>
                        </div>
                        
                        <div className={styles.project_explain} style={{display:'flex'}}>
                            <ul className={styles.list_box}>
                                <li><span className={styles.order}>사용언어</span>
                                    <span className={styles.content}>javascript, python</span>
                                </li>
                                <li>
                                    <span className={styles.order}>프레임워크</span>
                                    <span className={styles.content}>react, django</span>
                                </li>
                                <li>
                                    <span className={styles.order}>DB</span>
                                    <span className={styles.content}>sqlite</span>
                                </li>
                                <li>
                                    <span className={styles.order}>기타</span>
                                    <span className={styles.content}>git, yarn</span>
                                </li>
                                <li>
                                    <span className={styles.order}>GitHub</span>
                                    <span className={`${styles.content} ${styles.urlclick}`} onClick={(e)=>linkClick(e)}>https://github.com/hah-ak/realMyBlog</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.project_explain}>
                            <p className={styles.explainTitle}>상세내용설명</p>
                            <div className={styles.project_detail} style={{color:'#ffcf62'}}>
                                반응형 웹페이지 제작하여 어떤 기기로도 깨지지 않고 볼 수 있도록 제작하였습니다.
                                주요 컨텐츠를 제외한 보조 ui요소(sidebar, 바로가기, hearder등)
                                는 사용자가 선택적으로 언제든 지울 수 있도록 제작하였습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.items_wrapper}>
                <p className={styles.title}>Team Project</p>
                <p className={styles.project_title}>YouKnowWhat?</p>
                <div className={styles.item_box}>
                    <div className={styles.project_img}>
                        <img src="" alt=""/>
                    </div>
                    
                    <div className={styles.project_explainbox}  ref={el=>explainRef.current[1]=el}>
                        <div className={styles.click_box}>
                            <span 
                                className={styles.click_explain}
                                onClick={(e)=>handdleClickLang(e,1)}
                                style={{backgroundColor:'#de73d4'}}
                            >
                                사용언어
                            </span>
                            <span
                                className={styles.click_explain}
                                onClick={e=>handdleClickExp(e,1)}
                                style={{backgroundColor:'#de73d4'}}
                            >
                                상세설명
                            </span>
                        </div>
                        <div className={styles.project_explain} style={{display:'flex'}}>
                            <ul className={styles.list_box}>
                                <li>
                                    <span className={styles.order}>사용언어</span>
                                    <span className={styles.content}>javascript, python</span>
                                </li>
                                <li>
                                    <span className={styles.order}>프레임워크</span>
                                    <span className={styles.content}>django</span>
                                </li>
                                <li>
                                    <span className={styles.order}>DB</span>
                                    <span className={styles.content}>mySQL</span>
                                </li>
                                <li>
                                    <span className={styles.order}>기타</span>
                                    <span className={styles.content}>git, jquery</span>
                                </li>
                                <li>
                                    <span className={styles.order}>GitHub</span>
                                    <span className={`${styles.content} ${styles.urlclick}`} onClick={(e)=>linkClick(e)}>https://github.com/helloworldjay/CrimeReport</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.project_explain}>
                            <p className={styles.explainTitle}>상세내용설명</p>
                            <div className={styles.project_detail}>
                                Django를 이용하여 각 지역의 정치인들에 대한 정보를 알려주는 페이지로
                                기본적인 CRUD를 구현하여 로그인, 로그아웃, 게시판, 댓글쓰기 등이 가능하며,
                                search기능을 만들었고, d3라이브러리를 이용해 만들어진 지도를 이용해,
                                지역을 클릭하면 그 지역의 정치인에 대한 정보가 나오도록 만들었습니다.
                                <p className={styles.myRole} style={{color:'white'}}>myRole</p>
                                postApp의 전체 front-end, back-end
                                영역과 main페이지의 지도 클릭시 정보를 받아오는 비동기 처리 담당
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default PortFolio;