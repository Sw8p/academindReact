import React from 'react'
import PropTypes from 'prop-types'

export class Home extends React.Component {
  constructor(props){
    super();
    this.state = {
      counter : props.initialCounter,
      timer : 0
    }
    //execute Once after time
    //setTimeout(() => {
    //  this.setState({
    //    timer : 1
    //  })
    //}, 1000)
    //repeate execution after time
    setInterval(() => {
      this.setState({
        timer : this.state.timer + 1
      })
    }, 1000)
  }

  countClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    const {colors} = this.props
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Home Component in Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <h4>Bootstrap Color Button & React Events:</h4>
            {colors.map((color, k) => (
              <button
                key={k}
                className={"btn btn-"+color}
                type="button"
                style={{margin: .4 +'em'}}
                onClick={() => this.countClick()}
                >
                {color}
              </button>
            ))}
            <p className="lead">Counter CLick Button : {this.state.counter}</p>
        </div>
        {this.props.children}
        <p className="lead">Chronos : {this.state.timer}</p>
      </div>
    )
  }
}

Home.propTypes = {
  colors: PropTypes.array,
  counter: PropTypes.number,
  children: PropTypes.element
}
