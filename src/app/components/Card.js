import React, { Component } from 'react'

export class Card extends Component {
  render () {
    return (
      <div className="card text-white bg-dark mb-3">
        <img className="card-img-top" src="../../assets/react-logo.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
  }
}
