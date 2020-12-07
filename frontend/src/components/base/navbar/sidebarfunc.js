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

export {sidebar_toggle}