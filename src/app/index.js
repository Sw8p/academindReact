import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import _ from 'lodash'
import 'bootstrap'

//import components
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Card } from './components/Card'
import { CardUser } from './components/CardUser'

class App extends Component {
  render() {
    const colorBootstrap = ["primary", "secondary", "success", "danger", "warning", "info", "dark"]
    const users = [
      {
        name: "Tux",
        hobbies: ["OpenSource", "Coding", "Surf"],
        age: 26,
        color: colorBootstrap[_.random(6)]
      },
      {
        name: "Tom",
        hobbies: ["Chips", "Houlahoup"],
        age: 56,
        color: colorBootstrap[_.random(6)]
      },
      {
        name: "BlackBerry",
        hobbies: ["Plantage", "Bug", "Autodestruction"],
        age: 10,
        color: colorBootstrap[_.random(6)]
      },
    ]
    return (
      <div className="container">
        <div className="row">
          <div className="col offset-xs-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col offset-xs-1">
            <Home colors={colorBootstrap} >
              <p>Un paragraphe en <strong>props CHILDREN</strong></p>
            </Home>
          </div>
        </div>
        <div className="row">
          <div className="col offset-xs-1">
            <div className="card-deck">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-xs-1">
            <div className="card-deck">
              {users.map((user, k) => (
                <CardUser key={k} user={user}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



//ReactDOM.render(<App />, document.getElementById('root'));
render(<App />, document.getElementById('root'));
