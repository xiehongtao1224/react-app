import React from 'react';

const DataSource = {
    commentList: 'CommentList',
    blogPost: 'BlogPost'
}

function SubscriptionComponents(WrappedComponent, selectData) {
    return class extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                data: selectData(DataSource, props.value)
            }
        }

        render() {
            return(
                <WrappedComponent data={this.state.data} {...this.props} ></WrappedComponent>
            );
        }
    }
}

class CommentList extends React.Component {
    render() {
        return(
            <div>{ this.props.data }</div>
        )
    }
}

class BlogPost extends React.Component {
    render() {
        return(
            <React.Fragment>
                { Array(3).fill(0).map(() => {
                    return <div>{ this.props.data }</div>
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

export default class extends React.Component{
    render() {
        return(
            <React.Fragment>
                <CommentListSubscription
                    data="commentList"
                ></CommentListSubscription>
                <BlogPostSubscription
                    data="blogPost"
                ></BlogPostSubscription>
            </React.Fragment>
        )
    }
}