import './App.css'

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

      <div id='setClock' className='setClock'>
        <div id='noMinsLabel' className='settingsLabel'>
          Minutes:
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

      <div id='settingsButtons' className='settingsButtons'>
        <span>
          <button
            id='rotateBtn'
            className={!props.rotate ? 'settingsBtn' : 'settingsBtn selected'}
            onClick={props.toggleRotate}
          >
            Rotate
          </button>
        </span>

        <span>
          <button
            id='restart'
            className='settingsBtn'
            onClick={props.restartGame}
          >
            Restart
          </button>
        </span>
      </div>

    </div>
  )
}

export default Settings
