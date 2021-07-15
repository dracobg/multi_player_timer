import React, { Component } from 'react'
import './App.css';
import Clock from './Clock'
import Settings from './Settings'
import SettingsIcon from './media/SettingsIcon.svg'

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
      names: ['Player1', 'Player2', 'Player4', 'Player3'],
      clocks: [originalSecondsClock, originalSecondsClock, originalSecondsClock, originalSecondsClock],
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer],
      extensions: [originalExtensions, originalExtensions, originalExtensions, originalExtensions],
      playerSelected: 5,
      started: false,
      paused: false,
      playerQty: 4,
      showSettings: true
    }

    this.handleChangeMinutes = this.handleChangeMinutes.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.setSelectedPlayer = this.setSelectedPlayer.bind(this);
    this.handleSelectPlayerNumber = this.handleSelectPlayerNumber.bind(this)
    this.displayClocks = this.displayClocks.bind(this)
    this.useExtension = this.useExtension.bind(this)
    this.toggleRotate = this.toggleRotate.bind(this)
    this.startGame = this.startGame.bind(this)
    this.setShowSettings = this.setShowSettings.bind(this)
    this.returnToGame = this.returnToGame.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      let tempClocks = this.state.clocks
      let tempTimers = this.state.timers

      if (this.state.started && !this.state.paused && this.state.clocks[this.state.playerSelected] > 0) {
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

  startGame() {
    const numberSeconds = this.state.numberMinutes * 60

    this.setState({
      clocks: [numberSeconds, numberSeconds, numberSeconds, numberSeconds],
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer],
      extensions: [originalExtensions, originalExtensions, originalExtensions, originalExtensions],
      playerSelected: 5,
      started: false,
      showSettings: false
    })
  }

  returnToGame() {
    this.setState({
      showSettings: false
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
        paused: false,
        timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer]
      })
    } else {
      this.setState({
        paused: !this.state.paused,
      })
    }
  }

  setShowSettings(newStatus) {
    this.setState({showSettings: newStatus})
  }

  displayClocks() {
    let clockArray = []
    for (let n = 0; n < this.state.playerQty; n++) {
      clockArray.push(
        <Clock
          key={n}
          index={n}
          playerName={this.state.names[n]}
          handleChangeName={this.handleChangeName}
          clock={this.state.clocks[n]}
          timer={this.state.timers[n]}
          playerSelected={this.state.playerSelected}
          setSelectedPlayer={this.setSelectedPlayer}
          extensions={this.state.extensions[n]}
          useExtension={this.useExtension}
          playerQty={this.state.playerQty}
          started={this.state.started}
          paused={this.state.paused}
          rotate={this.state.rotate}
          showSettings={this.state.showSettings}
          setShowSettings={this.setShowSettings}
        />
      )
    }

    return (
      <div id='clocksDiv' className={this.state.playerQty === 4 ? 'clocksDiv' : 'clocksDiv twoPlayer'}>
        {clockArray}
      </div>
      )
  }

  render() {
    return (
      <div className="App">

        {this.state.showSettings
          ? <Settings
            names={this.state.names}
            handleChangeName={this.handleChangeName}
            playerQty={this.state.playerQty}
            handleSelectPlayerNumber={this.handleSelectPlayerNumber}
            numberMinutes={this.state.numberMinutes}
            handleChangeMinutes={this.handleChangeMinutes}
            rotate={this.state.rotate}
            started={this.state.started}
            toggleRotate={this.toggleRotate}
            startGame={this.startGame}
            returnToGame={this.returnToGame}
          />

          : <div>
              <div>
                <img id='settingsIcon' className='settingsIcon' src={SettingsIcon} alt='Go to Settings Screen' onClick={() => this.setShowSettings(true)} />
              </div>
              {this.displayClocks()}
            
            </div>}
      </div>
    )
  }
}

export default App
