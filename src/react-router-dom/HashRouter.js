import React, { Component } from 'react';
export default class HashRouter extends Component {
    constructor() {
        super();
        this.state = {
            location:{
                pathname:window.location.hash.slice(1) || '/',
            }
        };
    }
    componentDidMount(){
        //默认hash没有时跳转到/
        window.location.hash = window.location.hash || '/';
        window.addEventListener('hashchange',()=>{
            this.setState({
                ...this.state.location,
                pathname:window.location.hash.slice(1) || '',
            })
        })
    }
    render() {
        return (
        <div>
            {this.props.children}
        </div>
        );
    }
}