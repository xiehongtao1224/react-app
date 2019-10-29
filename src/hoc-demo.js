import React from 'react';
import PropTypes from 'prop-types';

const DataSource = {
    commentList: 'CommentList',
    blogPost: 'BlogPost'
}

function SubscriptionComponents(WrappedComponent, selectData) {
    class SubscriptionComponents extends React.Component{

        constructor(props) {
            super(props)
            this.state = {
                data: selectData(DataSource, props.value)
            }
        }

        componentDidMount() {
            console.log(this.props);
        }

        render() {
            const { value, ...passThroughProps } = this.props;
            return(
                <WrappedComponent 
                    data={this.state.data}
                    { ...passThroughProps }
                ></WrappedComponent>
            );
        }
    }
    SubscriptionComponents.displayName = `SubscriptionComponents(${getDisplayName(WrappedComponent)})`
    return SubscriptionComponents;
}

class CommentList extends React.Component {

    render() {
        return(
            <div>{ this.props.data }</div>
        )
    }
}

// 类型检查
CommentList.propTypes = {
    obj: PropTypes.shape({
        a: PropTypes.number,
        b: PropTypes.string
    }),
    arr: PropTypes.arrayOf(function(arr, key, component, location, propFullName) {
        console.log(arr[key]);
    })
}

class BlogPost extends React.Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            list: Array(3).fill(nextProps.data)
        };
    }

    constructor(props) {
        super(props)
        this.state = {
            value: 'getDerivedStateFromProps',
            list: []
        }
    }

    render() {
        return(
            <React.Fragment>
                <span>{ this.state.value }</span>
                { this.state.list.map((item, i) => {
                    return <div key={i}>{ item }</div>
                }) }
            </React.Fragment>
        )
    }
}

function ForwardRefComponents(WrappedComponent) {
    class ForwardRefComponent extends React.Component{
        componentDidMount() {
            console.log(this.props);
        }

        render() {
            const { forwardedRef, ...rest } = this.props;
            return(
                <WrappedComponent ref={forwardedRef} {...rest} ></WrappedComponent>
            );
        }
    }

    ForwardRefComponent.displayName = `ForwardRefComponents(${getDisplayName(WrappedComponent)})`;
    return React.forwardRef((props, ref) => {
        return <ForwardRefComponent forwardedRef={ref} {...props} ></ForwardRefComponent>
    })
}

class HocRef extends React.Component{
    render() {
        return(
            <div>高阶组件与forwarded结合</div>
        );
    }
}

function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
}

const CommentListSubscription = SubscriptionComponents(
    CommentList,
    (data, value) => data[value]
)
const BlogPostSubscription = SubscriptionComponents(
    BlogPost,
    (data, value) => data[value]
)

const ref = React.createRef();
const HocRefComponent = ForwardRefComponents(HocRef);

class HocDemo extends React.Component{
    render() {
        return(
            <React.Fragment>
                <CommentListSubscription
                    value="commentList"
                    obj={{a:1, b:'1', c:1}}
                    arr={[1,2,3]}
                ></CommentListSubscription>
                <BlogPostSubscription
                    value="blogPost"
                    pass="pass"
                    through="through"
                ></BlogPostSubscription>
                <HocRefComponent 
                    value="HocRefComponent"
                    ref={ref}
                ></HocRefComponent>
            </React.Fragment>
        )
    }
}

export default HocDemo;
