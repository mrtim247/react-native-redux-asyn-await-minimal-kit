import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { compose, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import todoAction from './actions';
// Reducer
import reducer from './reducers';
// containers
import Home from './containers/Home';

let middlewares = [thunk, promise];

if(__DEV__) {
	const createLogger = require('redux-logger');
	const logger = createLogger();
	middlewares.push(logger);
}

const composeMiddlewares = compose(applyMiddleware(...middlewares));
const store = createStore(reducer, composeMiddlewares);

// let { height, width } = Dimensions.get('window');
 
store.dispatch(todoAction.checkTodoList());

export default class extends Component {
  render() {
    return (
     <Provider store={store}>
       <Router>
         <Scene key="root">
         	<Scene key="home" component={Home} 
         		initial 
         		hideNavBar 
         		hideTabBar/>
         </Scene>
       </Router>
     </Provider>
   );
  }
}
