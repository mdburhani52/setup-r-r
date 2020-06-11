import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';
import { bindActionCreators } from 'redux';
import {getData} from 'store/actions';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.title}</h1>
          <button onClick={()=>this.props.getData()}>Click me and check network</button>

          {
            this.props.data1 !=null?
          <div>Id:-{this.props.data1.id} <br/> Created At:-{this.props.data1.createdAt}</div>:null
          }
        </header>
      </div>
    );
  }
};


const mapStateToProps = state => {
  return {
    title: state.user.Reducer1.title,
    data1 :state.user.Reducer1.data1
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
