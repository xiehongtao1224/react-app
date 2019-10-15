import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import { Game } from './game';
import { Temperature } from './temperature';
const SearchList = lazy(() => import('./search-list'));
const ContextDemo = lazy(() => import('./context-demo'));

// ========================================
  
ReactDOM.render(
    <div>
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
    </div>,
    document.getElementById('root')
);
