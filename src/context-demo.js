import React from 'react';

const MyContext = React.createContext('myContext');
MyContext.displayName = 'MyContext';

const ButtonContext = React.createContext('ButtonContext');
ButtonContext.displayName = 'ButtonContext';

class ContextDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contextText: 'ContextDemo.MyContext.Provider'
        }
    }

    changeContextText(data) {
        this.setState({
            contextText: data
        })
    }

    render() {
        return (
            <ButtonContext.Provider value="ButtonContext.Provider">
                {/* value等于一个常量，父元素更新会导致子组件更新
                    解决办法：将value绑定到state里面 */}
                <MyContext.Provider value={ this.state.contextText }>
                    <DemoBox />
                    <DemoButton change={ this.changeContextText.bind(this) } />
                </MyContext.Provider>
            </ButtonContext.Provider>
        )
    }
}

class DemoBox extends React.Component {
    static contextType = MyContext;

    componentDidMount() {
        let value = this.context;
        console.log(value);
    }

    render() {
        return(
            <MyContext.Provider value="DemoBox.MyContext.Provider">
                <div className="demo-box">
                    { this.context }
                    <DemoItem />
                </div>
            </MyContext.Provider>
        )
    }
}

class DemoItem extends React.Component {

    render() {
        return(
            <div className="demo-item">{ this.context }</div>
        )
    }
}
DemoItem.contextType = MyContext;

function DemoButton(props) {
    return(
        <ButtonContext.Consumer>
            {user => (
                <MyContext.Consumer>
                    { value => (
                        <button onClick={ () => { props.change('from demo button') } }>{ user }</button>
                    )}
                </MyContext.Consumer>
            )}
        </ButtonContext.Consumer>
    )
}

export default ContextDemo;
