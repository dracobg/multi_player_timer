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
      timerMinutes: originalMinutesTimer,
      names: ['Player1', 'Player2', 'Player4', 'Player3'],
      clocks: [originalSecondsClock, originalSecondsClock, originalSecondsClock, originalSecondsClock],
      timers: [originalSecondsTimer, originalSecondsTimer, originalSecondsTimer, originalSecondsTimer],
      extensions: [originalExtensions, originalExtensions, originalExtensions, originalExtensions],
      playerSelected: 5,
      playerInterrupting: 5,
      started: false,
      pausedPlayer: [false, false, false, false],
      playerQty: 4,
      rotate: true,
      showSettings: true,
      extensionsQty: 5
    }

    this.handleChangeMinutes = this.handleChangeMinutes.bind(this)
    this.handleChangeTimer = this.handleChangeTimer.bind(this)
    this.handleChangeExtensions = this.handleChangeExtensions.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.setSelectedPlayer = this.setSelectedPlayer.bind(this);
    this.handleSelectPlayerNumber = this.handleSelectPlayerNumber.bind(this)
    this.displayClocks = this.displayClocks.bind(this)
    this.useExtension = this.useExtension.bind(this)
    this.toggleRotate = this.toggleRotate.bind(this)
    this.startGame = this.startGame.bind(this)
    this.setShowSettings = this.setShowSettings.bind(this)
    this.returnToGame = this.returnToGame.bind(this)
    this.handleInterrupt = this.handleInterrupt.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      let tempClocks = this.state.clocks
      let tempTimers = this.state.timers

      if (this.state.started && !this.state.pausedPlayer[this.state.playerSelected] && this.state.clocks[this.state.playerSelected] > 0 ) {
        tempClocks[this.state.playerSelected] = tempClocks[this.state.playerSelected] - 1

        /* istanbul ignore else */
        if (this.state.timers[this.state.playerSelected] > 0) {
          tempTimers[this.state.playerSelected] = tempTimers[this.state.playerSelected] - 1
        }

        this.setState({
          clocks: tempClocks,
          timers: tempTimers
        })
      } else if (this.state.started && !this.state.pausedPlayer[this.state.playerInterrupting] && this.state.clocks[this.state.playerInterrupting] > 0 ) {
        tempClocks[this.state.playerInterrupting] = tempClocks[this.state.playerInterrupting] - 1

        /* istanbul ignore else */
        if (this.state.timers[this.state.playerInterrupting] > 0) {
          tempTimers[this.state.playerInterrupting] = tempTimers[this.state.playerInterrupting] - 1
        }

        this.setState({
          clocks: tempClocks,
          timers: tempTimers
        })
      }
    }, 1000)

    /* istanbul ignore next */
    window.addEventListener('beforeunload', function (e) {
      e.preventDefault()
      e.returnValue = ''
    })
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

  handleChangeTimer(e) {
    const rx = new RegExp('^[0-9]{0,1}$')
    const isInteger = rx.test(e.target.value)

    if (isInteger) {
      const timeSetting = e.target.value * 60

      this.setState({
        timerMinutes: e.target.value,
        timers: [timeSetting, timeSetting, timeSetting, timeSetting]
      })
    }
  }

  handleChangeExtensions(e) {
    const rx = new RegExp('^[0-9]{0,1}$')
    const isInteger = rx.test(e.target.value)

    if (isInteger) {
      const extensionsQtySetting = e.target.value

      this.setState({
        extensionsQty: extensionsQtySetting,
        extensions: [extensionsQtySetting, extensionsQtySetting, extensionsQtySetting, extensionsQtySetting]
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
    const timerSeconds = this.state.timerMinutes * 60
    const extensionsQty = this.state.extensionsQty

    this.setState({
      clocks: [numberSeconds, numberSeconds, numberSeconds, numberSeconds],
      timers: [timerSeconds, timerSeconds, timerSeconds, timerSeconds],
      extensions: [extensionsQty, extensionsQty, extensionsQty, extensionsQty],
      playerSelected: 5,
      playerInterrupting: 5,
      started: false,
      pausedPlayer: [false, false, false, false],
      showSettings: false
    })
  }

  returnToGame() {
    this.setState({
      showSettings: false
    })
  }

  useExtension(index) {
    if ( (this.state.playerSelected === index || this.state.playerInterrupting === index) && this.state.timers[index] === 0 && this.state.extensions[index] > 0) {
      const tempExtensions = this.state.extensions
      tempExtensions[index] = this.state.extensions[index] - 1

      const tempTimers = this.state.timers
      tempTimers[index] = this.state.timerMinutes * 60

      this.setState({
        extensions: tempExtensions,
        timers: tempTimers
      })
    }
  }

  handleInterrupt(index) {
    if (this.state.playerSelected !== index && this.state.clocks[index] !== 0) {
      const tempPausedPlayer = this.state.pausedPlayer

      tempPausedPlayer[this.state.playerSelected] = true

      this.setState({
        pausedPlayer: tempPausedPlayer,
        playerInterrupting: index
      })
    }
  }

  setSelectedPlayer(indexPlayer) {
    const tempPausedPlayer = this.state.pausedPlayer
    const playerTimers = this.state.timerMinutes * 60

    const tempTimers = [playerTimers, playerTimers, playerTimers, playerTimers]

    if (indexPlayer !== this.state.playerSelected) {

      tempPausedPlayer[indexPlayer] = false
      
      this.setState({
        playerSelected: indexPlayer,
        playerInterrupting: 5,
        started: true,
        pausedPlayer: tempPausedPlayer,
        timers: tempTimers
      })
    } else {
      tempPausedPlayer[indexPlayer] = !this.state.pausedPlayer[indexPlayer]
      tempTimers[indexPlayer] = this.state.timers[indexPlayer]

      this.setState({
        pausedPlayer: tempPausedPlayer,
        playerInterrupting: 5
      })
    }
  }

  setShowSettings(newStatus) {
    this.setState({ showSettings: newStatus })
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
          rotate={this.state.rotate}
          showSettings={this.state.showSettings}
          setShowSettings={this.setShowSettings}
          handleInterrupt={this.handleInterrupt}
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
            timerMinutes={this.state.timerMinutes}
            extensionsQty={this.state.extensionsQty}
            handleChangeMinutes={this.handleChangeMinutes}
            handleChangeTimer={this.handleChangeTimer}
            handleChangeExtensions={this.handleChangeExtensions}
            rotate={this.state.rotate}
            started={this.state.started}
            toggleRotate={this.toggleRotate}
            startGame={this.startGame}
            returnToGame={this.returnToGame}
          />

          : <div>
            <div id='settingsIconDiv' className='settingsIconDiv'>
              <img id='settingsIcon' className='settingsIcon' src={SettingsIcon} alt='Go to Settings Screen' onClick={() => this.setShowSettings(true)} />
            </div>
            {this.displayClocks()}

          </div>}
      </div>
    )
  }
}

export default App
