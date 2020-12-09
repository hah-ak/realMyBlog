import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
const ShowOrder = (props) => {
    return (
        <Link className={styles.linktag} to={props.link_to}>
            <div 
                onClick={props.sidebar_close}
                onMouseOver={props.active_hover} 
                onMouseOut={props.inactive_hover}
            >
                <span><img src={props.img_src} className={styles.menubar_icon} alt=""/><h4>{props.title}</h4></span>
                
            </div>
        </Link>
    )
};

export default ShowOrder;