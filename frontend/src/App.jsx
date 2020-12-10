import { HashRouter, Route } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/base/footer/footer';
import Header from './components/base/header/header';
import Sidebar from './components/base/navbar/sidebar';
import Home from './components/home/home';
import Choicepost from './components/post/choicepost/choicepost';
import Post from './components/post/mypost/post';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Sidebar />
        <div className={styles.container}>
          <Route path='/' exact={true} component={Home}/>
          {/* exact는 중복출력을 방지해준다. */}
          <Route path='/post' exact={true} component={Post}/>
          <Route path='/post/:postIndex' exact={true} component={Choicepost} />
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
