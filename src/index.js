import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { Game } from './game';
import { Temperature } from './temperature';
import ErrorBoundary from './error-boundary';
import RefDemo from './ref-demo';
import HocDemo from './hoc-demo';
import PortalDemo from './portal-demo';
import LifeCycle from './life-cycle';
import { TodoList } from './todo-list';

import RouterApp from './router'
import HookDemo from './hook-demo'

import BookList from './redux-actions'

import LoginApp from './login'

const SearchList = lazy(() => import('./search-list'));
const ContextDemo = lazy(() => import('./context-demo'));

ReactDOM.render(
    <div className="main-content">
        <div className="content-col">
            <ErrorBoundary>
                <h1>#字棋</h1>
                <Game />
                <h1>温度计算器</h1>
                <Temperature />
                <h1>搜索列表</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchList />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <h1>ContextDemo</h1>
                    <ContextDemo />
                </Suspense>
            </ErrorBoundary>
        </div>
        <div className="content-col">
            <h1>RefDemo</h1>
            <RefDemo></RefDemo>
            {/* React.Fragment能加key, <>不能加key */}
            <React.Fragment>
                <h1>React.Fragment</h1>
                <>
                    渲染一个空标签
                </>
            </React.Fragment>
            <h1>高阶组件</h1>
            <HocDemo></HocDemo>
            <h1>LifeCycle</h1>
            <LifeCycle></LifeCycle>
            <h1>TodoList</h1>
            <TodoList></TodoList>
            <h1>HookDemo</h1>
            <HookDemo></HookDemo>
        </div>
        <div className="content-col">
            <h1>RouterApp</h1>
            <RouterApp></RouterApp>
            <h1>LoginApp</h1>
            <LoginApp></LoginApp>
            <h1>ReduxActions</h1>
            <BookList></BookList>
        </div>
        <PortalDemo></PortalDemo>
    </div>,
    document.getElementById('root')
);
