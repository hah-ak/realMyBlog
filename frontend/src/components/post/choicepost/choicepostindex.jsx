import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Choiceposts from './choiceposts';
const Choicepostindex = (props) => {
    // async 함수는 promise 객체를 리턴하기 때문에 useEffect 함수 자체를 async 함수로 사용할 수는 없다는 것이다.
    // 왜냐하면 useEffect 함수는 위에서 말했듯이 반드시 함수만을 리턴해야하기 때문이다.

    // props 안에 들어있는 value 값이 바뀔 때에만 특정 작업을 수행하도록 하였습니다. 만약 이러한 작업을 useEffect 에서 해야한다면 어떻게 해야 할까요?
    // 바로, useEffect 의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주시면 된답니다.

    // 백단의 정보가 바뀐다면 async를 써서 비동기적으로 한곳을 바꾸는게 맞는것인가?
    // useeffect가 컴포넌트의 변화라면, async는 비동기적 통신이다.
    // 컴포넌트의 일부가 변화한 거라면 useeffect를 통해 받아내서 컴포넌트전체를 rerendering을 한다.
    // 비동기 처리는 특정상황에 서버와의 통신을 통해 그 값을 받아올때 사용하는 경우가 많다.
    // async/await는 사용자 입장에서 보기 편하게 만들기위해 존재하는 것이고 문법적으로 다를뿐
    // 비동기적 통신과 비동기적으로 랜더링을 해주는 차이이다. 즉 async가 일어나야 useeffect가 생김.
    // async/await를 사용함으로써 프로미스(.then.catch)없이 기본 문법들, 동기된 코드들 처럼 사용할수있게됨
    // 화살표 함수는 자기 자신의 상위 컨텍스트(함수,클래스)와 this가 바인딩되어있다.
    // 화살표 함수는 ()이거나 없으면 리턴문, {}일때는 리턴문 따로 작성해줘야함
    // 일반함수의 this는 자신이 종속된 객체, arrowfunction은 자신이 종속된 인스턴스를 뜻함
    // 일반하수의 this는 그 this가 실행되는 전체영역(최초클래스,최초 둘러싼 함수 등)을 뜻하고,
    // arrow function은 this가 들어가 있는 선언문의 영역을 뜻함.
    // 클래스형 뷰에서 this를 바인딩하는 이유는 현재 클래스를 지정해주기 위해 this를 바인딩함.
    // 레퍼런스로 함수를 전달할때는 ()를 쓰지 않는다. ()를 쓰면 호출이된다.
    // 매개변수는 arrow function으로 전달해주면 바인드 없이 전달해줄 수 있다.(따로 state로 저장해서 props로 보내주던가)
    // 모든 React 컴포넌트는 props와 관련한 동작을 할 때 순수 함수처럼 동작해야한다.
    // 블록스코프,iife
    // const requestOptions = {
    //     mehthod = "GET"
    // }
    const [choice_posts, setChoice_posts] = useState([])
    const { postIndex } = useParams()

    useEffect(()=>{
        const fetchdata= async () => {
            try {
                const getdata = await Axios.get(`http://localhost:8000/post/${postIndex}`);
                const result = await getdata.data.posts
                setChoice_posts(result)
            } catch (error) {
                alert(error)
            }
        }
        fetchdata();
    },[postIndex])
    // const location = useLocation()
    // const choice_posts= location.state.choice_posts
    
    return (
        <>
            {choice_posts.map((post, index) => {
                return (
                    <Choiceposts
                        key={post.id}
                        postid={post.id}
                        title={post.title}
                        content={post.content}
                        create={post.create}
                        index={index}
                    />
                )
            })}
            
        </>
    )
};

export default Choicepostindex;