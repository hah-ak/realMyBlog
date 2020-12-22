const loading = (ele) => {
    ele.animate([
        {background:'blue'}
    ],{duration:2001})
    ele.firstElementChild.animate(
        [{transform:'rotate(360deg)'}]
    ,{duration:1001,iterations:'Infinity'})
    setTimeout(() => {
        ele.style.background = 'blue'
    }, 2000);
    ele.animate([
        {opacity:0}
    ],{delay:2000,duration:2001})
    setTimeout(() => {
        ele.style.display = 'none';
    }, 4000);
}

export {loading}