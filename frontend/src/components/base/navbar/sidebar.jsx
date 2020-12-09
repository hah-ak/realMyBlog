import React from 'react';
import styles from './style.module.css';
import {active_hover, inactive_hover, sidebar_toggle, sidebar_close} from './sidebarfunc';
import onmenu from './img/menubar.ico';
import post from './img/post.ico';
import recent from './img/recent.ico';
import home from './img/home.ico';
import team from './img/team.ico';
import javascript from './img/javascript.ico';
import django from './img/django.ico';
import python from './img/python.ico';
import react from './img/react.ico';
import ShowOrder from './showOrder';
const Sidebar = (props) => {
    //setstate자체는 비동기적이다. 그래서 단 한번만 해주게 해주는게 주요함
    //변하지 않을 것들이므로 state를 쓸 필요는 없다.
    // title, img_src, link_to
    const inputdata = [
        ['Home',home,'/'],
        ['MyPost',post,'/post'],
        ['TeamProject',team,'/'],
        ['RecentPost',recent,'/post'],
        ['JavaScript',javascript,'/'],
        ['Django',django,'/'],
        ['Python',python,'/'],
        ['React',react,'/']
    ]
    const orders = []
    for (let index = 0; index < inputdata.length; index++) {
        orders.push({'key':index,'title':inputdata[index][0], 'img_src':inputdata[index][1],'link_to':inputdata[index][2]});
    }
    
    return (
        <>
            <img src={onmenu} className={'sidebar_icon '+styles.sidebar_icon} onClick={sidebar_toggle}/>
            <nav 
                className={`sidebar ${styles.sidebar}`} 
                onMouseOver={active_hover} 
                onMouseOut={inactive_hover}
            >
               {orders.map(order => 
                        <ShowOrder 
                            key={order.key}
                            title={order.title}
                            img_src={order.img_src}
                            link_to={order.link_to}
                            sidebar_close={sidebar_close}
                            active_hover={active_hover}
                            inactive_hover={inactive_hover}
                        />
                    )
                }
            </nav>
        </>
    )
};

export default Sidebar;