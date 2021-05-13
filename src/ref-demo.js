import React from 'react';

class RefDemo extends React.Component {
    constructor(props) {
        super(props)
        this.divRef1 = null;
        this.divRef2 = React.createRef();
        this.divRef3 = null;
        this.buttonRef = React.createRef();
        this.componentRef = React.createRef();
    }

    buttonRefClick() {
        console.log(this.refs.refDiv);
        console.log(this.divRef1);
        console.log(this.divRef2);
        console.log(this.divRef3);
        console.log(this.buttonRef);
        console.log(this.componentRef);
    }

    render() {
        return(
            <div className="ref-demo">
                {/* 直接通过字符串获取, 已过时, 不再使用 */}
                <div ref="refDiv">refs</div>
                {/* 通过自定义函数获取 */}
                <div ref={ (div) => {  this.divRef1 = div } }>通过自定义函数获取ref</div>
                {/* 通过createRef函数获取 */}
                <div ref={ this.divRef2 }>通过createRef函数获取ref</div>
                {/* 通过函数形式获取子节点ref */}
                <DivRef divRef={ el => {  this.divRef3 = el } } value="通过函数形式获取子节点ref" ></DivRef>
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

function DivRef(props) {
    return(
        <div ref={ props.divRef }>{ props.value }</div>
    );
}

const ButtonRef = React.forwardRef(
    function forwardRefName (props, ref) {
        return (
            <button ref={ref} className="button-ref" onClick={ props.buttonRefClick }>
                {props.children}
            </button>
        );
    }
);


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
  