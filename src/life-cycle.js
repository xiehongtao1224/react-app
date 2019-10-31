import React from 'react';

class TestUpdate extends React.Component {

    
    render() {
        return(
            <div>{ this.props.value }</div>
        );
    }

    componentDidMount() {
        console.log(this.props.children)
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.id !== prevProps.id) {
            console.log('没有渲染的props也会触发update');
        }
    }

    componentWillUnmount() {

    }
}

class LifeCycle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            value: 'before update'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((state, props) => {
                return{
                    id: 2,
                    value: 'after update'
                }
            })
        }, 1000);
    }

    render() {
        return(
            <TestUpdate
                id={this.state.id}
                value={this.state.value}
            >
                <div>children1</div>
                <div>children2</div>
            </TestUpdate>
        )
    }
}
export default LifeCycle;
