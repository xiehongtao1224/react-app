import React from 'react';
import './search-list.css';

class SearchList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="search-list">
                <SearchBar />
                <ProductList list={ mockData } />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    
    render() {
        return (
            <div className="search-bar">
                <input type="text"></input>
                <div className="search-bar-check">
                    <input type="checkbox"></input>
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
            <ProductItem header={item} rowList={listObj[item]} key={i} />
        );
    })
    return (
        <div className="product-list">
            <div className="product-list-header">
                <span className="list-column">Name</span>
                <span className="list-column">Price</span>
            </div>
            { productItem }
        </div>
    );
}

function ProductItem(props) {
    let productItemContent = props.rowList.map((item, i) => {
        return (
            <div className="product-item-row" key={i}>
                <span className="list-column">{ item.name }</span>
                <span className="list-column">{ item.price }</span>
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