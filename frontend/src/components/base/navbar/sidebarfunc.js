import close from './img/close.ico';
import menubar from './img/menubar.ico';
import styles from './style.module.css';

const sidebar_toggle = () => {
    const sidebar = document.querySelector('.sidebar')
    const sidebar_icon = document.querySelector('.sidebar_icon')
    if (sidebar.classList.contains(styles.active)) {
        sidebar_icon.setAttribute('src',menubar )
    } else {
        sidebar_icon.setAttribute('src', close)
    }
    sidebar.classList.toggle(styles.active)
};
const sidebar_close = (e) => {
    sidebar_toggle()
}
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
export {sidebar_toggle, active_hover, inactive_hover,add_Event, sidebar_close}