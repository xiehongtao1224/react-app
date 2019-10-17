import React from 'react';

class RefDemo extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef1 = null;
        this.inputRef2 = React.createRef();
        this.inputRef3 = null;
        this.buttonRef = React.createRef();
        this.componentRef = React.createRef();
    }

    buttonRefClick() {
        console.log(this.refs.refDiv);
        console.log(this.buttonRef);
        console.log(this.componentRef);
        console.log(this.inputRef1);
        console.log(this.inputRef2);
        console.log(this.inputRef3);
    }

    render() {
        return(
            <div className="ref-demo">
                {/* 直接通过字符串获取 */}
                <div ref="refDiv">refs</div>
                {/* 通过自定义函数获取 */}
                <input ref={ (input) => {  this.inputRef1 = input } }></input>
                {/* 通过createRef函数获取 */}
                <input ref={ this.inputRef2 }></input>
                {/* 通过函数形式获取子节点ref */}
                <InputRef inputRef={ el => {  this.inputRef3 = el } } ></InputRef>
                {/* 通过forwardRef获取字节点ref,一般与高阶组件配合 */}
                <ButtonRef
                    ref={ this.buttonRef } 
                    buttonRefClick={ () => this.buttonRefClick() } 
                >
                    ButtonRef
                </ButtonRef>
                {/* 通过ref获取整个组件 */}
                <ComponentRef 
                    ref={ this.componentRef }  
                >
                    componentRef
                </ComponentRef>
            </div>
        )
    }
}

function InputRef(props) {
    return(
        <input ref={ props.inputRef }></input>
    );
}

const ButtonRef = React.forwardRef((props, ref) => (
    <button ref={ref} className="button-ref" onClick={ props.buttonRefClick }>
        {props.children}
    </button>
));


class ComponentRef extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'componentRef'
        }
    }
    render() {
        return(
            <div className="component-ref">
                { this.props.children }
            </div>
        );
    }
}

export default RefDemo;
  