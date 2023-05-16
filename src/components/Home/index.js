import {Component} from 'react'

import Header from '../Header'

import './index.css'

export default class Home extends Component {
  componentDidMount() {
    this.getDate()
  }

  getDate = async () => {
    const requestUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(requestUrl)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div className="home-bg-container">
        <Header />
      </div>
    )
  }
}
