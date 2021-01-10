import styles from './style.module.css';
import menubar from '../../../img/menubar.ico';
import close from '../../../img/close.ico';
const sidebar_toggle = () => {
    const sidebar = document.querySelector('.sidebar')
    const sidebar_icon = document.querySelector(`.${styles.sidebar_icon}`)
    if (sidebar.classList.contains(styles.active)) {
        sidebar_icon.setAttribute('src',menubar )
    } else {
        sidebar_icon.setAttribute('src', close)
    }
    sidebar.classList.toggle(styles.active)
};

const add_Event = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.addEventListener('mouseover',(e)=>active_hover(e))
    sidebar.addEventListener('moouseout',(e)=>inactive_hover(e))
    const ul = document.querySelector('ul')
    ul.addEventListener('mouseover',(e)=>active_hover(e))
    ul.addEventListener('moouseout',(e)=>inactive_hover(e))
}
const active_hover = (e) => {
    if (window.innerWidth > 768) {
        const ct= e.currentTarget
        if (!ct.classList.contains(styles.active)) {
            ct.classList.add(styles.active)
        }
    }

}
const inactive_hover = (e) => {
    if (window.innerWidth > 768) {
        const ct = e.currentTarget
        if (ct.classList.contains(styles.active)) {
            ct.classList.remove(styles.active)
        }
    }
}
const upClick = () => {
    const parent = document.querySelector(`.${styles.items}`)
    const fchild = parent.firstElementChild
    const itembox = fchild.firstElementChild
    itembox.animate([{
                    transform:'translateX(-300px)',
                    height:'0px',
                    padding:'0px'}],{duration:501})
    // itembox.style.setProperty('animation','transform:translateX(-300px)')
    setTimeout(() => {
        fchild.remove()
        parent.appendChild(fchild)
        itembox.animate([{
            transform:'translateX(-300px)',
            height:'0px',
        }],{duration:501,direction:'reverse'})
    }, 500);

}
const downClick = () => {
    const parent = document.querySelector(`.${styles.items}`)
    const lchild = parent.lastElementChild
    const itembox = lchild.firstElementChild
    itembox.animate([{
                    transform:'translateX(-300px)',
                    height:'0px',
                    padding:'0px'}],{duration:501})
    setTimeout(() => {
        lchild.remove()
        parent.insertAdjacentElement('afterbegin',lchild) // 앞 혹은 뒤에 삽입할때 사용.
        itembox.animate([{
            transform:'translateX(-300px)',
            height:'0px',
            padding:'0px'
        }],{duration:501,direction:'reverse'})
    }, 500);

    
}
export {sidebar_toggle, active_hover, inactive_hover,add_Event, upClick,downClick}
