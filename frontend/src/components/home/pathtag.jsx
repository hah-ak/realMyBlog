import React, { useEffect, useRef } from 'react';

const Pathtag = (props) => {
    const ref = useRef()
    /* 시작위치: M:절대위치 m:상대위치(움직임) 
        끝나는위치: A일때 x,y에서 멈추고 a일때 dx,dy만큼 움직여서 끝남(오른쪽,아래가 플러스)
        rx,ry 값: 반지름을 나타낸다
        큰호는 상대적으로 큰것, 쓸기호는 시계방향을 정한다
        strokewidth는 테두리로 인해 늘어나는 전체 위드를 말함, 지름에 추가되는 길이
    */
    useEffect(()=>{
        ref.current.animate({
            transform:[`rotate(${props.angle}deg)`,`rotate(${props.index % 2 === 0 ? 45+props.angle: 45-props.angle}deg)`],
            offset:[0]
        }, {
            duration:(Math.abs(props.angle))*100,
            iterations:'Infinity',
            direction:'alternate'
        })
    },[props])
    const cos = Math.cos(45*Math.PI/180)
    const sin = Math.sin(45*Math.PI/180)
    const randint = Math.round(Math.random()*100)
    
    return (

                <path ref={ref} d={`M ${250-props.radius},250 a ${props.radius} ${props.radius} 0 0 1 ${props.radius*(1-cos)},${-sin*props.radius}
                M ${250+props.radius},250 a 100 100 0 0 1 ${props.radius*(cos-1)},${sin*props.radius}`}
                fill='none' stroke={`rgb(${255-randint} ${255-randint} ${255-randint})`} strokeWidth='15' strokeLinecap='round' />
            
    )
}

export default Pathtag;