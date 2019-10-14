import React from 'react';
import './search-list.css';

class SearchList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            searchList: [],
            searchText: '',
            isOnlyProduct: false,
            debounce: new Debounce(800)
        }
    }

    componentDidMount() {
        this.setState({
            list: mockData,
            searchList: mockData
        })
    }

    onSearch(e) {
        this.setState({
            searchText: e.target.value
        })
        this.state.debounce(() => {
            let regexp = new RegExp(this.state.searchText, 'i');
            let searchList = this.state.list.filter(item => {
                console.log(regexp);
                console.log(item.searchText);
                console.log(regexp.test(item.searchText))
                return regexp.test(item.name);
            })
            this.setState({
                timer: null,
                searchList
            })
        })
    }

    onCheck(e) {
        this.setState({
            isOnlyProduct: e.target.checked
        })
    }

    render() {
        return (
            <div className="search-list">
                <SearchBar 
                    searchText={ this.state.searchText }
                    isOnlyProduct={ this.state.isOnlyProduct }
                    onSearch={ (e) => { this.onSearch(e) } } 
                    onCheck={ (e) => { this.onCheck(e) } } 
                />
                <ProductList
                    list={ this.state.searchList }
                    searchText={ this.state.searchText }
                    isOnlyProduct={ this.state.isOnlyProduct } 
                />
            </div>
        );
    }
}

function Debounce(delay) {
    var timer = null;
    return function(fn) {
        if(timer !== null) clearTimeout(timer);
        timer = setTimeout(() => {
            if(typeof fn === 'function') fn();
        }, delay);
    }
}

class SearchBar extends React.Component {
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    type="text" 
                    value={ this.props.searchText }
                    onChange={ this.props.onSearch } 
                ></input>
                <div className="search-bar-check">
                    <input 
                        type="checkbox"
                        value={ this.props.isOnlyProduct } 
                        onChange={ this.props.onCheck } 
                    ></input>
                    <span>Only show products in list</span>
                </div>
            </div>
        );
    }
}

function ProductList(props) {
    let list = props.list;
    let listObj = {};
    list.forEach(item => {
        if(listObj[item.category]) {
            listObj[item.category].push(item);
        }else {
            listObj[item.category] = [item];
        }
    })
    let productItem = Object.keys(listObj).map((item, i) => {
        return (
            <ProductItem
                key={i}
                header={item}
                rowList={listObj[item]}
                isOnlyProduct={ props.isOnlyProduct }
            />
        );
    })
    return (
        <div className="product-list">
            <div className="product-list-header">
                <span className="list-column">Name</span>
                <span className={ props.isOnlyProduct ? 'list-column hide' : 'list-column' }>Price</span>
            </div>
            { productItem }
        </div>
    );
}

function ProductItem(props) {
    let productItemContent = props.rowList.map((item, i) => {
        return (
            <div className="product-item-row" key={i}>
                <span className={ item.stocked ? 'list-column' : 'list-column no-stocked' }>{ item.name }</span>
                <span className={ props.isOnlyProduct ? 'list-column hide' : 'list-column' }>{ item.price }</span>
            </div>
        );
    })
    return (
        <div className="product-item">
            <div className="product-item-header">{ props.header }</div>
            { productItemContent }
        </div>
    );
}

export { SearchList };

let mockData = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];