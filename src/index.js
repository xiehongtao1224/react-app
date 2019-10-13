import React from 'react';
import ReactDOM from 'react-dom';

import { Game } from './game';
import { Temperature } from './temperature';
import { SearchList } from './search-list';

// ========================================
  
ReactDOM.render(
    <div>
        <h1>#字棋</h1>
        <Game />
        <h1>温度计算器</h1>
        <Temperature />
        <h1>搜索列表</h1>
        <SearchList />
    </div>,
    document.getElementById('root')
);
