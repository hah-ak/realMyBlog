import React from 'react';
import styles from './style.module.css';
import down from '../../img/down.ico';
const FastAccess = ({childRen}) => {
    const scrollMove = (position) => {
        position === 'top'?
        window.scrollTo({top:0, behavior:'smooth'}):
        childRen.current[position][0].scrollIntoView({behavior:'smooth'})
    }    
      
      
    //   const HanddleKeydown = (e) => {
    //       // tapindex를 설정해주면 onkeydown이 작동하게된다.
    //       // e.code는 3항연산자에서 왜 문제가 발생하나
    //       e.preventDefault()
    //       if (e.code === "ArrowDown") {
    //           scrollMove(child.num + 1)
    //       } else if (e.code === "ArrowUp") {
    //           scrollMove(child.num - 1)
    //       }
    //   }
    const clickScrollNum = (e,position) => {
        e.preventDefault()
        scrollMove(position)
    }
    return (
        <div className={styles.contentnumbers}>
            <span onClick={(e)=> clickScrollNum(e,'top')}>
                <img
                        className={styles.upDown}
                        src={down}
                        alt="Click or wheel" 
                       
                    />
            </span>
            {childRen.current.map((element,i)=>{
                return (
                
                    <span 
                        key={i}
                        onClick={(e) => clickScrollNum(e,i)}
                    >
                        {element[1]}
                    </span>
                    )
                }  
            )}
        </div>
    )
}

export default FastAccess;