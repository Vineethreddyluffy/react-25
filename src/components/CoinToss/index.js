import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    headCount: 0,
    tailCount: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossTheCoin = () => {
    const {count} = this.state
    const {headCount} = this.state
    const {tailCount} = this.state
    const rand = Math.random() * 2
    const num = Math.ceil(rand)
    if (num === 1) {
      this.setState({
        count: count + 1,
        headCount: headCount + 1,
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        count: count + 1,
        tailCount: tailCount + 1,
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {count} = this.state
    const {headCount} = this.state
    const {tailCount} = this.state
    const {url} = this.state
    return (
      <div className="card-cont">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={url} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="text-cont">
            <p className="para2">Total: {count}</p>
            <p className="para2">Heads: {headCount}</p>
            <p className="para2">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
