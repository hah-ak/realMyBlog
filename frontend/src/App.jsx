import { useLayoutEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/base/footer/footer';
import Header from './components/base/header/header';
import Sidebar from './components/base/navbar/sidebar';
import Home from './components/home/home';
import Choicepostindex from './components/post/choicepost/choicepostindex';
import Detailpost from './components/post/detailpost/detailpost';
import Post from './components/post/mypost/post';

// window창 크기의 변화에 따라 높이와 변화를 인식하는 state의 역할을 해준다.
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight,window.innerWidth])
  useLayoutEffect(()=> {
      const updateSize = () => {
          setSize([window.innerHeight,window.innerWidth])
      }
      window.addEventListener('resize',updateSize);
      updateSize();
      return () => window.removeEventListener('resize',updateSize)
  },[])
  return size
}

function App() {
  const [height,width] = useWindowSize();
  return (
    <>
      <HashRouter>
        <div
          className={`${styles.container}`}
        >
          <Sidebar />
          <div className={styles.wrapper}>
            <Header />
            <Route
              path='/'
              exact={true}
              render={()=>
                <Home
                  width={width}
                  height={height}
                />
              }
            />
            {/* exact는 중복출력을 방지해준다. */}
            <Route path='/post' exact={true} component={Post}/>
            <Route path='/post/:postIndex' exact={true} component={Choicepostindex} />
            <Route path='/post/:postIndex/:postid' exact={true} component={Detailpost} />
            <Footer />
          </div>
          
        </div>
        
      </HashRouter>
    </>
  );
}

export default App;

 // const container = useRef()
  // const [Prevent, setPrevent] = useState(false)
  // const [child,setChild] = useState({num:1})
  // const [ScrollPosition, setScrollPosition] = useState([0])
    // useEffect(()=>{
  //   const numchild = document.querySelector('.appcontainer').childElementCount
  //   const updatePosition = () =>{
  //       const newarray = [0]
  //       for (let i = 1; i <= numchild; i++) {
  //           newarray.push(document.querySelector(`.appcontainer :nth-child(${i})`).scrollTop)
  //       }
  //       console.log(newarray)
  //       newarray.push(document.body.scrollHeight)
  //       return newarray
  //   }
  //   const getdata = updatePosition();
  //   setScrollPosition(getdata)
  //   setTotalChild(numchild)
  // },[height,width])
  // const ScrollActive = (e) => {
  //   //footer는 제외할것이다 휠 이벤트를 모두 읽으면 함수 호출이 많아져 속도가 느려지므로 시간차를 준다.(콜스택에 계속 쌓이며 부하가 생긴다?)
  //   e.preventDefault()
  //   if (Prevent===false) {
  //       setPrevent(true)
  //       setTimeout(() => {
  //         //최상단과 최끝단을 넣어주므로 의도적으로 index를 수작업으로 바꿔줘야했음.
  //           const nowScrollPosition = document.scrollTop
  //           for (let index = 2; index < TotalChild+2; index++) {
  //               if (nowScrollPosition >=ScrollPosition[index-1]-200 && nowScrollPosition < ScrollPosition[index]-200 &&child.num!==index){
  //                 setChild({num:index-1});
  //                 break;
  //               }
  //           }
  //           setPrevent(false)
  //       }, 500);
  //   } 
  // }
