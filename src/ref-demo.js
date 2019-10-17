import React from 'react';

const buttonRef = React.createRef();

const RefButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="ref-button" onClick={ props.buttonRefClick }>
        {props.children}
    </button>
));

class RefDemo extends React.Component {
    constructor(props) {
        super(props)
        this.input1Ref = null;
        this.input2Ref = React.createRef();
    }

    buttonRefClick() {
        console.log(buttonRef);
        console.log(this.input1Ref);
        console.log(this.input2Ref);
    }

    render() {
        return(
            <div className="ref-demo">
                <input ref={ (input) => {  this.input1Ref = input } }></input>
                <input ref={ this.input2Ref }></input>
                <RefButton 
                    ref={ buttonRef } 
                    buttonRefClick={ () => this.buttonRefClick() } 
                >
                    RefButton
                </RefButton>
            </div>
        )
    }
}

export default RefDemo;
  