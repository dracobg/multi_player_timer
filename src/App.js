import React, { Component } from 'react'
import './App.css';
import Clock from './Clock'

const originalMinutesClock = 30
const originalSecondsClock = originalMinutesClock * 60

const originalMinutesTimer = 2
const originalSecondsTimer = originalMinutesTimer * 60

class App extends Component {

  constructor() {
    super()
    this.state = {
      numberMinutes: originalMinutesClock,
      names: ['Player Name 1', 'Player Name 2', 'Player Name 3', 'Player Name 4'],
      clocks: [originalSecondsClock, originalSecondsClock, originalSecondsClock, originalSecondsClock],
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer],
      playerSelected: 5,
      started: false,
      playerQty: 4
    }

    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.setSelectedPlayer = this.setSelectedPlayer.bind(this);
    this.handleSelectPlayerNumber = this.handleSelectPlayerNumber.bind(this);
    this.displayClocks = this.displayClocks.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      let tempClocks = this.state.clocks
      let tempTimers = this.state.timers

      if (this.state.started && this.state.clocks[this.state.playerSelected] > 0) {
        tempClocks[this.state.playerSelected] = tempClocks[this.state.playerSelected] - 1

        if (this.state.timers[this.state.playerSelected] > 0) {
          tempTimers[this.state.playerSelected] = tempTimers[this.state.playerSelected] - 1
        }
        
        this.setState({
          clocks: tempClocks,
          timers: tempTimers
        })
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
        clocks: [timeSetting, timeSetting, timeSetting, timeSetting]
      })
    }
  }

  handleSelectPlayerNumber(e) {
    const playerQty = e.target.name === '2PlayerSelected' ? 2 : 4
    this.setState({
      playerQty: playerQty
    })
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
      started: true,
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer]
    })
  }

  displayClocks() {
    let clockArray = []
    for (let n = 0; n < this.state.playerQty; n++) {
      clockArray.push(
        <Clock key={n} index={n} playerName={this.state.names[n]} handleChangeName={this.handleChangeName} clock={this.state.clocks[n]} timer={this.state.timers[n]} playerSelected={this.state.playerSelected} setSelectedPlayer={this.setSelectedPlayer} />
      )
    }

    return clockArray
  }

  render() {
    return (
      <div className="App">

        <div id='selectPlayerNumber' className='selectPlayerNumber'>
          <div id='noPlayersLabel' className='noPlayersLabel'>
            Select number of players - 2 or 4
          </div>
          <div>
            <button
              id='selectPlayers2'
              className={this.state.playerQty === 2 ? 'selectPlayers selected' : 'selectPlayers'}
              name='2PlayerSelected'
              onClick={this.handleSelectPlayerNumber}
            >
              2
            </button>

            <button
              id='selectPlayers4'
              className={this.state.playerQty === 4 ? 'selectPlayers selected' : 'selectPlayers'}
              name='4PlayerSelected'
              onClick={this.handleSelectPlayerNumber}
            >
              4
            </button>
          </div>
        </div>

        <div id='setClock' className='setClock'>
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
          {this.displayClocks()}
        </div>

      </div>
    )
  }
}

export default App
