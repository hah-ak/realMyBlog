import React from 'react';
import styles from './style.module.css';
const Header = (props) => {
    return (
        <>
            <nav className={styles.top_navbar}>
                
                <div>
                    <span>Home</span>
                    <ul>
                        <li><span>intro</span></li>
                    </ul>
                </div>
                <div>
                    <span>MyPost</span>
                    <ul>
                        <li><span>algoritm</span></li>
                        <li><span>javascript</span></li>
                        <li><span>python</span></li>
                        <li><span>django</span></li>
                        <li><span>Git</span></li>
                        
                    </ul>
                </div>
                <div>
                    <span>TeamProject</span>
                    <ul>
                        <li><span>youknowwhat</span></li>
                    </ul>
                </div>
                
            </nav>
        </>
    )
};

export default Header;