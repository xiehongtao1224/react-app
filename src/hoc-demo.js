import React from 'react';

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

function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
  }

class CommentList extends React.Component {

    render() {
        return(
            <div>{ this.props.data }</div>
        )
    }
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

const CommentListSubscription = SubscriptionComponents(
    CommentList,
    (data, value) => data[value]
)
const BlogPostSubscription = SubscriptionComponents(
    BlogPost,
    (data, value) => data[value]
)

class HocDemo extends React.Component{
    render() {
        return(
            <React.Fragment>
                <CommentListSubscription
                    value="commentList"
                ></CommentListSubscription>
                <BlogPostSubscription
                    value="blogPost"
                    pass="pass"
                    through="through"
                ></BlogPostSubscription>
            </React.Fragment>
        )
    }
}

export default HocDemo;