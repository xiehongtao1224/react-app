import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { Game } from './game';
import { Temperature } from './temperature';
import ErrorBoundary from './error-boundary';
import RefDemo from './ref-demo';
import HocDemo from './hoc-demo';

const SearchList = lazy(() => import('./search-list'));
const ContextDemo = lazy(() => import('./context-demo'));


// ========================================

ReactDOM.render(
    <div className="main-content">
        <div className="content-left">
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
        </div>,
        <div className="content-right">
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
        </div>
    </div>,
    document.getElementById('root')
);
