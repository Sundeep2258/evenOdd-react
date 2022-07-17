import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onchangeEvenOdd = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="outer-cunt">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="change-text">Count is {displayText}</p>
          <button
            className="button"
            type="button"
            onClick={this.onchangeEvenOdd}
          >
            Increment
          </button>
          <p className="note"> *Increase By Random number between 0 to 100 </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
