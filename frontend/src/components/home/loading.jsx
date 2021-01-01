import React, { useEffect, useRef } from 'react';
import styles from './style.module.css';
import {rotateAnimate} from './animate';
const Loading = (props) => {
    // ele.querySelector('.loadingspan').animate(
    //     [{transform:'rotate(360deg)'}]
    // ,{duration:1001,iterations:'Infinity',delay:0})
    const circleref = useRef();
    const lineref = useRef();
    useEffect(()=>{
        const setcircle = () =>{
            circleref.current.style.height = `${15 - props.i}px`
            circleref.current.style.width = `${15 - props.i}px`
            circleref.current.style.background=`rgb(${255-props.i*10}, ${255-props.i*10}, ${255-props.i*10})`
        }
        setcircle()
        rotateAnimate(lineref.current, props.i, props.arraylength, props.count)
    },[props])
    
    return (
        <>
            <span ref={lineref} className={`${styles.circleline} circleline`}>
                <svg ref={circleref} className={styles.circle}></svg>
            </span>
            
        </>
    )
};

export default Loading;