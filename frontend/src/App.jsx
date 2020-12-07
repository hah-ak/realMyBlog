import { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/base/footer/footer';
import Header from './components/base/header/header';
import Sidebar from './components/base/navbar/sidebar';
import Home from './components/home/home';
import Post from './components/post/post';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Sidebar />
        <div className={styles.container}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/post' component={Post}/>
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
