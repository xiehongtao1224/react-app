import React from 'react';

const MyContext = React.createContext('myContext');
MyContext.displayName = 'MyContext';

class ContextDemo extends React.Component {
    render() {
        return (
            // <MyContext.Provider value="MyContext.Provider">
            //     <DemoBox />
            // </MyContext.Provider>
            <DemoBox />
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
            <div className="demo-box">
                {/* { this.context } */}
            </div>
        )
    }
}
// DemoBox.contextType = MyContext;

// function DemoItem() {
//     return(
//         <div className="demo-item">{ this.context }</div>
//     )
// }

export default ContextDemo;
