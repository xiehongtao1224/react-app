import React, { useState, useEffect, useContext, useRef } from 'react'

const MyContext = React.createContext('myContext');

function HookDemo() {
    const [count, setCount] = useState(0);

    let isOnline = useFriendStatus(1);

    let buttonRef = useRef();

    // 组件挂载会调用useEffect, 卸载会调用useEffect返回的函数
    // 组件更新的时候会先调用useEffect返回的函数, 再调用useEffect
    // 传入第二个参数为一个数组, 表示当数组内的值都不变的时候不调用useEffect以及useEffect返回的函数
    // 传入一个空数组[], 表示仅在组件挂载的时候调用useEffect, 卸载的时候调用useEffect返回的函数
    useEffect(() => {
        console.log(`You clicked ${count} times`);
        console.log(buttonRef);
        return () => {
            console.log('这个函数会在组件注销的时候被调用')
        }
    }, [count]);

    return (
        <MyContext.Provider value="Hook-useContext">
            <p>isOnline: {isOnline.toString()}</p>
            <p>你点击了{count}次</p>
            <button ref={buttonRef} onClick={() => setCount(count+1)}>
                Click me
            </button>
            <ContextBox />
        </MyContext.Provider>
    )
}

function ContextBox() {
    let MyContextValue = useContext(MyContext);
    return (
        <div>{MyContextValue}</div>
    )
}


const friendList = [
    { id: 1, name: 'Phoebe', isOnline: false },
    { id: 2, name: 'Rachel', isOnline: true },
    { id: 3, name: 'Ross', isOnline: false },
];

function useFriendStatus(id) {

    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        friendList.some(item => {
            if(item.id === id) {
                setIsOnline(item.isOnline);
                return true;
            }
            return false;
        })
        console.log('install useFriendStatus')
        return () => {
            console.log('uninstall useFriendStatus')
        }
    });

    return isOnline;
}

export default HookDemo;
