import React from 'react';

const MyContext = React.createContext('myContext');
MyContext.displayName = 'MyContext';

class ContextDemo extends React.Component {
    render() {
        return (
            <MyContext.Provider value="ContextDemo.MyContext.Provider">
                <DemoBox />
            </MyContext.Provider>
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

export default ContextDemo;
