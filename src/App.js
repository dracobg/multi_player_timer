import React, { Component } from 'react'
import './App.css';
import Clock from './Clock'

const originalMinutes = 30
const originalSeconds = originalMinutes * 60

class App extends Component {

  constructor() {
    super()
    this.state = {
      numberMinutes: originalMinutes,
      names: ['Player Name 1', 'Player Name 2', 'Player Name 3', 'Player Name 4'],
      timers: [originalSeconds, originalSeconds, originalSeconds, originalSeconds],
      playerSelected: 0,
      started: false
    }

    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.setSelectedPlayer = this.setSelectedPlayer.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.started && this.state.timers[this.state.playerSelected] > 0) {
        let tempTimers = this.state.timers
        tempTimers[this.state.playerSelected] = tempTimers[this.state.playerSelected] - 1
        this.setState({ timers: tempTimers })
      }
    }, 1000)
  }

  handleChangeMinutes(e) {
    const rx = new RegExp('^[0-9]{0,2}$')
    const isInteger = rx.test(e.target.value)

    if (isInteger) {
      const timeSetting = e.target.value * 60

      this.setState({
        numberMinutes: e.target.value,
        timers: [timeSetting, timeSetting, timeSetting, timeSetting]
      })
    }
  }

  handleChangeName(e, index) {
    const tempNames = this.state.names
    tempNames[index] = e.target.value

    this.setState({
      mames: tempNames
    })
  }

  setSelectedPlayer(indexPlayer) {
    this.setState({
      playerSelected: indexPlayer,
      started: true
    })
  }

  render() {
    return (
      <div className="App">

        <div id='setTimer' className='setTimer'>
          <div id='noMinsLabel' className='noMinsLabel'>
            Set number of minutes per player:
          </div>
          <div>
            <input
              id='noMinsInput'
              className='noMinsInput'
              size='20'
              maxLength='2'
              type='text'
              value={this.state.numberMinutes}
              onChange={this.handleChangeMinutes}
            />
          </div>
        </div>

        <div id='clocksDiv' className='clocksDiv'>
          <Clock key='0' index='0' playerName={this.state.names[0]} handleChangeName={this.handleChangeName} timer={this.state.timers[0]} playerSelected={this.state.playerSelected} setSelectedPlayer={this.setSelectedPlayer} />
          <Clock key='1' index='1' playerName={this.state.names[1]} handleChangeName={this.handleChangeName} timer={this.state.timers[1]} playerSelected={this.state.playerSelected} setSelectedPlayer={this.setSelectedPlayer} />
          <Clock key='3' index='3' playerName={this.state.names[3]} handleChangeName={this.handleChangeName} timer={this.state.timers[3]} playerSelected={this.state.playerSelected} setSelectedPlayer={this.setSelectedPlayer} />
          <Clock key='2' index='2' playerName={this.state.names[2]} handleChangeName={this.handleChangeName} timer={this.state.timers[2]} playerSelected={this.state.playerSelected} setSelectedPlayer={this.setSelectedPlayer} />
        </div>

      </div>
    )
  }
}

export default App
