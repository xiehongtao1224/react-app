import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    // 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 
    // 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true }
    }

    // componentDidCatch(error, errorInfo) {
    //     console.log(error);
    //     console.log(errorInfo);
    //     this.setState({
    //         hasError: true
    //     })
    // }

    render() {
        if(this.state.hasError) {
            return(
                <h1>Something went wrong.</h1>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
