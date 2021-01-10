import React, { useRef } from 'react';
import styles from './style.module.css';
import {active_hover, inactive_hover } from './sidebarfunc';
import ShowOrder from './showOrder';
import home from '../../../img/home.ico';
import post from '../../../img/post.ico';
import team from '../../../img/team.ico';
import recent from '../../../img/recent.ico';
import javascript from '../../../img/javascript.ico';
import django from '../../../img/django.ico';
import python from '../../../img/python.ico';
import react from '../../../img/react.ico';
import git from '../../../img/git.ico';
import portfolio from '../../../img/portfolio.ico';
import menubar from '../../../img/menubar.ico';
import { useHistory } from 'react-router-dom';
// function useGetheight() { 
//     const [height,setHeight] = useState(window.innerHeight)
//     useEffect(()=>{
//         const handdleheight = () => {
//             window.innerHeight !== height.height ? setHeight(window.innerHeight) : null
//         }
//         handdleheight()
//         const parent = document.querySelector(`.${styles.items}`)
//         const childlength = parent.childElementCount
//         if ((height.height - 40) < (childlength * 60)) {
//             let nums = height.height / 60
//             parent.setAttribute('style',`height:${nums*60};`)
//             console.log(childlength)
//         }
//         return () => window.resizeTo(height.width,height.height)
//     },[])
//     return height
// }


const Sidebar = (props) => {
    //setstate자체는 비동기적이다. 그래서 단 한번만 해주게 해주는게 주요함
    //변하지 않을 것들이므로 state를 쓸 필요는 없다.
    // title, img_src, link_to
    const inputdata = [
        ['Home',home,'/'],
        ['MyPost',post,'/post'],
        ['TeamProject',team,'/teamproject'],
        ['RecentPost',recent,'/post'],
        ['JavaScript',javascript,'/post/javascript'],
        ['Django',django,'/post/django'],
        ['Python',python,'/post/python'],
        ['React',react,'/post/react'],
        ['Git',git,'/post/git'],
        ['PortFolio',portfolio, '/portfolio']
    ]
    const clickRef =  useRef();
    const orders = []
    for (let index = 0; index < inputdata.length; index++) {
        orders.push({'key':index,'title':inputdata[index][0], 'img_src':inputdata[index][1],'link_to':inputdata[index][2]});
    }
    const history = useHistory()
    const get_choice = (e,link) => {
        e.preventDefault()
        history.push({
            pathname:link
        })
    }

    return (
        <>
            
            <img src={menubar} alt="menubar"
              className={styles.sidebar_icon}
              onClick={(e)=>props.menubarClick(e,clickRef)}
              ref={clickRef}
            />
            <nav 
                className={`sidebar ${styles.sidebar} ${props.sidebarState === 'visible'? styles.visible : ''}`} 
                onMouseOver={active_hover} 
                onMouseOut={inactive_hover}
            >
                <div className={styles.items}>
                    {/* <span className={`${styles.sidebar_button} ${styles.upbutton}`} onClick={upClick}>
                        <img className={styles.move} src={'/img/uparrow.ico'} alt="up"/>
                    </span> */}
                    {orders.map(order => 
                            <ShowOrder 
                                key={order.key}
                                title={order.title}
                                img_src={order.img_src}
                                link_to={order.link_to}
                                get_choice={get_choice}
                                active_hover={active_hover}
                                inactive_hover={inactive_hover}
                            />
                        )
                    }
                    {/* <span className={`${styles.sidebar_button} ${styles.downbutton}`} onClick={downClick}>
                        <img className={styles.move} src={'/img/downarrow.ico'} alt="down"/>
                    </span> */}
                </div>
            </nav>
            
        </>
    )
};

export default Sidebar;