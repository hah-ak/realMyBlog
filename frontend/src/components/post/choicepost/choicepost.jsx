import React, { useEffect, useState } from 'react';

const Choicepost = (props) => {
    const [choice_posts, setChoice_posts] = useState([])
    // async 함수는 promise 객체를 리턴하기 때문에 useEffect 함수 자체를 async 함수로 사용할 수는 없다는 것이다.
    // 왜냐하면 useEffect 함수는 위에서 말했듯이 반드시 함수만을 리턴해야하기 때문이다.

    // props 안에 들어있는 value 값이 바뀔 때에만 특정 작업을 수행하도록 하였습니다. 만약 이러한 작업을 useEffect 에서 해야한다면 어떻게 해야 할까요?
    // 바로, useEffect 의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주시면 된답니다.

    // 백단의 정보가 바뀐다면 async를 써서 비동기적으로 한곳을 바꾸는게 맞는것인가?
    // useeffect가 컴포넌트의 변화라면, async를 통해 웹페이지의 일부분을 바꿀 수 있다.
    // 컴포넌트의 일부가 변화한 거라면 useeffect를 통해 받아내서 컴포넌트전체를 rerendering을 한다.
    // 비동기 처리는 특정상황에 서버와의 통신을 통해 그 값을 받아올때 사용하는 경우가 많다.
    // useeffect는 컴포넌트의 변화 시점을 말하지만, async는 값의 변화에 따라 움직인다.

    useEffect(()=>{
        
    })
    return (
        <>
            <div>
                
            </div>
        </>
    )
};

export default Choicepost;