import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import javascript from '../img/javascript.ico';
import django from '../img/django.ico';
import git from '../img/git.ico';
import python from '../img/python.ico';
import react from '../img/react.ico';
import jquery from '../img/jquery.ico';
import mysql from '../img/mysql.ico';
import portBG from '../img/portBG.png';
const PortFolio = (props) => {
    const width = props.width
    const [prevent, setPrevent] = useState(false);
    const explainRef = useRef([0,1]);
    const containerRef=  useRef();
    const introRef = useRef();
    useEffect(()=>{
        const backColors = [portBG,'#F67280','#C06C84','#6C5B7B','#355C7D']
        backColors.forEach((element,index) => {
            typeof element !== 'string' ?
            containerRef.current.querySelector(`div:nth-child(${index+1})`).style.backgroundImage = `url(${element})`:
            containerRef.current.querySelector(`div:nth-child(${index+1})`).style.background = element    
        });
    },[])
    useEffect(()=>{
        const text = introRef.current.innerText
        introRef.current.innerText = ''
        const textArray = [[],[],[],[]]
        for (let i = 0; i <= text.length/4; i++) {
            const element = text.slice(4*i,4*i+4);
            textArray[i%4].push(element);
        }
        
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
    const handdleTouch = (e) => {
        console.log(e)
    }
    return (
        <div className={styles.appcontainer} ref={containerRef} onWheel={(e) => handdleWheel(e)} onTouchMove={(e)=>handdleTouch(e)}>
            <div className={styles.items_wrapper}>
                <div className={styles.intro} ref={introRef}>
                나날이 만들어가는것에 성취감을 느끼는 개발자가 되고싶은 김용철입니다.
                </div>
            
            </div>
            <div className={styles.items_wrapper}>
                <p className={styles.title}>학력사항</p>
                <ul className={styles.list_box}>
                    <li>
                        <span className={styles.order}>대학교</span>
                        <span className={styles.content}>전남대학교</span>
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
                <ul className={styles.image_box}>
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
                </ul>
            </div>
            <div className={styles.items_wrapper}>
                <p className={styles.title}>Personal Project</p>
                <p className={styles.project_title}>개인블로그</p>
                <div className={styles.item_box}>
                    <div className={styles.project_img}>
                        <img src="" alt=""/>
                    </div>
                    
                    <div className={styles.project_explainbox} ref={el=>(explainRef.current[0]=el)}>
                        <div className={styles.click_box}>
                            <span
                                className={styles.click_explain}
                                onClick={(e)=>handdleClickLang(e,0)}
                            >
                                사용언어
                            </span>
                            <span
                                className={styles.click_explain}
                                onClick={(e)=>handdleClickExp(e,0)}
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
                                    <span className={styles.order}>database</span>
                                    <span className={styles.content}>sqlite</span>
                                </li>
                                <li>
                                    <span className={styles.order}>기타</span>
                                    <span className={styles.content}>git, yarn</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.project_explain}>
                            <p className={styles.title}>상세내용설명</p>
                            <div className={styles.project_detail}>
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
                            >
                                사용언어
                            </span>
                            <span
                                className={styles.click_explain}
                                onClick={e=>handdleClickExp(e,1)}
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
                                    <span className={styles.order}>database</span>
                                    <span className={styles.content}>mySQL</span>
                                </li>
                                <li>
                                    <span className={styles.order}>기타</span>
                                    <span className={styles.content}>git, jquery</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.project_explain}>
                            <p className={styles.title}>상세내용설명</p>
                            <div className={styles.project_detail}>
                                Django를 이용하여 각 지역의 정치인들에 대한 정보를 알려주는 페이지로
                                기본적인 CRUD를 구현하여 로그인, 로그아웃, 게시판, 댓글쓰기 등이 가능하며,
                                search기능을 만들었고, d3라이브러리를 이용해 만들어진 지도를 이용해,
                                지역을 클릭하면 그 지역의 정치인에 대한 정보가 나오도록 만들었습니다.
                                <p className={styles.myRole}>myRole</p>
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