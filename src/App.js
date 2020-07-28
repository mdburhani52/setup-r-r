import React, { Component, useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollToTop from 'react-router-scroll-top';
import { bindActionCreators } from 'redux';
import { getData } from 'store/actions';
import logo from './logo.svg';
import './App.css';


function App(props) {

  const [count, setCount] = useState(0);
  const [myVal, setmyVal] = useState('');
  const [todos, setTodos] = useState(
    [
      { name: 'James' },
      { name: 'Dany' },
      { name: 'Micheal' }
    ]
    );

  function acx() {
    setCount(count+1)
  }

  function changeHandler(e){
    setmyVal(e.target.value);
  }

  function arrChangeHandler(){
    let ab = todos;
    ab[0].name = "mohammad burhani";
   
    setTodos([...ab]);
  }
  
  useEffect(() => {
    console.log(count)
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.title}</h1>
        <button onClick={() => props.getData()}>Click me and check network</button>
        <br/>
        {
          props.data1 != null ?
            <div>Id:-{props.data1.id} <br /> Created At:-{props.data1.createdAt}</div> : null
        }
        <br/>

        <button onClick={acx}>Click me  {count}</button>
        <br/>

        <input 
          type={'text'} 
          name={'myVal'}
          value={myVal}
          onChange={changeHandler}
        />
        <br/>

        {
          todos.map((tod, i) => {
          return(<div key={i}>{tod.name}</div>)
          })
        }
        <button onClick={arrChangeHandler}>Change Name</button>

      </header>
    </div>
  );

};


const mapStateToProps = state => {
  return {
    title: state.user.Reducer1.title,
    data1: state.user.Reducer1.data1
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
