import React from 'react';
import './game.css'

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square" onClick={ this.props.onClick }>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props) {
    return (
        <button
            className={ props.winnerLine ? 'winner-line square' : 'square' }
            onClick={ (e) => { props.onClick(); console.log(e); e.preventDefault(); e.stopPropagation(); } }
        >
            {props.value}
        </button>
    );
}
  
class Board extends React.Component {

    renderSquare(val, i) {
        let winnerLine = this.props.winnerLine.includes(i);
        return (
            <Square
                key={i}
                winnerLine={ winnerLine }
                value={val}
                onClick={ () => { this.props.onClick(i) } }
            />
        );
    }
  
    render() {

        let square = [];
        let squareRow = [];

        this.props.squares.forEach((item, i) => {
            squareRow.push(this.renderSquare(item, i));
            if((i + 1) % 3 === 0) {
                square.push(<div className="board-row" key={(i + 1) / 3}>{ squareRow }</div>);
                squareRow = [];
            }
        })

        return (
            <div>
                { square }
            </div>
        );
    }
}
  
class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            current: {
                squares: Array(9).fill(null)
            },
            isX: true,
            historyOrder: 'asc'
        }
    }

    componentDidMount() {
        console.log('Game componentDidMount')
    }

    componentWillUnmount() {
        console.log('Game componentWillUnmount')
    }

    handleClick(i) {
        const current = JSON.parse(JSON.stringify(this.state.current));
        const squares = current.squares;
        if(squares[i] || calWinner(squares)) return;

        squares[i] = this.state.isX ? 'X' : 'O';
        current.position = i;

        this.state.history.push(current);
        this.setState({
            current,
            isX: !this.state.isX
        })
    }

    jumpTo(i) {
        let history = this.state.history.slice(0, i+1);
        let current = JSON.parse(JSON.stringify(history[i]));
        this.setState({
            history,
            current,
            isX: i % 2 === 0
        })
    }

    changeOrder(order) {
        if(order === this.historyOrder) return;
        this.setState({
            historyOrder: order
        })
    }

    render() {
        const current = JSON.parse(JSON.stringify(this.state.current));
        const winnerMsg = calWinner(current.squares);

        let steps = this.state.history.map((step, i) => {
            const describle = i ? 
                `Go to step ${i}` :
                `Go to game start`;
            const position = i ? `(${Math.ceil((step.position + 1) / 3)}, ${step.position % 3 + 1})` : '';
            
            return (
                <li key={i}>
                    <button
                        className={ i === this.state.history.length - 1 ? 'current-step' : ''}
                        onClick={ () => this.jumpTo(i) }
                    >
                        { describle }
                    </button>
                    <span>{ position }</span>
                </li>
            );
        })

        if(this.state.historyOrder === 'desc') {
            steps.reverse();
        }

        let status = '';
        if(winnerMsg) {
            status = 'Winner is ' + winnerMsg.winner;
        }else {
            let isDraw = current.squares.every(item => item);
            if(isDraw) {
                status = 'It ends in a draw'
            }else {
                status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
            }
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winnerLine={ winnerMsg ? winnerMsg.line : [] }
                        squares={ current.squares }
                        onClick = { (i) => this.handleClick(i) }
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <div>
                        <button onClick = { () => this.changeOrder('asc') }>升序</button>
                        <button onClick = { () => this.changeOrder('desc') }>降序</button>
                    </div>
                    <ol reversed={ this.state.historyOrder === 'desc' ? true : false }>{ steps }</ol>
                </div>
            </div>
        );
    }
}

function calWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const[a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                line: lines[i]
            };
        }
    }
    return false;
}

export { Game };
