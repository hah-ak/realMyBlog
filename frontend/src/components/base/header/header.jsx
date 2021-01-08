import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './style.module.css';
const Header = (props) => {
    const history = useHistory();
    const handdleClick = (e,string) => {
        e.preventDefault();
        history.push({
            pathname:string
        })
    }
    
    return (
        <>
            <nav className={`${styles.top_navbar} ${props.sidebarState === 'visible' ? styles.visible : ''}`} >
                
                <div>
                    <span onClick={(e)=>handdleClick(e,'home')}>Home</span>
                    <ul>
                        <li><span>intro</span></li>
                    </ul>
                </div>
                <div>
                    <span onClick={(e)=>handdleClick(e,'post')}>MyPost</span>
                    <ul>
                        <li onClick={(e)=>handdleClick(e,'algoritm')}><span>algoritm</span></li>
                        <li onClick={(e)=>handdleClick(e,'javascript')}><span>javascript</span></li>
                        <li onClick={(e)=>handdleClick(e,'python')}><span>python</span></li>
                        <li onClick={(e)=>handdleClick(e,'django')}><span>django</span></li>
                        <li onClick={(e)=>handdleClick(e,'git')}><span>Git</span></li>
                    </ul>
                </div>
                <div>
                    <span onClick={(e)=>handdleClick(e,'teamproject')}>TeamProject</span>
                    <ul>
                        <li><span>youknowwhat</span></li>
                    </ul>
                </div>
                <div>
                    <span onClick={(e)=>handdleClick(e,'portfolio')}>PortFolio</span>
                </div>
                
            </nav>
        </>
    )
};

export default Header;