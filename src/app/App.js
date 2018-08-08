import React, {Component} from 'react'
import _ from 'lodash'

//export const App = () => {
//  return _.join(['Hello', 'Librairie React', 'Transpiler Babel', '& Bundler Webpack'], ' ')
//}

export class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 offset-xs-1">
            <h1>Hello!</h1>
          </div>
        </div>
      </div>
    )
  }
}
