import React from 'react'
import PropTypes from 'prop-types'

export class Home extends React.Component {
  render () {
    const {colors} = this.props
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Home Component in Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <ul>Bootstrap Color :
            {colors.map((color, k) => (
              <li key={k} className={"text-"+color}>{color}</li>
            ))}
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

Home.propTypes = {
  colors: PropTypes.array,
  children: PropTypes.element
}
