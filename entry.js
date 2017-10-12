import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

import loadPage from 'bundle-loader?lazy!./src/page/home';

import Bundle from './src/bundle';

import thunkMiddleware from 'redux-thunk';
//加载history
import { HashRouter as Router, Route } from "react-router-dom";
//加载react-redux
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
const customMiddleware=[thunkMiddleware];
var store=applyMiddleware(...customMiddleware)(createStore);
store=createStore(reducers);

// const Home = () => <h2>home</h2>;
// const Detail = () =><h2>Detail</h2>;
// const routes = [
//     { path: '/home',
//       component: Home
//     },
//     { path: '/detail',
//       component: Detail
//     }
//   ]

const A = (props) => (
    <Bundle load={loadPage}>
        {(Container) => <Container {...props}/>}
    </Bundle>
)

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
      <route.component {...props} routes={route.routes}/>
    )}/>
  )

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/* <div> */}
                {/* {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))} */}
            {/* </div> */}
            <div>
                {/* <Route path={'/home'} render={()=>{
                    return (<Bundle load={require('bundle-loader?lazy!./src/page/home')}>
                        {(Cp1)=><Cp1></Cp1>}
                    </Bundle>)
                }} >
                </Route>
                <Route path={'/detail'} render={()=>{
                    return (<Bundle load={require('bundle-loader?lazy!./src/page/detail')}>
                        {(Cp2)=><Cp2></Cp2>}
                    </Bundle>)
                }} >
                </Route> */}
                <Route path={'*'} component={Bundle} />
            </div>
        </Router>
    </Provider>
    ,document.getElementById('jyq')
)