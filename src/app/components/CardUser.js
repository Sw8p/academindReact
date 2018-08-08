import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CardUser extends Component {
  render () {
    const {name, age, hobbies, color} = this.props.user
    return (
      <div className={"card border-"+color+" mb-3"} style={{maxWidth: 18 + 'rem'}}>
        <div className="card-header">{name} - {age} ans</div>
        <div className={"card-body text-"+color}>
          <h5 className="card-title">My Hobbies : </h5>
            <ul className="card-text">
              {hobbies.map((hobby, k) => (
                <li key={k}>
                  {hobby}
                </li>
              ))}
            </ul>
        </div>
      </div>
    )
  }
}

CardUser.propTypes = {
  user: PropTypes.object,
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string
}
