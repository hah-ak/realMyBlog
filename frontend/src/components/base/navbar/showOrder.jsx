import React from 'react';
import styles from './style.module.css';

const ShowOrder = (props) => {
    
    return (
       
            <div 
                className={styles.itembox}
                onClick={(e) => props.get_choice(e, props.link_to)}
                onMouseOver={props.active_hover} 
                onMouseOut={props.inactive_hover}
            >
                <span className={styles.item}><img src={props.img_src} className={styles.menubar_icon} alt=""/><h4>{props.title}</h4></span>
                
            </div>
    
    )
};

export default ShowOrder;