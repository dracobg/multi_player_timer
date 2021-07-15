import './App.css'
import PlayerInput from './PlayerInput'

function Settings(props) {
  return (
    <div id='settingsDiv' className='settingsDiv'>

      <div id='selectPlayerNumber' className='selectPlayerNumber'>
        <span id='noPlayersLabel' className='settingsLabel'>
          Players:
        </span>
        <span>
          <button
            id='selectPlayers2'
            className={props.playerQty === 2 ? 'selectPlayers selected' : 'selectPlayers'}
            name='2PlayerSelected'
            onClick={props.handleSelectPlayerNumber}
          >
            2
          </button>

          <button
            id='selectPlayers4'
            className={props.playerQty === 4 ? 'selectPlayers selected' : 'selectPlayers'}
            name='4PlayerSelected'
            onClick={props.handleSelectPlayerNumber}
          >
            4
          </button>
        </span>
      </div>

      <PlayerInput index={0} playerNumber={1} playerName={props.names[0]} handleChangeName={props.handleChangeName} />
      <PlayerInput index={1} playerNumber={2} playerName={props.names[1]} handleChangeName={props.handleChangeName} />
      {props.playerQty === 4 && <PlayerInput index={3} playerNumber={3} playerName={props.names[3]} handleChangeName={props.handleChangeName} />}
      {props.playerQty === 4 && <PlayerInput index={2} playerNumber={4} playerName={props.names[2]} handleChangeName={props.handleChangeName} />}

      <div id='setPlayerMins' className='setClock'>
        <div id='noMinsLabel' className='settingsLabel'>
          Player Mins:
        </div>
        <input
          id='noMinsInput'
          className='noMinsInput'
          size='20'
          maxLength='2'
          type='text'
          value={props.numberMinutes}
          onChange={props.handleChangeMinutes}
        />
      </div>

      <div id='rotateButton' className='settingsButtons'>
        <button
          id='rotateBtn'
          className={!props.rotate ? 'settingsBtn' : 'settingsBtn selected'}
          onClick={props.toggleRotate}
        >
          Rotate
        </button>
      </div>

      <div id='startButton' className='settingsButtons'>
        <button
          id='start'
          className='settingsBtn'
          onClick={props.startGame}
        >
          Start New Game
        </button>
      </div>

      {props.started
        && <div id='returnButton' className='settingsButtons'>
          <button
            id='return'
            className='settingsBtn'
            onClick={props.returnToGame}
          >
            Return to Game
          </button>
        </div>}

    </div>
  )
}

export default Settings
