import React, { Component } from 'react'
import './App.css';
import Clock from './Clock'
import Settings from './Settings'
import NicolBolas from './media/NicolBolas.jpg'

const originalMinutesClock = 30
const originalSecondsClock = originalMinutesClock * 60

const originalMinutesTimer = 2
const originalSecondsTimer = originalMinutesTimer * 60

const originalExtensions = 5

class App extends Component {

  constructor() {
    super()
    this.state = {
      numberMinutes: originalMinutesClock,
      names: ['Player 1 Name', 'Player 2 Name', 'Player 3 Name', 'Player 4 Name'],
      clocks: [originalSecondsClock, originalSecondsClock, originalSecondsClock, originalSecondsClock],
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer],
      extensions: [originalExtensions, originalExtensions, originalExtensions, originalExtensions],
      playerSelected: 5,
      started: false,
      playerQty: 4,
      showSettings: true
    }

    this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.setSelectedPlayer = this.setSelectedPlayer.bind(this);
    this.handleSelectPlayerNumber = this.handleSelectPlayerNumber.bind(this);
    this.displayClocks = this.displayClocks.bind(this);
    this.useExtension = this.useExtension.bind(this);
    this.toggleRotate = this.toggleRotate.bind(this);
    this.restartGame = this.restartGame.bind(this);
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

  toggleRotate() {
    this.setState({ rotate: !this.state.rotate })
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
      names: tempNames
    })
  }

  restartGame() {
    const numberSeconds = this.state.numberMinutes * 60

    this.setState({
      clocks: [numberSeconds, numberSeconds, numberSeconds, numberSeconds],
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer],
      extensions: [originalExtensions, originalExtensions, originalExtensions, originalExtensions],
      playerSelected: 5,
      started: false
    })
  }

  useExtension(index) {
    if (this.state.playerSelected === index && this.state.timers[index] === 0 && this.state.extensions[index] > 0) {
      const tempExtensions = this.state.extensions
      tempExtensions[index] = this.state.extensions[index] - 1

      this.setState({
        extensions: tempExtensions,
        timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer]
      })
    }
  }

  setSelectedPlayer(indexPlayer) {
    if (indexPlayer !== this.state.playerSelected) {
      this.setState({
        playerSelected: indexPlayer,
        started: true,
        timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer]
      })
    }
  }

  displayClocks() {
    let clockArray = []
    for (let n = 0; n < this.state.playerQty; n++) {
      clockArray.push(
        <Clock key={n} index={n} playerName={this.state.names[n]} handleChangeName={this.handleChangeName} clock={this.state.clocks[n]} timer={this.state.timers[n]} playerSelected={this.state.playerSelected} setSelectedPlayer={this.setSelectedPlayer} extensions={this.state.extensions[n]} useExtension={this.useExtension} playerQty={this.state.playerQty} started={this.state.started} rotate={this.state.rotate} />
      )
    }

    return clockArray
  }

  render() {
    return (
      <div className="App">
        <Settings
          playerQty={this.state.playerQty}
          handleSelectPlayerNumber={this.handleSelectPlayerNumber}
          numberMinutes={this.state.numberMinutes}
          handleChangeMinutes={this.handleChangeMinutes}
          rotate={this.state.rotate}
          toggleRotate={this.toggleRotate}
          restartGame={this.restartGame}
        />

        <div id='clocksDiv' className={this.state.playerQty === 4 ? 'clocksDiv' : 'clocksDiv twoPlayer'}>
          {this.displayClocks()}
        </div>

        <div className='wallpaperDiv'>
          <img id='wallpaperImg' alt='wallpaper image' className='wallpaperImg' src={NicolBolas} />
        </div>

      </div>
    )
  }
}

export default App
