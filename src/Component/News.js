import React, { Component } from 'react'
import NewIteam from './NewIteam'

export class News extends Component {
  render() {
    return (
      <div>
        this is news components
        <NewIteam/>
        <NewIteam/>
        <NewIteam/>
        <NewIteam/>
        <NewIteam/>
      </div>
    )
  }
}

export default News