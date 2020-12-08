import React, { useEffect } from 'react';
import styles from './style.module.css';
import {active_hover, inactive_hover, sidebar_toggle} from './sidebarfunc';
import onmenu from './img/menubar.ico';
import { Link } from 'react-router-dom';
import page from './img/page.ico';
import recent from './img/recent.ico';
const Sidebar = (props) => {
    return (
        <>
            <img src={onmenu} className={'sidebar_icon '+styles.sidebar_icon} onClick={sidebar_toggle}/>
            <nav 
                className={`sidebar ${styles.sidebar}`} 
                onMouseOver={active_hover} 
                onMouseOut={inactive_hover}
            >
                <ul 
                    onMouseOver={active_hover} 
                    onMouseOut={inactive_hover}
                >
                    <span><img src={page} className={styles.menubar_icon} alt=""/><h4>Page</h4></span>
                    <li><Link className={styles.linktag} to='/'>Home</Link></li>
                    <li><Link className={styles.linktag} to='/post'>MyPost</Link></li>
                    <li>TeamProject</li>
                </ul>
            
                <ul 
                    onMouseOver={active_hover} 
                    onMouseOut={inactive_hover}
                >
                    <span><img src={recent} className={styles.menubar_icon} alt=""/><h4>RecentPost</h4></span>  
                    <li>youknowwhat</li>
                    <li>youknowwhat2</li>    
                </ul>
            </nav>
        </>
    )
};

export default Sidebar;