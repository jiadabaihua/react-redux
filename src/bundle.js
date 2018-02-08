import React, { Component } from 'react'
import App from './app.js';
const currentPage = "$$currentPage";
class Bundle extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         mod: null
    //     }
    // }
    // componentWillMount() {
    //     this.load(this.props)
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.load !== this.props.load) {
    //         this.load(nextProps)
    //     }
    // }

    // load(props) {
    //     this.setState({
    //         mod: null
    //     })
    //     props.load((mod) => {
    //         this.setState({
    //             mod: mod.default ? mod.default : mod
    //         })
    //     })
    // }

    // render() {
    //     if (!this.state.mod)
    //         return false
    //     return this.props.children(this.state.mod)
    // }

    constructor(props) {
        super(props);
        this.state = {};
    }

    getPagePath(props) {
        let { match: { url } } = props || this.props;
        let path = url.substr(1) || "Home";
        return path;
    }

    componentWillMount() {
        this.loadAsyncPages(this.getPagePath());
    }

    componentWillReceiveProps(nextProps) {
        let currentPath = this.getPagePath();
        let nextPath = this.getPagePath(nextProps);
        if (currentPath !== nextPath && !this.state[nextPath]) {
            this.loadAsyncPages(nextPath);
        }
    }

    getPageBundle(pageName){
        let first = pageName.substring(0,1).toUpperCase();
        let end = pageName.substring(1,pageName.length);
        let pages = first + end;
        return pages;
      }
    render() {
        let { state } = this;
        let path = this.getPagePath();
        let PageComponent = state[path];
        return (
            <App {...this.props}>
                {PageComponent ? <PageComponent {...this.props} /> : null}
            </App>
        );
    }

    loadAsyncPages(path) {
        import(
            /* webpackMode: "lazy", webpackChunkName: "[request]" */ `./page/${this.getPageBundle(path)}`
        ).then(Component => {
            this.setState({
                [path]: Component["default"],
                [currentPage]: path
            },function(){
                // console.log(this.state)
            });
        });
    }
}

export default Bundle