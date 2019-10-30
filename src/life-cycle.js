import React from 'react';

class TestUpdate extends React.Component {

    componentDidMount() {
        console.log(this.props.children)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.id !== prevProps.id) {
            console.log('props 发生改变');
        }
    }

    render() {
        return(
            <div>{ this.props.updateObj.value }</div>
        );
    }
}

class LifeCycle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            updateObj: {
                value: 'before update'
            }
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((state, props) => {
                return{
                    id: 2
                }
            })
        }, 1000);
    }

    render() {
        return(
            <TestUpdate
                id={this.state.id}
                updateObj={this.state.updateObj}
            >
                <div>children1</div>
                <div>children2</div>
            </TestUpdate>
        )
    }
}
export default LifeCycle;
