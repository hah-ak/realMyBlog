const loading = (ele,percentage,count,spanarray, patialtime=100) => {
    //숫자하나당 100ms의 시간을 줌
    
    const delaytime = percentage.length*patialtime*count
    const back = ele.querySelector('span:nth-child(1)')
    back.style.background = 'gray'
    //array를 다 돌면 양 벽이 갈라지는 시간을 줌
    // const frontL = back.querySelector('span:nth-child(1)')
    // const frontR = back.querySelector('span:nth-child(2)')
    // frontL.animate([
    //     {transform:'translateX(-200%)'}
    // ],{delay:delaytime, duration:2001,easing:'ease-out',fill:'forwards'})
    // frontR.animate([
    //     {transform:'translateX(200%)'}
    // ],{delay:delaytime, duration:2001,easing:'ease-out',fill:'forwards'})
    // 흔들림
    // back.animate(
    //     {transform: ['translateY(10%)','translateY(-10%)','translateY(10%)','translateY(-10%)','translateY(100%)'],
    //     offset:     [0.2, 0.4, 0.6, 0.8]}
    // ,{delay:delaytime+2000,duration:2001})
    
    //한줄 한줄 찢어지는 모양으로 만들어보자
    //이렇게 만들경우 중간중간 금이 생기는 경우가 발생한다.
    // spanarray.forEach(element => {
        
    //     const parent = document.createElement('svg')
    //     parent.style.display='flex'
    //     parent.style.flexDirection='row'
    //     parent.style.width = '100%'
    //     parent.style.height = `${(element+1).toFixed(0)}%`
    //     const width = Math.round((4+((Math.random()*2)))*10)
    //     for (let i = 0; i < 2; i++) {
    //         const ele = document.createElement('rect')
    //         ele.style.display = 'flex'
    //         ele.style.position = 'relative'
    //         ele.style.background = 'rgb(68, 66, 66)'
    //         ele.style.width = i === 0 ? `${width}%` : `${100-width}%`
    //         ele.style.height = '100%'
            
    //         ele.animate({transform:[i === 0 ? 
    //             'translateX(-105%)' : 
    //             'translateX(105%)']},
    //         {delay:parseInt(element.toFixed(2))*100+delaytime,duration:1000,fill:'forwards'})
    //         parent.appendChild(ele)   
    //     }
    //     back.appendChild(parent)
    // });    
    
    // animation: name duration timing-function delay iteration-count direction fill-mode;
    setTimeout(()=>{
        ele.animate({
            opacity:[`50%`, `10%`, `0%`],
            offset:[0.7,0.9]
        }, {
            duration:2000
        })
    },delaytime+1)
    setTimeout(() => {
        ele.style.display = 'none';
    }, delaytime+2000);

    
    const loadingPercent = (percentage) => {
        var i = 0
        const interval = () => {
            ele.querySelector('.numbering').innerText = percentage[i]
            i++
            if (i === percentage.length){
                clearInterval(clear)
            }
        }
        interval()
        const clear = setInterval(interval,100*count)
    }
    loadingPercent(percentage)

}



const rotateAnimate = (currentref,i,arraylength,count,patialtime=10) => {
    var checktime = 0
    const clearfunc = () => {
        clearInterval(interval)
        currentref.style.display = 'none'
    }
    const animatefunc = () => {
        checktime === count ? clearfunc() : checktime++
        currentref.animate([
        {transform:'rotate(360deg)'}
    ],{delay:i * patialtime * count, duration:1000,easing:'ease-out'})
    }
    animatefunc()
    const interval = setInterval(animatefunc,1000+(arraylength-1)* patialtime * count)
    
}
export {loading,rotateAnimate}