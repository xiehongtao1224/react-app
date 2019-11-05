import React, { useState, useEffect } from 'react'

function HookDemo() {
    const [count, setCount] = useState(0);

    let isOnline = useFriendStatus(1);
    console.log(isOnline)

    // 组件挂载会调用useEffect, 卸载会调用useEffect返回的函数
    // 组件更新的时候会先调用useEffect返回的函数, 再调用useEffect
    // 传入第二个参数为一个数组, 表示当数组内的值都不变的时候不调用useEffect以及useEffect返回的函数
    // 传入一个空数组[], 表示仅在组件挂载的时候调用useEffect, 卸载的时候调用useEffect返回的函数
    useEffect(() => {
        console.log(`You clicked ${count} times`);
        return () => {
            console.log('这个函数会在组件注销的时候被调用')
        }
    }, [count]);

    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
        </div>
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
        return () => {
            console.log(111111)
        }
    });

    return isOnline;
}

export default HookDemo;
