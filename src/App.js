import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

export default class App extends Component {
  p = "parth";
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={3}/>
      </div>
    )
  }
}

